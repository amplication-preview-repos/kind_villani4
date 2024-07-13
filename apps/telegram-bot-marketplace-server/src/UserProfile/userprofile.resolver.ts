import * as graphql from "@nestjs/graphql";
import { ProfileDto } from "../userProfile/ProfileDto";
import { UserProfileService } from "./userprofile.service";

export class UserProfileResolver {
  constructor(protected readonly service: UserProfileService) {}

  @graphql.Query(() => String)
  async GetHelp(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetHelp(args);
  }

  @graphql.Query(() => ProfileDto)
  async GetProfile(
    @graphql.Args()
    args: string
  ): Promise<ProfileDto> {
    return this.service.GetProfile(args);
  }
}
