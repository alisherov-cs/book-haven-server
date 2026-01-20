import { IsString } from 'class-validator';

export class CreateSetDto {
  @IsString()
  title: string;
}
