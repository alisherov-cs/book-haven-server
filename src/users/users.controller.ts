import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserPayloadDto } from 'src/auth/dto/payload.dto';
import { CreateSetDto } from './dto/createSet.dto';
import { AddSetDto } from './dto/addSet.dto';
import { RemoveFromSetDto } from './dto/removeSet.dto';
import { ProfileEditDto } from './dto/profileEdit.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    return await this.usersService.findAll({ page: +page, limit: +limit });
  }

  @Get(':id/wishlist')
  async findAllWishlists(
    @Param('id') id: string,
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    return await this.usersService.findAllWishlists(id, {
      page: +page,
      limit: +limit,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('allToFollow')
  async findAllToFollow(
    @Request() req: { user: UserPayloadDto },
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    return await this.usersService.findAllToFollow(req.user, {
      page: +page,
      limit: +limit,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('friends')
  async getAllFriends(
    @Request() req: { user: UserPayloadDto },
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
    @Query('search') search: string,
  ) {
    return await this.usersService.getAllFriends(
      req.user,
      {
        page: +page,
        limit: +limit,
      },
      search,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/follow')
  async followUser(
    @Param('id') id: string,
    @Request() req: { user: UserPayloadDto },
  ) {
    return await this.usersService.followUser(req.user, id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/unfollow')
  async unFollowUser(
    @Param('id') id: string,
    @Request() req: { user: UserPayloadDto },
  ) {
    return await this.usersService.unFollowUser(req.user, id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('sets')
  async getAllSets(
    @Request() req: { user: UserPayloadDto },
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    return await this.usersService.getAllSets(req.user, {
      page: +page,
      limit: +limit,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post('sets')
  async createSet(
    @Request() req: { user: UserPayloadDto },
    @Body() setDto: CreateSetDto,
  ) {
    return await this.usersService.createSet(req.user, setDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('sets/:id')
  async getSet(
    @Param('id') id: string,
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    return await this.usersService.getSet(id, {
      page: +page,
      limit: +limit,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post('sets/add')
  async addBookToSet(
    @Request() req: { user: UserPayloadDto },
    @Body() addSetDto: AddSetDto,
  ) {
    return await this.usersService.addSet(req.user, addSetDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('sets/remove')
  async removeBookFromSet(
    @Request() req: { user: UserPayloadDto },
    @Body() removeSetDto: RemoveFromSetDto,
  ) {
    return await this.usersService.removeSet(req.user, removeSetDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('profile/update')
  async editProfile(
    @Request() req: { user: UserPayloadDto },
    @Body() profileEditDto: ProfileEditDto,
  ) {
    return await this.usersService.editProfile(req.user, profileEditDto);
  }
}
