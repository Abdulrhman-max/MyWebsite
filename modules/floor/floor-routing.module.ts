import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/core/guards/permission-guard.service';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { FloorPermission } from './enums/floor-permission.enum';

const routes: Routes = [
    {
      path: '',
      component: ListComponent,
      canActivate: [PermissionGuard],
      data: {
      role:
        FloorPermission[
          FloorPermission.Get_Floor
        ],
    },
    },
    {
       path: 'add',
       component: CreateComponent,
       canActivate: [PermissionGuard],
       data: {
        role:
          FloorPermission[
            FloorPermission.Create_Floor
          ],
      },
    },
    {
      path: 'Edit/:id',
      component: EditComponent,
      canActivate: [PermissionGuard],
      data: {
        role:
        FloorPermission[
          FloorPermission.Update_Floor
          ],
      },
    },
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloorRoutingModule { }
