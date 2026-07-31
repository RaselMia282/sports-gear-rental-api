import { NextFunction, Request, Response } from "express";
import { Role } from "../../generated/prisma/enums";
declare global {
    namespace Express {
        interface Request {
            user?: {
                email: string;
                id: string;
                role: Role;
            };
        }
    }
}
export declare const auth: (...requiredRoles: Role[]) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=middleware.d.ts.map