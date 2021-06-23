import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/core/guards/permission-guard.service';
import { EditPriceComponent } from './Compontants/edit-price/edit-price.component';
import { PricePolicyAddComponent } from './Compontants/price-policy-add/price-policy-add.component';
import { PricePolicyListComponent } from './Compontants/price-policy-list/price-policy-list.component';
import { PricePolicyPermission } from './enums/price-policy-permission.enum';

const routes: Routes = [

      {
        path: '',
        component: PricePolicyListComponent,
        canActivate: [PermissionGuard],
        data: {
          role: PricePolicyPermission[PricePolicyPermission.Get_PricePolicy],
        },
      },
      {
        path: 'add/:id',
        component: PricePolicyAddComponent,
        canActivate: [PermissionGuard],
        data: {
          role: PricePolicyPermission[PricePolicyPermission.Create_PricePolicy],
        },
      },
      {
        path: 'Edit/:id',
        component: EditPriceComponent,
        canActivate: [PermissionGuard],
        data: {
          role: PricePolicyPermission[PricePolicyPermission.Update_PricePolicy],
        },
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PricePolicyRoutingModule {}
