import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaymentService } from "./payment.service";
import { PaymentTransactionDto } from "../payment/PaymentTransactionDto";
import { PaymentStatusResponseDto } from "../payment/PaymentStatusResponseDto";
import { PaymentTransactionOutputDto } from "../payment/PaymentTransactionOutputDto";

@swagger.ApiTags("payments")
@common.Controller("payments")
export class PaymentController {
  constructor(protected readonly service: PaymentService) {}

  @common.Get("/payments/status/:id")
  @swagger.ApiOkResponse({
    type: PaymentStatusResponseDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetPaymentStatus(
    @common.Body()
    body: PaymentTransactionDto
  ): Promise<PaymentStatusResponseDto> {
        return this.service.GetPaymentStatus(body);
      }

  @common.Post("/payments")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async InitiatePayment(
    @common.Body()
    body: PaymentTransactionDto
  ): Promise<string> {
        return this.service.InitiatePayment(body);
      }

  @common.Get("/payments/transactions")
  @swagger.ApiOkResponse({
    type: PaymentTransactionOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ListPaymentTransactions(
    @common.Body()
    body: PaymentTransactionDto
  ): Promise<PaymentTransactionOutputDto[]> {
        return this.service.ListPaymentTransactions(body);
      }
}
