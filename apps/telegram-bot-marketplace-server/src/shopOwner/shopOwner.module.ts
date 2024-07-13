import { Module } from "@nestjs/common";
import { ShopOwnerModuleBase } from "./base/shopOwner.module.base";
import { ShopOwnerService } from "./shopOwner.service";
import { ShopOwnerController } from "./shopOwner.controller";
import { ShopOwnerResolver } from "./shopOwner.resolver";

@Module({
  imports: [ShopOwnerModuleBase],
  controllers: [ShopOwnerController],
  providers: [ShopOwnerService, ShopOwnerResolver],
  exports: [ShopOwnerService],
})
export class ShopOwnerModule {}
