import { IsArray, IsString } from 'class-validator';

export class AddSetDto {
  @IsString()
  bookId: string;

  @IsArray()
  setsIds: string[];
}
