import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/core/guards/permission-guard.service';

import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { BranchPermission } from './enums/branch-permission.enum';

const routes: Routes = [

      {
        path: '',
        component: ListComponent,
        canActivate: [PermissionGuard],
        data: {
          role: BranchPermission[BranchPermission.Get_Branch],
        },
      },
      {
        path: 'add/:id',
        component: CreateComponent,
        canActivate: [PermissionGuard],
        data: {
          role: BranchPermission[BranchPermission.Create_Branch],
        },
      },
      {
        path: 'Edit/:id',
        component: CreateComponent,
        canActivate: [PermissionGuard],
        data: {
          role: BranchPermission[BranchPermission.Update_Branch],
        },
      },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BranchRoutingModule {}
