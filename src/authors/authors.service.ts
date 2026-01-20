import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { PaginationDto } from 'src/dto/pagination.dto';
import { unref } from 'process';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}

  async create(createAuthorDto: CreateAuthorDto) {
    const author = await this.prisma.author.create({ data: createAuthorDto });
    return author;
  }

  async findAll({ page, limit }: PaginationDto, defaultId?: string) {
    const whereWithoutDefault = defaultId ? { id: { not: defaultId } } : {};

    const total = await this.prisma.author.count();
    const totalPages = Math.ceil(total / limit);

    let defaultAuthor = null;

    if (defaultId) {
      defaultAuthor = await this.prisma.author.findUnique({
        where: { id: defaultId },
      });
    }

    const authors = await this.prisma.author.findMany({
      where: whereWithoutDefault,
      skip: (page - 1) * (limit - (defaultAuthor ? 1 : 0)),
      take: defaultAuthor ? limit - 1 : limit,
      orderBy: {
        createdAt: 'desc',
      },
      include: { books: true },
    });

    const data = defaultAuthor ? [defaultAuthor, ...authors] : authors;

    return {
      data,
      pagination: { total, totalPages, page, limit },
    };
  }

  async findAllAuthors({ page, limit }: PaginationDto, search?: string) {
    const total = await this.prisma.author.count(
      search
        ? { where: { name: { contains: search, mode: 'insensitive' } } }
        : undefined,
    );
    const totalPages = Math.ceil(total / limit);
    const authors = await this.prisma.author.findMany({
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
      data: authors.map(({ id, name, _count: { books } }) => ({
        id,
        name,
        booksCount: books,
      })),
      pagination: { page, limit, total, totalPages },
    };
  }

  async findOne(id: string) {
    const author = await this.prisma.author.findUnique({ where: { id } });

    if (!author) throw new NotFoundException('Author not found!');

    return author;
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    const author = await this.prisma.author.findUnique({ where: { id } });

    if (!author) throw new NotFoundException('Author not found!');

    const updatedAuthor = await this.prisma.author.update({
      where: { id },
      data: updateAuthorDto,
    });
    return updatedAuthor;
  }

  async delete(id: string) {
    const author = await this.prisma.author.findUnique({ where: { id } });

    if (!author) throw new NotFoundException('Author not found!');

    await this.prisma.author.delete({ where: { id } });

    return author;
  }

  async findAuthorBooks(id: string, { page, limit }: PaginationDto) {
    const total = await this.prisma.book.count({ where: { authorId: id } });
    const totalPages = Math.ceil(total / limit);
    const books = await this.prisma.book.findMany({
      where: { authorId: id },
      skip: (page - 1) * limit,
      take: limit,
      include: { author: true, ganer: true },
    });

    return { data: books, pagination: { page, limit, total, totalPages } };
  }
}
