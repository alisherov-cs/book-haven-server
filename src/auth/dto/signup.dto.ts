import { IsString } from 'class-validator';
import { Role } from './user.dto';

export class SignUpDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  role: Role;
}
