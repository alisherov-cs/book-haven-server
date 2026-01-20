"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../services/prisma/prisma.service");
let BooksService = class BooksService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createBookDto) {
        const book = await this.prisma.book.create({
            data: createBookDto,
        });
        return book;
    }
    async findAll({ page, limit }, { authors, ganers, ratings, priceFrom, priceTo }, search) {
        const where = {};
        if (search) {
            where.name = { contains: search, mode: 'insensitive' };
            where.author = { name: { contains: search, mode: 'insensitive' } };
            where.ganer = { name: { contains: search, mode: 'insensitive' } };
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
        const whereClues = {
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
    async findOne(id) {
        const book = await this.prisma.book.findUnique({
            where: { id },
            include: {
                ganer: true,
                author: true,
                sets: { select: { id: true } },
            },
        });
        if (!book)
            return null;
        return { ...book, sets: book.sets.map(({ id }) => id) };
    }
    async update(id, updateBookDto) {
        const book = await this.prisma.book.findUnique({ where: { id } });
        if (!book)
            return null;
        const updatedBook = await this.prisma.book.update({
            where: { id },
            data: updateBookDto,
        });
        return updatedBook;
    }
    async delete(id) {
        const book = await this.prisma.book.findUnique({ where: { id } });
        if (!book)
            return null;
        await this.prisma.book.delete({ where: { id } });
        return book;
    }
    async addReview(id, reviewDto, user) {
        const book = await this.prisma.book.findUnique({
            where: { id },
        });
        if (!book)
            return null;
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
    async getReviews(id, { page, limit }) {
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
    async addToCart(id, user) {
        const exist = await this.prisma.cart.findUnique({
            where: {
                userId_bookId: {
                    userId: user.userId,
                    bookId: id,
                },
            },
        });
        if (exist)
            return null;
        return await this.prisma.user.update({
            where: { id: user.userId },
            data: { cart: { create: { bookId: id } } },
        });
    }
    async getCart(id, user) {
        const cart = await this.prisma.cart.findUnique({
            where: {
                userId_bookId: {
                    userId: user.userId,
                    bookId: id,
                },
            },
            include: { user: true, book: true },
        });
        if (!cart)
            return null;
        return cart;
    }
    async removeFromCart(id, user) {
        const exist = await this.prisma.cart.findUnique({
            where: {
                userId_bookId: {
                    userId: user.userId,
                    bookId: id,
                },
            },
        });
        if (!exist)
            return null;
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
    async incrementCart(id, user) {
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
    async decrementCart(id, user) {
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
    async addToWishlist(id, user) {
        const exist = await this.prisma.wishlist.findUnique({
            where: {
                userId_bookId: {
                    userId: user.userId,
                    bookId: id,
                },
            },
        });
        if (exist)
            throw new common_1.BadRequestException('wishlist already exist!');
        return await this.prisma.user.update({
            where: { id: user.userId },
            data: {
                wishlist: { create: { bookId: id } },
            },
        });
    }
    async removeFromWishlist(id, user) {
        const exist = await this.prisma.wishlist.findUnique({
            where: {
                userId_bookId: {
                    userId: user.userId,
                    bookId: id,
                },
            },
        });
        if (!exist)
            return null;
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
    async getWishlist(id, user) {
        const wishlist = await this.prisma.wishlist.findUnique({
            where: {
                userId_bookId: {
                    userId: user.userId,
                    bookId: id,
                },
            },
        });
        if (!wishlist)
            return null;
        return wishlist;
    }
    async getAllWishlists(user, { page, limit }) {
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
    async removeAllFromWishlist(user, { ids }) {
        return await this.prisma.wishlist.deleteMany({
            where: { userId: user.userId, bookId: { in: ids } },
        });
    }
    async getAllCarts(user, { page, limit }) {
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
    async removeAllFromCart(user, { ids }) {
        return await this.prisma.cart.deleteMany({
            where: { userId: user.userId, bookId: { in: ids } },
        });
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BooksService);
//# sourceMappingURL=books.service.js.map