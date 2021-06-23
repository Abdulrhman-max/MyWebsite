import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/core/guards/permission-guard.service';
import { GroupEditComponent } from './components/group-edit/group-edit.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupPermission } from './enums/group-permission.enum';

const routes: Routes = [
  {
    path: '',
    component: GroupListComponent,
    canActivate: [PermissionGuard],
    data: {
      role: GroupPermission[GroupPermission.Get_Group],
    },
  },
  {
    path: 'edit/:id',
    component: GroupEditComponent,
    canActivate: [PermissionGuard],
    data: {
      role: GroupPermission[GroupPermission.Update_Group],
    },
  },
  {
    path: 'add',
    component: GroupEditComponent,
    canActivate: [PermissionGuard],
    data: {
      role: GroupPermission[GroupPermission.Create_Group],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuGroupRoutingModule {}
