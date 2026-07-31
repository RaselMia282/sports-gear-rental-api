import { Icreatecategory } from "./categories.interface";
declare const createCategoryIntoDB: (payload: Icreatecategory) => Promise<{
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const getAllCategoryIntoDB: () => Promise<{
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}[]>;
declare const getSingleCategoryIntoDB: (id: string) => Promise<{
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const updateCategoryIntoDB: (id: any, payload: any) => Promise<{
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const categoryService: {
    createCategoryIntoDB: typeof createCategoryIntoDB;
    getAllCategoryIntoDB: typeof getAllCategoryIntoDB;
    getSingleCategoryIntoDB: typeof getSingleCategoryIntoDB;
    updateCategoryIntoDB: typeof updateCategoryIntoDB;
};
export {};
//# sourceMappingURL=categories.service.d.ts.map