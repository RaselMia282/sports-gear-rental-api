import { NextFunction, Request, Response } from "express";
export declare const paymentsController: {
    createPayment: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    handleWebhook: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    confirmPayment: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    paymentHistory: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    singlePaymentDetails: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=payments.controller.d.ts.map