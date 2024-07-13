import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShopOwnerServiceBase } from "./base/shopOwner.service.base";

@Injectable()
export class ShopOwnerService extends ShopOwnerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
