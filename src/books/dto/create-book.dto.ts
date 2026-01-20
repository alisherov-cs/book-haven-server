import { IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsNumber()
  price: number;

  @IsNumber()
  discount?: number;

  @IsString()
  ganerId: string;

  @IsString()
  authorId: string;
}
