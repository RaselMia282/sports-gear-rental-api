import { ICreateGearPayload, TUpdateRentalStatus } from "./provider.interface.js";
declare const providerGearIntoDB: (payload: ICreateGearPayload, providerId: string) => Promise<{
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
}>;
declare const getProviderOrdersIntoDB: (providerId: string) => Promise<({
    customer: {
        email: string;
        id: string;
        name: string;
        phone: string;
    };
    items: ({
        gears: {
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
        };
    } & {
        id: string;
        quantity: number;
        priceAtRental: number;
        orderId: string;
        gearItemsId: string;
        createdAt: Date;
        updatedAt: Date;
    })[];
    payment: {
        id: string;
        amount: number;
        status: import("../../generated/prisma/enums.js").PaymentStatus;
        paymentMethod: import("../../generated/prisma/enums.js").PaymentMethod | null;
        transactionId: string;
        paymentData: import("@prisma/client/runtime/client").JsonValue | null;
        orderId: string;
        customerId: string;
        createdAt: Date;
        updatedAt: Date;
    } | null;
} & {
    id: string;
    totalPrice: number;
    status: import("../../generated/prisma/enums.js").RentalStatus;
    startDate: Date;
    endDate: Date;
    customerId: string;
    createdAt: Date;
    updatedAt: Date;
})[]>;
declare const updateGearIntoDB: (gearId: string, providerId: string, payload: Partial<ICreateGearPayload>) => Promise<{
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
}>;
export declare const updateOrderStatusIntoDB: (orderId: string, providerId: string, payload: TUpdateRentalStatus) => Promise<{
    id: string;
    totalPrice: number;
    status: import("../../generated/prisma/enums.js").RentalStatus;
    startDate: Date;
    endDate: Date;
    customerId: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const deleteProviderGearIntoDB: (gearId: string, providerId: string) => Promise<{
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
export declare const providerService: {
    providerGearIntoDB: typeof providerGearIntoDB;
    getProviderOrdersIntoDB: typeof getProviderOrdersIntoDB;
    updateGearIntoDB: typeof updateGearIntoDB;
    updateOrderStatusIntoDB: typeof updateOrderStatusIntoDB;
    deleteProviderGearIntoDB: typeof deleteProviderGearIntoDB;
};
export {};
//# sourceMappingURL=provider.service.d.ts.map