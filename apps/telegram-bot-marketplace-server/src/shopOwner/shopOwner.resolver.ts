import * as graphql from "@nestjs/graphql";
import { ShopOwnerResolverBase } from "./base/shopOwner.resolver.base";
import { ShopOwner } from "./base/ShopOwner";
import { ShopOwnerService } from "./shopOwner.service";

@graphql.Resolver(() => ShopOwner)
export class ShopOwnerResolver extends ShopOwnerResolverBase {
  constructor(protected readonly service: ShopOwnerService) {
    super(service);
  }
}
