import { EditComponent } from './components/edit/edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { PermissionGuard } from 'src/app/core/guards/permission-guard.service';
import { CustomerGroupPermission } from './enums/customer-group-permission.enum';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    canActivate: [PermissionGuard],
    data: {
      role: CustomerGroupPermission[CustomerGroupPermission.Get_CustomerGroup],
    },
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [PermissionGuard],
    data: {
      role: CustomerGroupPermission[CustomerGroupPermission.Update_CustomerGroup],
    },
  },
  {
    path: 'add/:id',
    component: EditComponent,
    canActivate: [PermissionGuard],
    data: {
      role: CustomerGroupPermission[CustomerGroupPermission.Create_CustomerGroup],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerGroupRoutingModule {}
