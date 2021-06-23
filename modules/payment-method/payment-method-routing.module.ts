import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/core/guards/permission-guard.service';
import { AddPaymentMethodComponent } from './components/add-payment-method/add-payment-method.component';
import { ListPaymentMethodComponent } from './components/list-payment-method/list-payment-method.component';
import { PaymentMethodPermission } from './enums/payment-method-permission';

const routes: Routes = [

      {
        path: '',
        component: ListPaymentMethodComponent,
        canActivate: [PermissionGuard],
        data: {
          role: PaymentMethodPermission[PaymentMethodPermission.Get_PaymentMethod],
        },
      },
      {
        path: 'add/:id',
        component: AddPaymentMethodComponent,
        canActivate: [PermissionGuard],
        data: {
          role: PaymentMethodPermission[PaymentMethodPermission.Create_PaymentMethod],
        },
      },
      {
        path: 'Edit/:id',
        component: AddPaymentMethodComponent,
        canActivate: [PermissionGuard],
        data: {
          role: PaymentMethodPermission[PaymentMethodPermission.Update_PaymentMethod],
        },
      },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentMethodRoutingModule { }
