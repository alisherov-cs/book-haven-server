import { GanersService } from './ganers.service';
import { CreateGanerDto } from './dto/create.dto';
import { UpdateGanerDto } from './dto/update.dto';
export declare class GanersController {
    private readonly ganersService;
    constructor(ganersService: GanersService);
    create(createGanerDto: CreateGanerDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
    findAllGaners(page?: number, limit?: number): Promise<{
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
    findAll(defaultId?: string, page?: number, limit?: number): Promise<{
        data: any[];
        pagination: {
            total: number;
            totalPages: number;
            page: number;
            limit: number;
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
