import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateGanerDto } from './dto/create.dto';
import { PaginationDto } from 'src/dto/pagination.dto';
import { UpdateGanerDto } from './dto/update.dto';
export declare class GanersService {
    private prisma;
    constructor(prisma: PrismaService);
    create({ name }: CreateGanerDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
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
    findAllGaners({ page, limit }: PaginationDto, search?: string): Promise<{
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
        slug: string;
    }>;
    update(id: string, updateGanerDto: UpdateGanerDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
}
