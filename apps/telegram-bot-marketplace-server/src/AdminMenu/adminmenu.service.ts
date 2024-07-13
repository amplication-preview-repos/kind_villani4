import { Injectable } from "@nestjs/common";
import { ProfileDto } from "../userProfile/ProfileDto";

@Injectable()
export class AdminMenuService {
  constructor() {}
  async BanUser(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CheckUserProfile(args: string): Promise<ProfileDto> {
    throw new Error("Not implemented");
  }
  async CreateAdvertisement(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SendNewsletter(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
