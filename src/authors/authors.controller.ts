import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles, RolesGuard } from 'src/auth/guards/role.guard';
import { Role } from 'src/auth/dto/user.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin)
  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto) {
    return await this.authorsService.create(createAuthorDto);
  }

  @Get()
  async findAll(@Query('page') page = 1, @Query('limit') limit = 10) {
    return await this.authorsService.findAll({ page: +page, limit: +limit });
  }

  @Get('all')
  async findAllAuthors(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('search') search: string,
  ) {
    return await this.authorsService.findAllAuthors(
      {
        page: +page,
        limit: +limit,
      },
      search,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.authorsService.findOne(id);
  }

  @Get(':id/books')
  async findAuthorBooks(
    @Param('id') id: string,
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ) {
    return await this.authorsService.findAuthorBooks(id, {
      page: +page,
      limit: +limit,
    });
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ) {
    return await this.authorsService.update(id, updateAuthorDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.authorsService.delete(id);
  }
}
