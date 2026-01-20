export declare enum Role {
    admin = "admin",
    user = "user"
}
export declare class UserDto {
    id: string;
    username: string;
    password: string;
    role: Role;
    avatar?: string;
}
