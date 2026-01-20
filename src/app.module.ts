import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './services/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { GanersModule } from './ganers/ganers.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { FilesModule } from './files/files.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GanersModule,
    AuthorsModule,
    BooksModule,
    FilesModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
