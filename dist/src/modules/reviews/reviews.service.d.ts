declare const createReviewIntoDB: (userId: string, payload: any) => Promise<{
    gearItem: {
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
    user: {
        id: string;
        name: string;
    };
} & {
    id: string;
    rating: number;
    comment: string | null;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    gearId: string;
    rentalId: string;
}>;
export declare const reviewService: {
    createReviewIntoDB: typeof createReviewIntoDB;
};
export {};
//# sourceMappingURL=reviews.service.d.ts.map