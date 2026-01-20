export enum Role {
  admin = 'admin',
  user = 'user',
}

export class UserDto {
  id: string;
  username: string;
  password: string;
  role: Role;
  avatar?: string;
}
