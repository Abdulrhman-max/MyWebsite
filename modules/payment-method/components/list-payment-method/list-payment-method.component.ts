import { Component, OnInit } from '@angular/core';
import { PaymentMethod } from '../../models/payment-method';
import { PaymentMethodService } from '../../payment-method.service';

@Component({
  selector: 'app-list-payment-method',
  templateUrl: './list-payment-method.component.html',
  styleUrls: ['./list-payment-method.component.styl']
})
export class ListPaymentMethodComponent implements OnInit {

  paymentMethods!: PaymentMethod[];

  constructor(
    private paymentMethodService:PaymentMethodService) { }

  ngOnInit(): void {
    this.paymentMethodService.getAll().subscribe((res: any) => {
      this.paymentMethods = res.Data;
  });
 }

  Active(id: string): void { }

}
