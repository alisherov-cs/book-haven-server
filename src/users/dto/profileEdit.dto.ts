import { IsOptional, IsString } from 'class-validator';

export class ProfileEditDto {
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  avatar?: string;
}
