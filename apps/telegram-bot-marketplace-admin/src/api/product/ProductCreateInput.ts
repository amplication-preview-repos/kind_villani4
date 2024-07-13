import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type ProductCreateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  shop?: ShopWhereUniqueInput | null;
};
