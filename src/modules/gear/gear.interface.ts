export type ICreateGear = {
  title: string;
  description: string;
  brand: string;
  stockQuantity: number;
  pricePerDay: number;
  availableQuantity: number;
  
  categoryId: string;
};