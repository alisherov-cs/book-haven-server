import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { UserPayloadDto } from 'src/auth/dto/payload.dto';
import { AddReviewDto } from './dto/review.dto';
import { RemoveAllFromWishlistDto } from './dto/wishlist.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<{
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
    }>;
    findAll(page?: number, limit?: number, search?: string, authors?: string[], ganers?: string[], ratings?: string[], priceFrom?: number, priceTo?: number): Promise<{
        data: {
            sets: string[];
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
        }[];
        pagination: {
            total: number;
            totalPages: number;
            page: number;
            limit: number;
        };
    }>;
    getAllWishlists(page: number, limit: number, req: {
        user: UserPayloadDto;
    }): Promise<{
        data: ({
            book: {
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
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            bookId: string;
        })[];
        pagination: {
            total: number;
            totalPages: number;
            page: number;
            limit: number;
        };
    }>;
    removeAllFromWishlist(req: {
        user: UserPayloadDto;
    }, removeDto: RemoveAllFromWishlistDto): Promise<import("../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    getAllCarts(page: number, limit: number, req: {
        user: UserPayloadDto;
    }): Promise<{
        data: ({
            book: {
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
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            bookId: string;
            qnt: number;
        })[];
        pagination: {
            total: number;
            totalPages: number;
            page: number;
            limit: number;
        };
    }>;
    removeAllFromCart(req: {
        user: UserPayloadDto;
    }, removeDto: RemoveAllFromWishlistDto): Promise<import("../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    findOne(id: string): Promise<{
        sets: string[];
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
    }>;
    getReviews(id: string, page?: number, limit?: number): Promise<{
        data: ({
            author: {
                username: string;
                role: import("../../generated/prisma/enums").Role;
                id: string;
                avatar: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            rating: number;
            authorId: string;
            title: string;
            bookId: string;
        })[];
        pagination: {
            total: number;
            totalPages: number;
            page: number;
            limit: number;
        };
    }>;
    addReview(req: {
        user: UserPayloadDto;
    }, id: string, addReviewDto: AddReviewDto): Promise<{
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
    }>;
    getCart(id: string, req: {
        user: UserPayloadDto;
    }): Promise<{
        user: {
            username: string;
            password: string;
            role: import("../../generated/prisma/enums").Role;
            id: string;
            avatar: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
        book: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        bookId: string;
        qnt: number;
    }>;
    addToCart(id: string, req: {
        user: UserPayloadDto;
    }): Promise<{
        username: string;
        password: string;
        role: import("../../generated/prisma/enums").Role;
        id: string;
        avatar: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeFromCart(id: string, req: {
        user: UserPayloadDto;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        bookId: string;
        qnt: number;
    }>;
    incrementCart(id: string, req: {
        user: UserPayloadDto;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        bookId: string;
        qnt: number;
    }>;
    decrementCart(id: string, req: {
        user: UserPayloadDto;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        bookId: string;
        qnt: number;
    }>;
    getWishlist(id: string, req: {
        user: UserPayloadDto;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        bookId: string;
    }>;
    addToWishlist(id: string, req: {
        user: UserPayloadDto;
    }): Promise<{
        username: string;
        password: string;
        role: import("../../generated/prisma/enums").Role;
        id: string;
        avatar: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeFromWishlist(id: string, req: {
        user: UserPayloadDto;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        bookId: string;
    }>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<{
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
    }>;
    delete(id: string): Promise<{
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
    }>;
}
