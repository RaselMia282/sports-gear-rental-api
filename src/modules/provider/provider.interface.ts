import { RentalStatus } from "../../../prisma/generated/prisma/enums";

export interface ICreateGearPayload {
  title: string;
  description: string;
  brand: string;
  stockQuantity: number;
  pricePerDay: number;
  availableQuantity: number;
  categoryId: string;
}


export interface TUpdateRentalStatus {
  status: RentalStatus;
}