export declare const Role: {
    readonly CUSTOMER: 'CUSTOMER';
    readonly PROVIDER: 'PROVIDER';
    readonly ADMIN: 'ADMIN';
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const Status: {
    readonly ACTIVE: 'ACTIVE';
    readonly SUSPEND: 'SUSPEND';
};
export type Status = (typeof Status)[keyof typeof Status];
export declare const RentalStatus: {
    readonly PENDING: 'PENDING';
    readonly APPROVED: 'APPROVED';
    readonly CANCELLED: 'CANCELLED';
    readonly COMPLETED: 'COMPLETED';
    readonly RETURNED: 'RETURNED';
    readonly PICKED_UP: 'PICKED_UP';
};
export type RentalStatus = (typeof RentalStatus)[keyof typeof RentalStatus];
export declare const PaymentStatus: {
    readonly PENDING: 'PENDING';
    readonly PAID: 'PAID';
    readonly FAILED: 'FAILED';
    readonly REFUNDED: 'REFUNDED';
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const PaymentMethod: {
    readonly CREDIT_CARD: 'CREDIT_CARD';
    readonly SSLCOMMERZ: 'SSLCOMMERZ';
    readonly BKASH: 'BKASH';
    readonly NAGAD: 'NAGAD';
    readonly CASH_ON_DELIVERY: 'CASH_ON_DELIVERY';
    readonly STRIPE: 'STRIPE';
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
//# sourceMappingURL=enums.d.ts.map