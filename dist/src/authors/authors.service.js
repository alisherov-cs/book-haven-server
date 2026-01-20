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
exports.AuthorsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../services/prisma/prisma.service");
let AuthorsService = class AuthorsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAuthorDto) {
        const author = await this.prisma.author.create({ data: createAuthorDto });
        return author;
    }
    async findAll({ page, limit }, defaultId) {
        const whereWithoutDefault = defaultId ? { id: { not: defaultId } } : {};
        const total = await this.prisma.author.count();
        const totalPages = Math.ceil(total / limit);
        let defaultAuthor = null;
        if (defaultId) {
            defaultAuthor = await this.prisma.author.findUnique({
                where: { id: defaultId },
            });
        }
        const authors = await this.prisma.author.findMany({
            where: whereWithoutDefault,
            skip: (page - 1) * (limit - (defaultAuthor ? 1 : 0)),
            take: defaultAuthor ? limit - 1 : limit,
            orderBy: {
                createdAt: 'desc',
            },
            include: { books: true },
        });
        const data = defaultAuthor ? [defaultAuthor, ...authors] : authors;
        return {
            data,
            pagination: { total, totalPages, page, limit },
        };
    }
    async findAllAuthors({ page, limit }, search) {
        const total = await this.prisma.author.count(search
            ? { where: { name: { contains: search, mode: 'insensitive' } } }
            : undefined);
        const totalPages = Math.ceil(total / limit);
        const authors = await this.prisma.author.findMany({
            where: search
                ? { name: { contains: search, mode: 'insensitive' } }
                : undefined,
            skip: (page - 1) * limit,
            take: limit,
            orderBy: {
                createdAt: 'desc',
            },
            select: {
                id: true,
                name: true,
                _count: {
                    select: {
                        books: true,
                    },
                },
            },
        });
        return {
            data: authors.map(({ id, name, _count: { books } }) => ({
                id,
                name,
                booksCount: books,
            })),
            pagination: { page, limit, total, totalPages },
        };
    }
    async findOne(id) {
        const author = await this.prisma.author.findUnique({ where: { id } });
        if (!author)
            throw new common_1.NotFoundException('Author not found!');
        return author;
    }
    async update(id, updateAuthorDto) {
        const author = await this.prisma.author.findUnique({ where: { id } });
        if (!author)
            throw new common_1.NotFoundException('Author not found!');
        const updatedAuthor = await this.prisma.author.update({
            where: { id },
            data: updateAuthorDto,
        });
        return updatedAuthor;
    }
    async delete(id) {
        const author = await this.prisma.author.findUnique({ where: { id } });
        if (!author)
            throw new common_1.NotFoundException('Author not found!');
        await this.prisma.author.delete({ where: { id } });
        return author;
    }
    async findAuthorBooks(id, { page, limit }) {
        const total = await this.prisma.book.count({ where: { authorId: id } });
        const totalPages = Math.ceil(total / limit);
        const books = await this.prisma.book.findMany({
            where: { authorId: id },
            skip: (page - 1) * limit,
            take: limit,
            include: { author: true, ganer: true },
        });
        return { data: books, pagination: { page, limit, total, totalPages } };
    }
};
exports.AuthorsService = AuthorsService;
exports.AuthorsService = AuthorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthorsService);
//# sourceMappingURL=authors.service.js.map