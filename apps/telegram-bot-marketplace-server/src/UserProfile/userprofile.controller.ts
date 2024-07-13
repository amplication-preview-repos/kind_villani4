import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserProfileService } from "./userprofile.service";
import { ProfileDto } from "../userProfile/ProfileDto";

@swagger.ApiTags("userProfiles")
@common.Controller("userProfiles")
export class UserProfileController {
  constructor(protected readonly service: UserProfileService) {}

  @common.Get("/help")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetHelp(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetHelp(body);
      }

  @common.Get("/profile/:userId")
  @swagger.ApiOkResponse({
    type: ProfileDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetProfile(
    @common.Body()
    body: string
  ): Promise<ProfileDto> {
        return this.service.GetProfile(body);
      }
}
