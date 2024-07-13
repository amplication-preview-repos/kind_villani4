import { Product } from "../product/Product";

export type Shop = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  products?: Array<Product>;
};
