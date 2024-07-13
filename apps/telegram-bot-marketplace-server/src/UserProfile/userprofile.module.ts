import { Module } from "@nestjs/common";
import { UserProfileService } from "./userprofile.service";
import { UserProfileController } from "./userprofile.controller";
import { UserProfileResolver } from "./userprofile.resolver";

@Module({
  controllers: [UserProfileController],
  providers: [UserProfileService, UserProfileResolver],
  exports: [UserProfileService],
})
export class UserProfileModule {}
