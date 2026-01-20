import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GanersService } from './ganers.service';
import { CreateGanerDto } from './dto/create.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles, RolesGuard } from 'src/auth/guards/role.guard';
import { Role } from 'src/auth/dto/user.dto';
import { UpdateGanerDto } from './dto/update.dto';

@Controller('ganers')
export class GanersController {
  constructor(private readonly ganersService: GanersService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin)
  @Post('')
  async create(@Body() createGanerDto: CreateGanerDto) {
    return await this.ganersService.create(createGanerDto);
  }

  @Get('all')
  async findAllGaners(@Query('page') page = 1, @Query('limit') limit = 10) {
    return await this.ganersService.findAllGaners({
      page: +page,
      limit: +limit,
    });
  }

  @Get('')
  async findAll(
    @Query('defaultId') defaultId?: string,
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ) {
    return await this.ganersService.findAll(
      { page: +page, limit: +limit },
      defaultId,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ganersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGanerDto: UpdateGanerDto,
  ) {
    return await this.ganersService.update(id, updateGanerDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.ganersService.delete(id);
  }
}
