import { Injectable } from "@nestjs/common";
import { ProfileDto } from "../userProfile/ProfileDto";

@Injectable()
export class UserProfileService {
  constructor() {}
  async GetHelp(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetProfile(args: string): Promise<ProfileDto> {
    throw new Error("Not implemented");
  }
}
