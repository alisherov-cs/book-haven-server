import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { SignUpDto } from './dto/signup.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { UserPayloadDto } from './dto/payload.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser({ username, password }: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password: _, ...rest } = user;
      return rest;
    }

    return null;
  }

  async login({ username, password }: LoginDto) {
    const user = await this.validateUser({ username, password });
    if (!user) return null;

    const payload = { username: user.username, sub: user.id, role: user.role };

    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET_KEY,
      }),
    };
  }

  async signup(data: SignUpDto) {
    const exist = await this.prisma.user.findUnique({
      where: { username: data.username },
    });

    if (exist) return null;

    const hashedPassword = await bcrypt.hash(data.password, 12);

    const newUser = await this.prisma.user.create({
      data: { ...data, password: hashedPassword },
    });

    const payload = {
      username: newUser.username,
      sub: newUser.id,
      role: newUser.role,
    };

    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET_KEY,
      }),
    };
  }

  async profile({ userId }: UserPayloadDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        avatar: true,
        _count: {
          select: {
            wishlist: true,
            sets: true,
            friends: true,
          },
        },
      },
    });
    if (!user) return null;

    const {
      id,
      username,
      avatar,
      _count: { wishlist, sets, friends },
    } = user;
    return {
      id,
      username,
      avatar,
      booksCount: wishlist,
      setsCount: sets,
      friendsCount: friends,
    };
  }
}
