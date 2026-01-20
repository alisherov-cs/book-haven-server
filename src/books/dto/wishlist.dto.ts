import { IsArray } from 'class-validator';

export class RemoveAllFromWishlistDto {
  @IsArray()
  ids: string[];
}
