import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
export declare class AuthorsController {
    private readonly authorsService;
    constructor(authorsService: AuthorsService);
    create(createAuthorDto: CreateAuthorDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(page?: number, limit?: number): Promise<{
        data: any[];
        pagination: {
            total: number;
            totalPages: number;
            page: number;
            limit: number;
        };
    }>;
    findAllAuthors(page: number, limit: number, search: string): Promise<{
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
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAuthorBooks(id: string, page?: number, limit?: number): Promise<{
        data: ({
            author: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
            };
            ganer: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
            };
        } & {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
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
    update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
