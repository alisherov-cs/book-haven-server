import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LoginDto } from './dto/login.dto';
import { UserPayloadDto } from './dto/payload.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: LoginDto) {
    return await this.authService.login(user);
  }

  @Post('signup')
  signup(@Body() userDto: SignUpDto) {
    return this.authService.signup(userDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Request() req: { user: UserPayloadDto }) {
    return await this.authService.profile(req.user);
  }
}
