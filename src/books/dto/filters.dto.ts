import { IsArray, IsNumber, IsOptional } from 'class-validator';

export class FiltersDto {
  @IsOptional()
  @IsArray()
  authors?: string[];

  @IsOptional()
  @IsArray()
  ganers?: string[];

  @IsOptional()
  @IsArray()
  ratings?: string[];

  @IsOptional()
  @IsNumber()
  priceFrom?: number;

  @IsOptional()
  @IsNumber()
  priceTo?: number;
}
