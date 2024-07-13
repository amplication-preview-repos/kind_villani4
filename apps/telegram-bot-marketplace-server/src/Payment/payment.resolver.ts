import * as graphql from "@nestjs/graphql";
import { PaymentStatusRequestDto } from "../payment/PaymentStatusRequestDto";
import { PaymentStatusResponseDto } from "../payment/PaymentStatusResponseDto";
import { PaymentRequestDto } from "../payment/PaymentRequestDto";
import { PaymentTransactionDto } from "../payment/PaymentTransactionDto";
import { PaymentTransactionOutputDto } from "../payment/PaymentTransactionOutputDto";
import { PaymentService } from "./payment.service";

export class PaymentResolver {
  constructor(protected readonly service: PaymentService) {}

  @graphql.Query(() => PaymentStatusResponseDto)
  async GetPaymentStatus(
    @graphql.Args()
    args: PaymentStatusRequestDto
  ): Promise<PaymentStatusResponseDto> {
    return this.service.GetPaymentStatus(args);
  }

  @graphql.Mutation(() => String)
  async InitiatePayment(
    @graphql.Args()
    args: PaymentRequestDto
  ): Promise<string> {
    return this.service.InitiatePayment(args);
  }

  @graphql.Query(() => [PaymentTransactionOutputDto])
  async ListPaymentTransactions(
    @graphql.Args()
    args: PaymentTransactionDto
  ): Promise<PaymentTransactionOutputDto[]> {
    return this.service.ListPaymentTransactions(args);
  }
}
