import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
export declare class AuthorsController {
    private readonly authorsService;
    constructor(authorsService: AuthorsService);
    create(createAuthorDto: CreateAuthorDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
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
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    findAuthorBooks(id: string, page?: number, limit?: number): Promise<{
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
}
