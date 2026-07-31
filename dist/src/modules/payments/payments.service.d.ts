import { PaymentMethod, PaymentStatus, RentalStatus } from "../../generated/prisma/enums";
declare const createPaymentIntoDB: (userId: string, orderId: string) => Promise<{
    url: string | null;
}>;
declare const handleWebhookIntoDB: (payload: Buffer, signature: string) => Promise<void>;
declare const confirmPaymentIntoDB: (sessionId: string) => Promise<void>;
declare const paymentHistoryIntoDB: (customerId: string) => Promise<({
    order: {
        id: string;
        totalPrice: number;
        status: RentalStatus;
        startDate: Date;
        endDate: Date;
        customerId: string;
        createdAt: Date;
        updatedAt: Date;
    };
} & {
    id: string;
    amount: number;
    status: PaymentStatus;
    paymentMethod: PaymentMethod | null;
    transactionId: string;
    paymentData: import("@prisma/client/runtime/client").JsonValue | null;
    orderId: string;
    customerId: string;
    createdAt: Date;
    updatedAt: Date;
})[]>;
declare const singlePaymentDetailsIntoDB: (paymentId: string) => Promise<{
    customer: {
        id: string;
        name: string;
        email: string;
        password: string;
        role: import("../../generated/prisma/enums").Role;
        status: import("../../generated/prisma/enums").Status;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
    };
    order: {
        id: string;
        totalPrice: number;
        status: RentalStatus;
        startDate: Date;
        endDate: Date;
        customerId: string;
        createdAt: Date;
        updatedAt: Date;
    };
} & {
    id: string;
    amount: number;
    status: PaymentStatus;
    paymentMethod: PaymentMethod | null;
    transactionId: string;
    paymentData: import("@prisma/client/runtime/client").JsonValue | null;
    orderId: string;
    customerId: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const paymentService: {
    createPaymentIntoDB: typeof createPaymentIntoDB;
    handleWebhookIntoDB: typeof handleWebhookIntoDB;
    confirmPaymentIntoDB: typeof confirmPaymentIntoDB;
    paymentHistoryIntoDB: typeof paymentHistoryIntoDB;
    singlePaymentDetailsIntoDB: typeof singlePaymentDetailsIntoDB;
};
export {};
//# sourceMappingURL=payments.service.d.ts.map