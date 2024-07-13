import { ProductUpdateManyWithoutShopsInput } from "./ProductUpdateManyWithoutShopsInput";

export type ShopUpdateInput = {
  name?: string | null;
  description?: string | null;
  products?: ProductUpdateManyWithoutShopsInput;
};
