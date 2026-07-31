import { TRentalPayload } from "./rentalOrders.interface.js";
declare const createRentalOrderIntoDB: (payload: TRentalPayload, customerId: string) => Promise<({
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
} & {
    id: string;
    totalPrice: number;
    status: import("../../generated/prisma/enums.js").RentalStatus;
    startDate: Date;
    endDate: Date;
    customerId: string;
    createdAt: Date;
    updatedAt: Date;
}) | null>;
declare const userRentalIntoDb: (customerId: string) => Promise<({
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
declare const rentalOrderDetailsIntoDb: (orderId: string, userId: string, role: string) => Promise<{
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
}>;
export declare const rentalOrdersService: {
    createRentalOrderIntoDB: typeof createRentalOrderIntoDB;
    userRentalIntoDb: typeof userRentalIntoDb;
    rentalOrderDetailsIntoDb: typeof rentalOrderDetailsIntoDb;
};
export {};
//# sourceMappingURL=rentalOrders.service.d.ts.map