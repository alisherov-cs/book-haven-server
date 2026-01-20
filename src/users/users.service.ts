import { Injectable } from '@nestjs/common';
import { UserPayloadDto } from 'src/auth/dto/payload.dto';
import { PaginationDto } from 'src/dto/pagination.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateSetDto } from './dto/createSet.dto';
import { AddSetDto } from './dto/addSet.dto';
import { RemoveFromSetDto } from './dto/removeSet.dto';
import { ProfileEditDto } from './dto/profileEdit.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll({ page, limit }: PaginationDto) {
    const total = await this.prisma.user.count();
    const totalPages = Math.ceil(total / limit);

    const users = await this.prisma.user.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      omit: { password: true },
    });

    return {
      data: users,
      pagination: { total, totalPages, page, limit },
    };
  }

  async findAllToFollow(user: UserPayloadDto, { page, limit }: PaginationDto) {
    const total = await this.prisma.user.count({
      where: { id: { not: user.userId } },
    });
    const totalPages = Math.ceil(total / limit);

    const users = await this.prisma.user.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      where: { id: { not: user.userId } },
      select: {
        id: true,
        username: true,
        avatar: true,
        _count: {
          select: {
            wishlist: true,
          },
        },
        friended: { where: { userId: user.userId } },
      },
    });

    return {
      data: users.map(
        ({ id, username, avatar, _count: { wishlist }, friended }) => ({
          id,
          username,
          avatar,
          wishlistCount: wishlist,
          following: !!friended.length,
        }),
      ),
      pagination: { total, totalPages, page, limit },
    };
  }

  async getAllFriends(
    user: UserPayloadDto,
    { page, limit }: PaginationDto,
    search?: string,
  ) {
    const allFriendIds = await this.prisma.user.findUnique({
      where: { id: user.userId },
      select: {
        friends: {
          select: { friendId: true },
        },
      },
    });

    const total = search
      ? await this.prisma.user.count({
          where: { username: { contains: search } },
        })
      : await this.prisma.friend.count({
          where: { userId: user.userId },
        });
    const totalPages = Math.ceil(total / limit);

    const users =
      search &&
      (await this.prisma.user.findMany({
        where: {
          id: { not: user.userId },
          username: { contains: search, mode: 'insensitive' },
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          username: true,
          avatar: true,
          _count: {
            select: {
              wishlist: true,
            },
          },
        },
      }));

    const friends = await this.prisma.friend.findMany({
      where: { userId: user.userId },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        friend: {
          select: {
            id: true,
            username: true,
            avatar: true,
            _count: {
              select: {
                wishlist: true,
              },
            },
          },
        },
      },
    });

    return {
      data: search
        ? users.map(({ id, username, avatar, _count: { wishlist } }) => ({
            id,
            username,
            avatar,
            wishlistCount: wishlist,
            following: allFriendIds.friends.some(
              (item) => item.friendId === id,
            ),
          }))
        : friends.map(
            ({
              friend: {
                id,
                username,
                avatar,
                _count: { wishlist },
              },
            }) => ({
              id,
              username,
              avatar,
              wishlistCount: wishlist,
              following: true,
            }),
          ),
      pagination: { total, totalPages, page, limit },
    };
  }

  async followUser(user: UserPayloadDto, id: string) {
    const exist = await this.prisma.friend.findUnique({
      where: {
        userId_friendId: {
          userId: user.userId,
          friendId: id,
        },
      },
    });

    if (exist) return null;

    return await this.prisma.friend.create({
      data: { userId: user.userId, friendId: id },
    });
  }

  async unFollowUser(user: UserPayloadDto, id: string) {
    const exist = await this.prisma.friend.findUnique({
      where: {
        userId_friendId: {
          userId: user.userId,
          friendId: id,
        },
      },
    });

    if (!exist) return null;

    return await this.prisma.friend.delete({
      where: { userId_friendId: { userId: user.userId, friendId: id } },
    });
  }

  async findAllWishlists(id: string, { page, limit }: PaginationDto) {
    const total = await this.prisma.wishlist.count({
      where: { userId: id },
    });
    const totalPages = Math.ceil(total / limit);

    const wishlists = await this.prisma.wishlist.findMany({
      where: { userId: id },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      select: { book: { include: { author: true, ganer: true } } },
    });

    return {
      data: wishlists.map(({ book }) => book),
      pagination: { page, limit, total, totalPages },
    };
  }

  async getAllSets(user: UserPayloadDto, { page, limit }: PaginationDto) {
    const total = await this.prisma.set.count({
      where: { userId: user.userId },
    });
    const totalPages = Math.ceil(total / limit);

    const sets = await this.prisma.set.findMany({
      where: { userId: user.userId },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        title: true,
        _count: {
          select: {
            books: true,
          },
        },
      },
    });

    return {
      data: sets.map(({ id, title, _count: { books } }) => ({
        id,
        title,
        booksCount: books,
      })),
      pagination: { page, limit, total, totalPages },
    };
  }

  async createSet(user: UserPayloadDto, { title }: CreateSetDto) {
    const exist = await this.prisma.set.findUnique({
      where: { userId_title: { userId: user.userId, title } },
    });

    if (exist) return null;

    const newSet = await this.prisma.set.create({
      data: { userId: user.userId, title },
    });

    return newSet;
  }

  async getSet(id: string, { page, limit }: PaginationDto) {
    const total = await this.prisma.book.count({
      where: { sets: { some: { id } } },
    });
    const totalPages = Math.ceil(total / limit);
    const books = await this.prisma.book.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      where: { sets: { some: { id } } },
      include: { author: true, ganer: true },
    });

    return { data: books, pagination: { page, limit, total, totalPages } };
  }

  async addSet(_: UserPayloadDto, { bookId, setsIds }: AddSetDto) {
    await this.prisma.book.update({
      where: { id: bookId },
      data: { sets: { set: [] } },
    });

    return await this.prisma.book.update({
      where: { id: bookId },
      data: { sets: { connect: setsIds.map((id) => ({ id })) } },
    });
  }

  async removeSet(_: UserPayloadDto, { bookIds, setId }: RemoveFromSetDto) {
    return await this.prisma.set.update({
      where: { id: setId },
      data: { books: { disconnect: bookIds.map((id) => ({ id })) } },
    });
  }

  async editProfile(user: UserPayloadDto, editData: ProfileEditDto) {
    const exist = await this.prisma.user.findUnique({
      where: { username: editData.username },
    });

    if (user.username !== editData.username && exist) return null;

    return await this.prisma.user.update({
      where: { id: user.userId },
      data: editData,
    });
  }
}
