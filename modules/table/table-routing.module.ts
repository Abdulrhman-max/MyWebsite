import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/core/guards/permission-guard.service';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { TablePermission } from './enums/table-permission.enum';

const routes: Routes = [

    {
      path: 'list/:id',
      component: ListComponent,
      canActivate: [PermissionGuard],
      data: {
        role:
        TablePermission
          [
          TablePermission.Get_Table
          ],
      },
    },
    {
      path: 'list/add/:id/:floorId',
      component: CreateComponent,
      canActivate: [PermissionGuard],
      data: {
        role:
        TablePermission
          [
          TablePermission.Create_Table
          ],
      },
    },
    {
      path: 'list/Edit/:id',
      component: EditComponent,
      canActivate: [PermissionGuard],
      data: {
        role:
        TablePermission
          [
          TablePermission.Update_Table
          ],
      },
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
