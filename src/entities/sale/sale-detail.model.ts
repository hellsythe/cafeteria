import { Product } from '../product/product.model';

export class SaleDetail {
  date: Date;
  price: number;
  total: number;
  product: Product;
  quantity: number;
  comment: string;
}
