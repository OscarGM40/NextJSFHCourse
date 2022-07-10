import { SeedProduct } from '../database/products';

export interface IProduct extends SeedProduct {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
