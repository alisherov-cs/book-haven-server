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
exports.GanersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../services/prisma/prisma.service");
const slugify_1 = require("slugify");
let GanersService = class GanersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create({ name }) {
        const exist = await this.prisma.ganer.findUnique({ where: { name } });
        if (exist)
            throw new common_1.BadRequestException('genre already exist!');
        const data = { name, slug: (0, slugify_1.default)(name) };
        const newGaner = await this.prisma.ganer.create({ data });
        return newGaner;
    }
    async findAll({ page, limit }, defaultId) {
        const whereWithoutDefault = defaultId ? { id: { not: defaultId } } : {};
        const total = await this.prisma.ganer.count();
        const totalPages = Math.ceil(total / limit);
        let defaultGaner = null;
        if (defaultId) {
            defaultGaner = await this.prisma.ganer.findUnique({
                where: { id: defaultId },
            });
        }
        const ganers = await this.prisma.ganer.findMany({
            where: whereWithoutDefault,
            skip: (page - 1) * (limit - (defaultGaner ? 1 : 0)),
            take: defaultGaner ? limit - 1 : limit,
            orderBy: {
                createdAt: 'desc',
            },
        });
        const data = defaultGaner ? [defaultGaner, ...ganers] : ganers;
        return {
            data,
            pagination: { total, totalPages, page, limit },
        };
    }
    async findAllGaners({ page, limit }, search) {
        const total = await this.prisma.ganer.count(search
            ? { where: { name: { contains: search, mode: 'insensitive' } } }
            : undefined);
        const totalPages = Math.ceil(total / limit);
        const ganers = await this.prisma.ganer.findMany({
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
            data: ganers.map(({ id, name, _count: { books } }) => ({
                id,
                name,
                booksCount: books,
            })),
            pagination: { page, limit, total, totalPages },
        };
    }
    async findOne(id) {
        const ganer = await this.prisma.ganer.findUnique({ where: { id } });
        if (!ganer)
            throw new common_1.NotFoundException('Ganer not found!');
        return ganer;
    }
    async update(id, updateGanerDto) {
        const ganer = await this.prisma.ganer.findUnique({ where: { id } });
        if (!ganer)
            throw new common_1.NotFoundException('Ganer not found!');
        const updatedGaner = await this.prisma.ganer.update({
            where: { id },
            data: { ...updateGanerDto, slug: (0, slugify_1.default)(updateGanerDto.name) },
        });
        return updatedGaner;
    }
    async delete(id) {
        const ganer = await this.prisma.ganer.findUnique({ where: { id } });
        if (!ganer)
            throw new common_1.NotFoundException('Ganer not found!');
        await this.prisma.ganer.delete({ where: { id } });
        return ganer;
    }
};
exports.GanersService = GanersService;
exports.GanersService = GanersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GanersService);
//# sourceMappingURL=ganers.service.js.map