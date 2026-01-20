import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { PaginationDto } from 'src/dto/pagination.dto';
import { AddReviewDto } from './dto/review.dto';
import { UserPayloadDto } from 'src/auth/dto/payload.dto';
import { RemoveAllFromWishlistDto } from './dto/wishlist.dto';
import { FiltersDto } from './dto/filters.dto';
export declare class BooksService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findAll({ page, limit }: PaginationDto, { authors, ganers, ratings, priceFrom, priceTo }: FiltersDto, search?: string): Promise<{
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
    addReview(id: string, reviewDto: AddReviewDto, user: UserPayloadDto): Promise<{
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
    getReviews(id: string, { page, limit }: PaginationDto): Promise<{
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
    addToCart(id: string, user: UserPayloadDto): Promise<{
        username: string;
        password: string;
        role: import("../../generated/prisma/enums").Role;
        id: string;
        avatar: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getCart(id: string, user: UserPayloadDto): Promise<{
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
    removeFromCart(id: string, user: UserPayloadDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        bookId: string;
        qnt: number;
    }>;
    incrementCart(id: string, user: UserPayloadDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        bookId: string;
        qnt: number;
    }>;
    decrementCart(id: string, user: UserPayloadDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        bookId: string;
        qnt: number;
    }>;
    addToWishlist(id: string, user: UserPayloadDto): Promise<{
        username: string;
        password: string;
        role: import("../../generated/prisma/enums").Role;
        id: string;
        avatar: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeFromWishlist(id: string, user: UserPayloadDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        bookId: string;
    }>;
    getWishlist(id: string, user: UserPayloadDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        bookId: string;
    }>;
    getAllWishlists(user: UserPayloadDto, { page, limit }: PaginationDto): Promise<{
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
    removeAllFromWishlist(user: UserPayloadDto, { ids }: RemoveAllFromWishlistDto): Promise<import("../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    getAllCarts(user: UserPayloadDto, { page, limit }: PaginationDto): Promise<{
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
    removeAllFromCart(user: UserPayloadDto, { ids }: RemoveAllFromWishlistDto): Promise<import("../../generated/prisma/internal/prismaNamespace").BatchPayload>;
}
