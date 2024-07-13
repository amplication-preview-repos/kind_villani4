import { Module } from "@nestjs/common";
import { AdminModule } from "./admin/admin.module";
import { ShopOwnerModule } from "./shopOwner/shopOwner.module";
import { ProductModule } from "./product/product.module";
import { CategoryModule } from "./category/category.module";
import { ShopModule } from "./shop/shop.module";
import { ProfileModule } from "./profile/profile.module";
import { UserModule } from "./user/user.module";
import { AdminMenuModule } from "./AdminMenu/adminmenu.module";
import { PaymentModule } from "./Payment/payment.module";
import { UserProfileModule } from "./UserProfile/userprofile.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    AdminModule,
    ShopOwnerModule,
    ProductModule,
    CategoryModule,
    ShopModule,
    ProfileModule,
    UserModule,
    AdminMenuModule,
    PaymentModule,
    UserProfileModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
