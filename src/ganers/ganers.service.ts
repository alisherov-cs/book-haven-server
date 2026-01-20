import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateGanerDto } from './dto/create.dto';
import slugify from 'slugify';
import { PaginationDto } from 'src/dto/pagination.dto';
import { UpdateGanerDto } from './dto/update.dto';

@Injectable()
export class GanersService {
  constructor(private prisma: PrismaService) {}

  async create({ name }: CreateGanerDto) {
    const exist = await this.prisma.ganer.findUnique({ where: { name } });

    if (exist) throw new BadRequestException('genre already exist!');

    const data = { name, slug: slugify(name) };
    const newGaner = await this.prisma.ganer.create({ data });
    return newGaner;
  }

  async findAll({ page, limit }: PaginationDto, defaultId?: string) {
    const whereWithoutDefault = defaultId ? { id: { not: defaultId } } : {};

    const total = await this.prisma.ganer.count();
    const totalPages = Math.ceil(total / limit);

    let defaultGaner = null;

    if (defaultId) {
      defaultGaner = await this.prisma.ganer.findUnique({
        where: { id: defaultId },
      });
    }

    const ganers = await this.prisma.ganer.findMany({
      where: whereWithoutDefault,
      skip: (page - 1) * (limit - (defaultGaner ? 1 : 0)),
      take: defaultGaner ? limit - 1 : limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const data = defaultGaner ? [defaultGaner, ...ganers] : ganers;

    return {
      data,
      pagination: { total, totalPages, page, limit },
    };
  }

  async findAllGaners({ page, limit }: PaginationDto, search?: string) {
    const total = await this.prisma.ganer.count(
      search
        ? { where: { name: { contains: search, mode: 'insensitive' } } }
        : undefined,
    );
    const totalPages = Math.ceil(total / limit);
    const ganers = await this.prisma.ganer.findMany({
      where: search
        ? { name: { contains: search, mode: 'insensitive' } }
        : undefined,

      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        name: true,
        _count: {
          select: {
            books: true,
          },
        },
      },
    });

    return {
      data: ganers.map(({ id, name, _count: { books } }) => ({
        id,
        name,
        booksCount: books,
      })),
      pagination: { page, limit, total, totalPages },
    };
  }

  async findOne(id: string) {
    const ganer = await this.prisma.ganer.findUnique({ where: { id } });

    if (!ganer) throw new NotFoundException('Ganer not found!');

    return ganer;
  }

  async update(id: string, updateGanerDto: UpdateGanerDto) {
    const ganer = await this.prisma.ganer.findUnique({ where: { id } });

    if (!ganer) throw new NotFoundException('Ganer not found!');

    const updatedGaner = await this.prisma.ganer.update({
      where: { id },
      data: { ...updateGanerDto, slug: slugify(updateGanerDto.name) },
    });
    return updatedGaner;
  }

  async delete(id: string) {
    const ganer = await this.prisma.ganer.findUnique({ where: { id } });

    if (!ganer) throw new NotFoundException('Ganer not found!');

    await this.prisma.ganer.delete({ where: { id } });

    return ganer;
  }
}
