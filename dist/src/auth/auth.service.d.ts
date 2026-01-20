import { PrismaService } from 'src/services/prisma/prisma.service';
import { SignUpDto } from './dto/signup.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { UserPayloadDto } from './dto/payload.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateUser({ username, password }: LoginDto): Promise<{
        username: string;
        role: import("../../generated/prisma/enums").Role;
        id: string;
        avatar: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login({ username, password }: LoginDto): Promise<{
        access_token: string;
    }>;
    signup(data: SignUpDto): Promise<{
        access_token: string;
    }>;
    profile({ userId }: UserPayloadDto): Promise<{
        id: string;
        username: string;
        avatar: string;
        booksCount: number;
        setsCount: number;
        friendsCount: number;
    }>;
}
