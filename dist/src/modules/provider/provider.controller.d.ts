import { NextFunction, Request, Response } from "express";
export declare const providerController: {
    providerGear: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getProviderOrders: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateGear: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateOrderStatus: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteProviderGear: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=provider.controller.d.ts.map