import { catchAsync } from "../../utils/catchAsync";
import { jwtUtilis } from "../../utils/jwt";
import config from "../../config";
import { prisma } from "../../lib/prisma";
export const auth = (...requiredRoles) => {
    return catchAsync(async (req, res, next) => {
        const token = req.cookies?.accessToken
            ? req.cookies.accessToken
            : req.headers.authorization?.startsWith("Bearer")
                ? req.headers.authorization.split(" ")[1]
                : req.headers.authorization;
        if (!token) {
            throw new Error("You are not logged in.Please log in to access this resource");
        }
        const verifiedToken = jwtUtilis.verifyToken(token, config.jwt_access_secret);
        console.log("verifiedToken", verifiedToken);
        if (!verifiedToken) {
            throw new Error("Invalid token");
        }
        const { id, email, role } = verifiedToken;
        console.log("Token payload role:", role);
        console.log("Required roles for this route:", requiredRoles);
        console.log("Is role matched?:", requiredRoles.includes(role));
        if (requiredRoles.length > 0 && !requiredRoles.includes(role)) {
            throw new Error("Forbidden.You don't have permissions to access this route");
        }
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            throw new Error("User not found");
        }
        if (user.status === "SUSPEND") {
            throw new Error("Your account has been suspend.Please contact support");
        }
        req.user = {
            id,
            email,
            role,
        };
        next();
    });
};
//# sourceMappingURL=middleware.js.map