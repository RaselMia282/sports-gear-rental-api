declare const getAllUsersIntoDB: () => Promise<{
    createdAt: Date;
    email: string;
    id: string;
    name: string;
    role: import("../../generated/prisma/enums").Role;
    status: import("../../generated/prisma/enums").Status;
}[]>;
declare const updateStatusIntoDB: (userId: string, status: string) => Promise<{
    email: string;
    id: string;
    name: string;
    role: import("../../generated/prisma/enums").Role;
    status: import("../../generated/prisma/enums").Status;
    updatedAt: Date;
}>;
declare const getAllGearIntoDB: () => Promise<({
    category: {
        id: string;
        name: string;
        description: string;
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
declare const getAllRentalOrdersIntoDB: () => Promise<({
    items: {
        id: string;
        quantity: number;
        priceAtRental: number;
        orderId: string;
        gearItemsId: string;
        createdAt: Date;
        updatedAt: Date;
    }[];
} & {
    id: string;
    totalPrice: number;
    status: import("../../generated/prisma/enums").RentalStatus;
    startDate: Date;
    endDate: Date;
    customerId: string;
    createdAt: Date;
    updatedAt: Date;
})[]>;
export declare const adminService: {
    getAllUsersIntoDB: typeof getAllUsersIntoDB;
    updateStatusIntoDB: typeof updateStatusIntoDB;
    getAllGearIntoDB: typeof getAllGearIntoDB;
    getAllRentalOrdersIntoDB: typeof getAllRentalOrdersIntoDB;
};
export {};
//# sourceMappingURL=admin.service.d.ts.map