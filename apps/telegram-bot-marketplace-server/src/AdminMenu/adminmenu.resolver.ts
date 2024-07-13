import * as graphql from "@nestjs/graphql";
import { ProfileDto } from "../userProfile/ProfileDto";
import { AdminMenuService } from "./adminmenu.service";

export class AdminMenuResolver {
  constructor(protected readonly service: AdminMenuService) {}

  @graphql.Mutation(() => String)
  async BanUser(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.BanUser(args);
  }

  @graphql.Query(() => ProfileDto)
  async CheckUserProfile(
    @graphql.Args()
    args: string
  ): Promise<ProfileDto> {
    return this.service.CheckUserProfile(args);
  }

  @graphql.Mutation(() => String)
  async CreateAdvertisement(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateAdvertisement(args);
  }

  @graphql.Mutation(() => String)
  async SendNewsletter(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SendNewsletter(args);
  }
}
