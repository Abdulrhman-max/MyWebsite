import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/core/guards/permission-guard.service';
import { RollsFormComponent } from './components/rolls-form/rolls-form.component';
import { RollsListComponent } from './components/rolls-list/rolls-list.component';
import { RollePermission } from './enums/rolle-permission.enum';

const routes: Routes = [
  {
    path: '',
    component: RollsListComponent,
    canActivate: [PermissionGuard],
    data: {
    role:
    RollePermission[
      RollePermission.Get_Role
      ],
  },
  },
  {
     path: 'add',
     component: RollsFormComponent,
     canActivate: [PermissionGuard],
     data: {
      role:
      RollePermission[
        RollePermission.Create_Role
        ],
    },
  },
  {
    path: 'Edit/:id',
    component: RollsFormComponent,
    canActivate: [PermissionGuard],
    data: {
      role:
      RollePermission[
        RollePermission.Update_Role
        ],
    },
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RollsRoutingModule { }
