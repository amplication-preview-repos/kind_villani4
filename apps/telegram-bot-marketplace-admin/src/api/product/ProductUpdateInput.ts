import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type ProductUpdateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  shop?: ShopWhereUniqueInput | null;
};
