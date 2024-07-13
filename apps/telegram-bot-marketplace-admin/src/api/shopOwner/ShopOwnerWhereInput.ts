import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ShopOwnerWhereInput = {
  id?: StringFilter;
  username?: StringNullableFilter;
  email?: StringNullableFilter;
};
