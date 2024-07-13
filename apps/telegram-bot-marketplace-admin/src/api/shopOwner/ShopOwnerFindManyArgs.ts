import { ShopOwnerWhereInput } from "./ShopOwnerWhereInput";
import { ShopOwnerOrderByInput } from "./ShopOwnerOrderByInput";

export type ShopOwnerFindManyArgs = {
  where?: ShopOwnerWhereInput;
  orderBy?: Array<ShopOwnerOrderByInput>;
  skip?: number;
  take?: number;
};
