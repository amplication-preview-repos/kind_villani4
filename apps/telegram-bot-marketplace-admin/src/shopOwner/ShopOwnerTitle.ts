import { ShopOwner as TShopOwner } from "../api/shopOwner/ShopOwner";

export const SHOPOWNER_TITLE_FIELD = "username";

export const ShopOwnerTitle = (record: TShopOwner): string => {
  return record.username?.toString() || String(record.id);
};
