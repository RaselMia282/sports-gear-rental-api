import { Ilogin, Iregister } from "./auth.interface";
declare const registerUserIntoDB: (payload: Iregister) => Promise<{
    id: string;
    name: string;
    email: string;
    role: import("../../generated/prisma/enums").Role;
    status: import("../../generated/prisma/enums").Status;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const loginUserIntoDb: (payload: Ilogin) => Promise<{
    accessToken: string;
    refreshToken: string;
}>;
declare const getMyProfileIntoDB: (userId: string) => Promise<{
    id: string;
    name: string;
    email: string;
    role: import("../../generated/prisma/enums").Role;
    status: import("../../generated/prisma/enums").Status;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const authservice: {
    registerUserIntoDB: typeof registerUserIntoDB;
    loginUserIntoDb: typeof loginUserIntoDb;
    getMyProfileIntoDB: typeof getMyProfileIntoDB;
};
export {};
//# sourceMappingURL=auth.service.d.ts.map