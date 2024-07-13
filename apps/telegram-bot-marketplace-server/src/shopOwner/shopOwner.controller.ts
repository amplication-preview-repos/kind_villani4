import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShopOwnerService } from "./shopOwner.service";
import { ShopOwnerControllerBase } from "./base/shopOwner.controller.base";

@swagger.ApiTags("shopOwners")
@common.Controller("shopOwners")
export class ShopOwnerController extends ShopOwnerControllerBase {
  constructor(protected readonly service: ShopOwnerService) {
    super(service);
  }
}
