import { UserPayloadDto } from 'src/auth/dto/payload.dto';
import { PaginationDto } from 'src/dto/pagination.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateSetDto } from './dto/createSet.dto';
import { AddSetDto } from './dto/addSet.dto';
import { RemoveFromSetDto } from './dto/removeSet.dto';
import { ProfileEditDto } from './dto/profileEdit.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll({ page, limit }: PaginationDto): Promise<{
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
    findAllToFollow(user: UserPayloadDto, { page, limit }: PaginationDto): Promise<{
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
    getAllFriends(user: UserPayloadDto, { page, limit }: PaginationDto, search?: string): Promise<{
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
    followUser(user: UserPayloadDto, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        friendId: string;
    }>;
    unFollowUser(user: UserPayloadDto, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        friendId: string;
    }>;
    findAllWishlists(id: string, { page, limit }: PaginationDto): Promise<{
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
    getAllSets(user: UserPayloadDto, { page, limit }: PaginationDto): Promise<{
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
    createSet(user: UserPayloadDto, { title }: CreateSetDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        title: string;
    }>;
    getSet(id: string, { page, limit }: PaginationDto): Promise<{
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
    addSet(_: UserPayloadDto, { bookId, setsIds }: AddSetDto): Promise<{
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
    removeSet(_: UserPayloadDto, { bookIds, setId }: RemoveFromSetDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        title: string;
    }>;
    editProfile(user: UserPayloadDto, editData: ProfileEditDto): Promise<{
        username: string;
        password: string;
        role: import("../../generated/prisma/enums").Role;
        id: string;
        avatar: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
