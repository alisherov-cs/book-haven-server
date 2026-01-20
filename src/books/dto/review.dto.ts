import { IsNumber, IsString } from 'class-validator';

export class AddReviewDto {
  @IsString()
  title: string;

  @IsNumber()
  rating: number;

  @IsString()
  description: string;
}
