import { Strategy } from 'passport-jwt';
import { PayloadDto } from '../dto/payload.dto';
import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(payload: PayloadDto): {
        userId: string;
        username: string;
        role: import("../dto/user.dto").Role;
    };
}
export {};
