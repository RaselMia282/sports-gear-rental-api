import { JwtPayload } from "jsonwebtoken";
declare const createToken: (payload: JwtPayload, secret: string, expiresIn: string) => string;
declare const verifyToken: (token: string, secret: string) => JwtPayload;
export declare const jwtUtilis: {
    createToken: typeof createToken;
    verifyToken: typeof verifyToken;
};
export {};
//# sourceMappingURL=jwt.d.ts.map