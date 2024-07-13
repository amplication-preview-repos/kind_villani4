import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdminMenuService } from "./adminmenu.service";
import { ProfileDto } from "../userProfile/ProfileDto";

@swagger.ApiTags("adminMenus")
@common.Controller("adminMenus")
export class AdminMenuController {
  constructor(protected readonly service: AdminMenuService) {}

  @common.Post("/admin/ban/:userId")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async BanUser(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.BanUser(body);
      }

  @common.Get("/admin/profile/:userId")
  @swagger.ApiOkResponse({
    type: ProfileDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CheckUserProfile(
    @common.Body()
    body: string
  ): Promise<ProfileDto> {
        return this.service.CheckUserProfile(body);
      }

  @common.Post("/admin/advertisement")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateAdvertisement(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateAdvertisement(body);
      }

  @common.Post("/admin/newsletter")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendNewsletter(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SendNewsletter(body);
      }
}
