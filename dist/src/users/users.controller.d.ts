import { UsersService } from './users.service';
import { UserPayloadDto } from 'src/auth/dto/payload.dto';
import { CreateSetDto } from './dto/createSet.dto';
import { AddSetDto } from './dto/addSet.dto';
import { RemoveFromSetDto } from './dto/removeSet.dto';
import { ProfileEditDto } from './dto/profileEdit.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(page?: number, limit?: number): Promise<{
        data: {
            username: string;
            role: import("../../generated/prisma/enums").Role;
            id: string;
            avatar: string | null;
            createdAt: Date;
            updatedAt: Date;
        }[];
        pagination: {
            total: number;
            totalPages: number;
            page: number;
            limit: number;
        };
    }>;
    findAllWishlists(id: string, page?: number, limit?: number): Promise<{
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
    findAllToFollow(req: {
        user: UserPayloadDto;
    }, page?: number, limit?: number): Promise<{
        data: {
            id: string;
            username: string;
            avatar: string;
            wishlistCount: number;
            following: boolean;
        }[];
        pagination: {
            total: number;
            totalPages: number;
            page: number;
            limit: number;
        };
    }>;
    getAllFriends(req: {
        user: UserPayloadDto;
    }, page: number, limit: number, search: string): Promise<{
        data: {
            id: string;
            username: string;
            avatar: string;
            wishlistCount: number;
            following: boolean;
        }[];
        pagination: {
            total: number;
            totalPages: number;
            page: number;
            limit: number;
        };
    }>;
    followUser(id: string, req: {
        user: UserPayloadDto;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        friendId: string;
    }>;
    unFollowUser(id: string, req: {
        user: UserPayloadDto;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        friendId: string;
    }>;
    getAllSets(req: {
        user: UserPayloadDto;
    }, page?: number, limit?: number): Promise<{
        data: {
            id: string;
            title: string;
            booksCount: number;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    createSet(req: {
        user: UserPayloadDto;
    }, setDto: CreateSetDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        title: string;
    }>;
    getSet(id: string, page?: number, limit?: number): Promise<{
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
    addBookToSet(req: {
        user: UserPayloadDto;
    }, addSetDto: AddSetDto): Promise<{
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
    removeBookFromSet(req: {
        user: UserPayloadDto;
    }, removeSetDto: RemoveFromSetDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        title: string;
    }>;
    editProfile(req: {
        user: UserPayloadDto;
    }, profileEditDto: ProfileEditDto): Promise<{
        username: string;
        password: string;
        role: import("../../generated/prisma/enums").Role;
        id: string;
        avatar: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
