import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { PaginationDto } from 'src/dto/pagination.dto';
export declare class AuthorsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAuthorDto: CreateAuthorDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    findAll({ page, limit }: PaginationDto, defaultId?: string): Promise<{
        data: any[];
        pagination: {
            total: number;
            totalPages: number;
            page: number;
            limit: number;
        };
    }>;
    findAllAuthors({ page, limit }: PaginationDto, search?: string): Promise<{
        data: {
            id: string;
            name: string;
            booksCount: number;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    findAuthorBooks(id: string, { page, limit }: PaginationDto): Promise<{
        data: ({
            ganer: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                slug: string;
            };
            author: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            image: string;
            description: string;
            rating: number;
            price: import("@prisma/client/runtime/library").Decimal;
            discount: number | null;
            ganerId: string;
            authorId: string;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
}
