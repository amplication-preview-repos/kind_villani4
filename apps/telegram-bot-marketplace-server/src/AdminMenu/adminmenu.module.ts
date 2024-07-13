import { Module } from "@nestjs/common";
import { AdminMenuService } from "./adminmenu.service";
import { AdminMenuController } from "./adminmenu.controller";
import { AdminMenuResolver } from "./adminmenu.resolver";

@Module({
  controllers: [AdminMenuController],
  providers: [AdminMenuService, AdminMenuResolver],
  exports: [AdminMenuService],
})
export class AdminMenuModule {}
