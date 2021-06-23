import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/core/guards/permission-guard.service';
import { ListComponent } from './components/list/list.component';
import { WarehousePermission } from './enums/warehouse-permission.enum';

const routes: Routes = [

      {
        path: '',
        component: ListComponent,
        canActivate: [PermissionGuard],
        data: {
          role: WarehousePermission[WarehousePermission.Get_Warehouse],
        },
      }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
