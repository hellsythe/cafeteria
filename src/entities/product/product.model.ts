export class Product {
  type: string;
  barcode: string;
  image: string;
  description: string;
  sku: string;
  category: string;
  name: string;
  price: number;
  cost: number;
  ingredients: Array<string>;
  tags: Array<string>;
  extra: Array<Product>;
}
