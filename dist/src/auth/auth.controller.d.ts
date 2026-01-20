import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { UserPayloadDto } from './dto/payload.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: LoginDto): Promise<{
        access_token: string;
    }>;
    signup(userDto: SignUpDto): Promise<{
        access_token: string;
    }>;
    profile(req: {
        user: UserPayloadDto;
    }): Promise<{
        id: string;
        username: string;
        avatar: string;
        booksCount: number;
        setsCount: number;
        friendsCount: number;
    }>;
}
