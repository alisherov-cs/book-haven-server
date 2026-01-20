import { IsArray, IsString } from 'class-validator';

export class RemoveFromSetDto {
  @IsArray()
  bookIds: string[];

  @IsString()
  setId: string;
}
