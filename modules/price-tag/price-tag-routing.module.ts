import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/core/guards/permission-guard.service';
import { AddPriceTagComponent } from './components/add-price-tag/add-price-tag.component';
import { ListPriceTagComponent } from './components/list-price-tag/list-price-tag.component';
import { PriceTagPermission } from './enums/price-tag-permission';

const routes: Routes = [

      {
        path: '',
        component: ListPriceTagComponent,
        canActivate: [PermissionGuard],
        data: {
          role: PriceTagPermission[PriceTagPermission.Get_PriceTag],
        },
      },
      {
        path: 'add/:id',
        component: AddPriceTagComponent,
        canActivate: [PermissionGuard],
        data: {
          role: PriceTagPermission[PriceTagPermission.Create_PriceTag],
        },
      },
      {
        path: 'Edit/:id',
        component: AddPriceTagComponent,
        canActivate: [PermissionGuard],
        data: {
          role: PriceTagPermission[PriceTagPermission.Update_PriceTag],
        },
      },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceTagRoutingModule { }
