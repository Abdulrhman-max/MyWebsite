import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/core/guards/permission-guard.service';
import { EditComponent } from './edit/edit.component';
import { CustomerPermission } from './enums/customer-permission.enum';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    canActivate: [PermissionGuard],
    data: {
      role: CustomerPermission[CustomerPermission.Get_Customer],
    },
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [PermissionGuard],
    data: {
      role: CustomerPermission[CustomerPermission.Update_Customer],
    },
  },
  {
    path: 'add/:id',
    component: EditComponent,
    canActivate: [PermissionGuard],
    data: {
      role: CustomerPermission[CustomerPermission.Create_Customer],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
