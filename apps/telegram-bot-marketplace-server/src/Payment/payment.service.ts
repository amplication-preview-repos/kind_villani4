import { Injectable } from "@nestjs/common";
import { PaymentStatusRequestDto } from "../payment/PaymentStatusRequestDto";
import { PaymentStatusResponseDto } from "../payment/PaymentStatusResponseDto";
import { PaymentRequestDto } from "../payment/PaymentRequestDto";
import { PaymentTransactionDto } from "../payment/PaymentTransactionDto";
import { PaymentTransactionOutputDto } from "../payment/PaymentTransactionOutputDto";

@Injectable()
export class PaymentService {
  constructor() {}
  async GetPaymentStatus(args: PaymentStatusRequestDto): Promise<PaymentStatusResponseDto> {
    throw new Error("Not implemented");
  }
  async InitiatePayment(args: PaymentRequestDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async ListPaymentTransactions(args: PaymentTransactionDto): Promise<PaymentTransactionOutputDto[]> {
    throw new Error("Not implemented");
  }
}
