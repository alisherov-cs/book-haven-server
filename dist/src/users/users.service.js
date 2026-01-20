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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../services/prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll({ page, limit }) {
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
    async findAllToFollow(user, { page, limit }) {
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
            data: users.map(({ id, username, avatar, _count: { wishlist }, friended }) => ({
                id,
                username,
                avatar,
                wishlistCount: wishlist,
                following: !!friended.length,
            })),
            pagination: { total, totalPages, page, limit },
        };
    }
    async getAllFriends(user, { page, limit }, search) {
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
        const users = search &&
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
                    following: allFriendIds.friends.some((item) => item.friendId === id),
                }))
                : friends.map(({ friend: { id, username, avatar, _count: { wishlist }, }, }) => ({
                    id,
                    username,
                    avatar,
                    wishlistCount: wishlist,
                    following: true,
                })),
            pagination: { total, totalPages, page, limit },
        };
    }
    async followUser(user, id) {
        const exist = await this.prisma.friend.findUnique({
            where: {
                userId_friendId: {
                    userId: user.userId,
                    friendId: id,
                },
            },
        });
        if (exist)
            return null;
        return await this.prisma.friend.create({
            data: { userId: user.userId, friendId: id },
        });
    }
    async unFollowUser(user, id) {
        const exist = await this.prisma.friend.findUnique({
            where: {
                userId_friendId: {
                    userId: user.userId,
                    friendId: id,
                },
            },
        });
        if (!exist)
            return null;
        return await this.prisma.friend.delete({
            where: { userId_friendId: { userId: user.userId, friendId: id } },
        });
    }
    async findAllWishlists(id, { page, limit }) {
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
    async getAllSets(user, { page, limit }) {
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
    async createSet(user, { title }) {
        const exist = await this.prisma.set.findUnique({
            where: { userId_title: { userId: user.userId, title } },
        });
        if (exist)
            return null;
        const newSet = await this.prisma.set.create({
            data: { userId: user.userId, title },
        });
        return newSet;
    }
    async getSet(id, { page, limit }) {
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
    async addSet(_, { bookId, setsIds }) {
        await this.prisma.book.update({
            where: { id: bookId },
            data: { sets: { set: [] } },
        });
        return await this.prisma.book.update({
            where: { id: bookId },
            data: { sets: { connect: setsIds.map((id) => ({ id })) } },
        });
    }
    async removeSet(_, { bookIds, setId }) {
        return await this.prisma.set.update({
            where: { id: setId },
            data: { books: { disconnect: bookIds.map((id) => ({ id })) } },
        });
    }
    async editProfile(user, editData) {
        const exist = await this.prisma.user.findUnique({
            where: { username: editData.username },
        });
        if (user.username !== editData.username && exist)
            return null;
        return await this.prisma.user.update({
            where: { id: user.userId },
            data: editData,
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map