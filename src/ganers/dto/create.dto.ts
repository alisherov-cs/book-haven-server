import { IsString } from 'class-validator';

export class CreateGanerDto {
  @IsString()
  name: string;
}
