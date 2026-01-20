import { PartialType } from '@nestjs/mapped-types';
import { CreateGanerDto } from './create.dto';

export class UpdateGanerDto extends PartialType(CreateGanerDto) {}
