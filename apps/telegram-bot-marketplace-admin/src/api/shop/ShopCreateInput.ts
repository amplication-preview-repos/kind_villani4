import { ProductCreateNestedManyWithoutShopsInput } from "./ProductCreateNestedManyWithoutShopsInput";

export type ShopCreateInput = {
  name?: string | null;
  description?: string | null;
  products?: ProductCreateNestedManyWithoutShopsInput;
};
