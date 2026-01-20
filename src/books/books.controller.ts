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
  Request,
  ParseIntPipe,
  ParseArrayPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles, RolesGuard } from 'src/auth/guards/role.guard';
import { Role } from 'src/auth/dto/user.dto';
import { UserPayloadDto } from 'src/auth/dto/payload.dto';
import { AddReviewDto } from './dto/review.dto';
import { RemoveAllFromWishlistDto } from './dto/wishlist.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin)
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('search') search?: string,
    @Query(
      'authors',
      new DefaultValuePipe([]),
      new ParseArrayPipe({ items: String, separator: ',' }),
    )
    authors?: string[],
    @Query(
      'ganers',
      new DefaultValuePipe([]),
      new ParseArrayPipe({ items: String, separator: ',' }),
    )
    ganers?: string[],
    @Query(
      'ratings',
      new DefaultValuePipe([]),
      new ParseArrayPipe({ items: String, separator: ',' }),
    )
    ratings?: string[],
    @Query('priceFrom', new DefaultValuePipe(0), new ParseIntPipe())
    priceFrom = 0,
    @Query('priceTo', new DefaultValuePipe(1000), new ParseIntPipe())
    priceTo = 1000,
  ) {
    return this.booksService.findAll(
      { page: +page, limit: +limit },
      {
        authors,
        ganers,
        ratings,
        priceFrom,
        priceTo,
      },
      search,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('wishlist')
  async getAllWishlists(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Request() req: { user: UserPayloadDto },
  ) {
    return await this.booksService.getAllWishlists(req.user, {
      page: +page,
      limit: +limit,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete('wishlist/remove')
  async removeAllFromWishlist(
    @Request() req: { user: UserPayloadDto },
    @Body() removeDto: RemoveAllFromWishlistDto,
  ) {
    return await this.booksService.removeAllFromWishlist(req.user, removeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('cart')
  async getAllCarts(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Request() req: { user: UserPayloadDto },
  ) {
    return await this.booksService.getAllCarts(req.user, {
      page: +page,
      limit: +limit,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete('cart/remove')
  async removeAllFromCart(
    @Request() req: { user: UserPayloadDto },
    @Body() removeDto: RemoveAllFromWishlistDto,
  ) {
    return await this.booksService.removeAllFromCart(req.user, removeDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Get(':id/review')
  getReviews(
    @Param('id') id: string,
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ) {
    return this.booksService.getReviews(id, { page: +page, limit: +limit });
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/review')
  addReview(
    @Request() req: { user: UserPayloadDto },
    @Param('id') id: string,
    @Body() addReviewDto: AddReviewDto,
  ) {
    return this.booksService.addReview(id, addReviewDto, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/cart')
  async getCart(
    @Param('id') id: string,
    @Request() req: { user: UserPayloadDto },
  ) {
    return await this.booksService.getCart(id, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/cart')
  async addToCart(
    @Param('id') id: string,
    @Request() req: { user: UserPayloadDto },
  ) {
    return await this.booksService.addToCart(id, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/cart')
  async removeFromCart(
    @Param('id') id: string,
    @Request() req: { user: UserPayloadDto },
  ) {
    return await this.booksService.removeFromCart(id, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/cart/increment')
  async incrementCart(
    @Param('id') id: string,
    @Request() req: { user: UserPayloadDto },
  ) {
    return await this.booksService.incrementCart(id, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/cart/decrement')
  async decrementCart(
    @Param('id') id: string,
    @Request() req: { user: UserPayloadDto },
  ) {
    return await this.booksService.decrementCart(id, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/wishlist')
  async getWishlist(
    @Param('id') id: string,
    @Request() req: { user: UserPayloadDto },
  ) {
    return await this.booksService.getWishlist(id, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/wishlist')
  async addToWishlist(
    @Param('id') id: string,
    @Request() req: { user: UserPayloadDto },
  ) {
    return await this.booksService.addToWishlist(id, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/wishlist')
  async removeFromWishlist(
    @Param('id') id: string,
    @Request() req: { user: UserPayloadDto },
  ) {
    return await this.booksService.removeFromWishlist(id, req.user);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.booksService.delete(id);
  }
}
