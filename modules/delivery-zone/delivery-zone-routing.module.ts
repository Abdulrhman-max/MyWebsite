import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/core/guards/permission-guard.service';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { DeliveryZonePermission } from './enums/delivery-zone-permission.enum';

const routes: Routes = [

      {
        path: '',
        component: ListComponent,
        canActivate: [PermissionGuard],
        data: {
          role: DeliveryZonePermission[DeliveryZonePermission.Get_DeliveryZone],
        },
      },
      {
        path: 'add/:id',
        component: CreateComponent,
        canActivate: [PermissionGuard],
        data: {
          role: DeliveryZonePermission[DeliveryZonePermission.Create_DeliveryZone],
        },
      },
      {
        path: 'Edit/:id',
        component: EditComponent,
        canActivate: [PermissionGuard],
        data: {
          role: DeliveryZonePermission[DeliveryZonePermission.Update_DeliveryZone],
        },
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryZoneRoutingModule { }
