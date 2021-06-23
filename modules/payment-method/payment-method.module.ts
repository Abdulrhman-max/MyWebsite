import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentMethodRoutingModule } from './payment-method-routing.module';
import { AddPaymentMethodComponent } from './components/add-payment-method/add-payment-method.component';
import { ListPaymentMethodComponent } from './components/list-payment-method/list-payment-method.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddPaymentMethodComponent,
    ListPaymentMethodComponent
  ],
  imports: [
    CommonModule,
    PaymentMethodRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PaymentMethodModule { }
