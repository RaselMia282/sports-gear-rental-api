import { ICreateGear } from "./gear.interface";
declare const createGearIntoDb: (payload: ICreateGear, providerId: string) => Promise<{
    category: {
        id: string;
        name: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    };
    provider: {
        id: string;
        name: string;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        status: import("../../generated/prisma/enums").Status;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
    };
} & {
    id: string;
    title: string;
    description: string;
    brand: string;
    stockQuantity: number;
    pricePerDay: number;
    availableQuantity: number;
    createdAt: Date;
    updatedAt: Date;
    providerId: string;
    categoryId: string;
}>;
declare const getAllGearsIntoDB: (payload: any) => Promise<({
    category: {
        id: string;
        name: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    };
    provider: {
        id: string;
        name: string;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        status: import("../../generated/prisma/enums").Status;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
    };
} & {
    id: string;
    title: string;
    description: string;
    brand: string;
    stockQuantity: number;
    pricePerDay: number;
    availableQuantity: number;
    createdAt: Date;
    updatedAt: Date;
    providerId: string;
    categoryId: string;
})[]>;
declare const getSingleGearIntoDB: (id: any) => Promise<({
    category: {
        id: string;
        name: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    };
    provider: {
        id: string;
        name: string;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        status: import("../../generated/prisma/enums").Status;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
    };
} & {
    id: string;
    title: string;
    description: string;
    brand: string;
    stockQuantity: number;
    pricePerDay: number;
    availableQuantity: number;
    createdAt: Date;
    updatedAt: Date;
    providerId: string;
    categoryId: string;
}) | null>;
export declare const gearService: {
    createGearIntoDb: typeof createGearIntoDb;
    getAllGearsIntoDB: typeof getAllGearsIntoDB;
    getSingleGearIntoDB: typeof getSingleGearIntoDB;
};
export {};
//# sourceMappingURL=gear.service.d.ts.map