import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/core/guards/permission-guard.service';
import { AddComponent } from './Compontants/add/add.component';
import { EditComponent } from './Compontants/edit/edit.component';
import { ListComponent } from './Compontants/list/list.component';
import { OptionGroupPermission } from './enums/option-group-permission.enum';

const routes: Routes = [

      {
        path: '',
        component: ListComponent,
        // canActivate: [PermissionGuard],
        // data: {
        //   role:
        //     OptionGroupPermission[
        //       OptionGroupPermission.Create_OptionGroupTemplete
        //     ],
        // },
      },
      {
        path: 'add',
        component: AddComponent,
        // canActivate: [PermissionGuard],
        // data: {
        //   role:
        //     OptionGroupPermission[
        //       OptionGroupPermission.Create_OptionGroupTemplete
        //     ],
        // },
      },
      {
        path: 'Edit/:id',
        component: EditComponent,
        // canActivate: [PermissionGuard],
        // data: {
        //   role:
        //     OptionGroupPermission[
        //       OptionGroupPermission.Update_OptionGroupTemplete
        //     ],
        // },
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class optionGroupRoutingModule {}
