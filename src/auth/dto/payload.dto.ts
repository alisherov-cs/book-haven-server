import { Role } from './user.dto';

export class PayloadDto {
  sub: string;
  username: string;
  role: Role;
}

export class UserPayloadDto {
  userId: string;
  username: string;
}
