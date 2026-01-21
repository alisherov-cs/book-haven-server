import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { PaginationDto } from 'src/dto/pagination.dto';
import { AddReviewDto } from './dto/review.dto';
import { UserPayloadDto } from 'src/auth/dto/payload.dto';
import { RemoveAllFromWishlistDto } from './dto/wishlist.dto';
import { FiltersDto } from './dto/filters.dto';
import { BookWhereInput } from 'generated/prisma/models';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto) {
    const book = await this.prisma.book.create({
      data: createBookDto,
    });
    return book;
  }

  async findAll(
    { page, limit }: PaginationDto,
    { authors, ganers, ratings, priceFrom, priceTo }: FiltersDto,
    search?: string,
  ) {
    const where: BookWhereInput = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { ganer: { name: { contains: search, mode: 'insensitive' } } },
        { author: { name: { contains: search, mode: 'insensitive' } } },
      ];
    }

    if (authors?.length) {
      where.author = { id: { in: authors } };
    }

    if (ganers?.length) {
      where.ganer = { id: { in: ganers } };
    }

    if (ratings?.length) {
      where.rating = { in: ratings.map((r) => Number(r)) };
    }

    where.price = { gte: priceFrom, lte: priceTo };

    const whereClues: { where: BookWhereInput } = {
      where,
    };

    const total = await this.prisma.book.count(where ? whereClues : undefined);
    const totalPages = Math.ceil(total / limit);
    const books = await this.prisma.book.findMany({
      where: where ? whereClues.where : undefined,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      include: { author: true, ganer: true, sets: { select: { id: true } } },
    });

    return {
      data: books.map((book) => ({
        ...book,
        sets: book.sets.map(({ id }) => id),
      })),
      pagination: { total, totalPages, page, limit },
    };
  }

  async findOne(id: string) {
    const book = await this.prisma.book.findUnique({
      where: { id },
      include: {
        ganer: true,
        author: true,
        sets: { select: { id: true } },
      },
    });

    if (!book) return null;

    return { ...book, sets: book.sets.map(({ id }) => id) };
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    const book = await this.prisma.book.findUnique({ where: { id } });

    if (!book) return null;

    const updatedBook = await this.prisma.book.update({
      where: { id },
      data: updateBookDto,
    });
    return updatedBook;
  }

  async delete(id: string) {
    const book = await this.prisma.book.findUnique({ where: { id } });

    if (!book) return null;

    await this.prisma.book.delete({ where: { id } });

    return book;
  }

  async addReview(id: string, reviewDto: AddReviewDto, user: UserPayloadDto) {
    const book = await this.prisma.book.findUnique({
      where: { id },
    });

    if (!book) return null;

    await this.prisma.book.update({
      where: { id },
      data: {
        reviews: { create: { ...reviewDto, authorId: user.userId } },
      },
    });

    const result = await this.prisma.review.aggregate({
      where: { bookId: id },
      _avg: { rating: true },
    });

    await this.prisma.book.update({
      where: { id },
      data: { rating: Math.round(result._avg.rating ?? 0) },
    });

    return book;
  }

  async getReviews(id: string, { page, limit }: PaginationDto) {
    const total = await this.prisma.review.count({ where: { bookId: id } });
    const totalPages = Math.ceil(total / limit);
    const reviews = await this.prisma.review.findMany({
      where: { bookId: id },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      include: { author: { omit: { password: true } } },
    });

    return { data: reviews, pagination: { total, totalPages, page, limit } };
  }

  async addToCart(id: string, user: UserPayloadDto) {
    const exist = await this.prisma.cart.findUnique({
      where: {
        userId_bookId: {
          userId: user.userId,
          bookId: id,
        },
      },
    });

    if (exist) return null;

    return await this.prisma.user.update({
      where: { id: user.userId },
      data: { cart: { create: { bookId: id } } },
    });
  }

  async getCart(id: string, user: UserPayloadDto) {
    const cart = await this.prisma.cart.findUnique({
      where: {
        userId_bookId: {
          userId: user.userId,
          bookId: id,
        },
      },
      include: { user: true, book: true },
    });

    if (!cart) return null;

    return cart;
  }

  async removeFromCart(id: string, user: UserPayloadDto) {
    const exist = await this.prisma.cart.findUnique({
      where: {
        userId_bookId: {
          userId: user.userId,
          bookId: id,
        },
      },
    });

    if (!exist) return null;

    await this.prisma.cart.delete({
      where: {
        userId_bookId: {
          userId: user.userId,
          bookId: id,
        },
      },
    });

    return exist;
  }

  async incrementCart(id: string, user: UserPayloadDto) {
    const cart = await this.prisma.cart.findUnique({
      where: {
        userId_bookId: {
          userId: user.userId,
          bookId: id,
        },
      },
    });

    return await this.prisma.cart.update({
      where: {
        userId_bookId: {
          userId: user.userId,
          bookId: id,
        },
      },
      data: {
        qnt: cart.qnt + 1,
      },
    });
  }

  async decrementCart(id: string, user: UserPayloadDto) {
    const cart = await this.prisma.cart.findUnique({
      where: {
        userId_bookId: {
          userId: user.userId,
          bookId: id,
        },
      },
    });

    if (cart.qnt === 1) {
      return await this.prisma.cart.delete({
        where: {
          userId_bookId: {
            userId: user.userId,
            bookId: id,
          },
        },
      });
    }

    return await this.prisma.cart.update({
      where: {
        userId_bookId: {
          userId: user.userId,
          bookId: id,
        },
      },
      data: {
        qnt: cart.qnt - 1,
      },
    });
  }

  async addToWishlist(id: string, user: UserPayloadDto) {
    const exist = await this.prisma.wishlist.findUnique({
      where: {
        userId_bookId: {
          userId: user.userId,
          bookId: id,
        },
      },
    });

    if (exist) throw new BadRequestException('wishlist already exist!');

    return await this.prisma.user.update({
      where: { id: user.userId },
      data: {
        wishlist: { create: { bookId: id } },
      },
    });
  }

  async removeFromWishlist(id: string, user: UserPayloadDto) {
    const exist = await this.prisma.wishlist.findUnique({
      where: {
        userId_bookId: {
          userId: user.userId,
          bookId: id,
        },
      },
    });

    if (!exist) return null;

    await this.prisma.wishlist.delete({
      where: {
        userId_bookId: {
          userId: user.userId,
          bookId: id,
        },
      },
    });

    return exist;
  }

  async getWishlist(id: string, user: UserPayloadDto) {
    const wishlist = await this.prisma.wishlist.findUnique({
      where: {
        userId_bookId: {
          userId: user.userId,
          bookId: id,
        },
      },
    });

    if (!wishlist) return null;

    return wishlist;
  }

  async getAllWishlists(user: UserPayloadDto, { page, limit }: PaginationDto) {
    const total = await this.prisma.wishlist.count({
      where: { userId: user.userId },
    });
    const totalPages = Math.ceil(total / limit);
    const wishlists = await this.prisma.wishlist.findMany({
      where: { userId: user.userId },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      include: { book: { include: { author: true, ganer: true } } },
    });

    return { data: wishlists, pagination: { total, totalPages, page, limit } };
  }

  async removeAllFromWishlist(
    user: UserPayloadDto,
    { ids }: RemoveAllFromWishlistDto,
  ) {
    return await this.prisma.wishlist.deleteMany({
      where: { userId: user.userId, bookId: { in: ids } },
    });
  }

  async getAllCarts(user: UserPayloadDto, { page, limit }: PaginationDto) {
    const total = await this.prisma.cart.count({
      where: { userId: user.userId },
    });
    const totalPages = Math.ceil(total / limit);
    const carts = await this.prisma.cart.findMany({
      where: { userId: user.userId },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      include: { book: { include: { author: true, ganer: true } } },
    });

    return { data: carts, pagination: { total, totalPages, page, limit } };
  }

  async removeAllFromCart(
    user: UserPayloadDto,
    { ids }: RemoveAllFromWishlistDto,
  ) {
    return await this.prisma.cart.deleteMany({
      where: { userId: user.userId, bookId: { in: ids } },
    });
  }
}
