import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/core/guards/permission-guard.service';
import { DevicesResolver } from 'src/app/core/resolvers/devices.resolver';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';
import { DevicePermission } from './enums/device-permission.enum';

const routes: Routes = [

      {
        path: '',
        component: ListComponent,
        resolve: { devices: DevicesResolver},

      },
      {
        path: 'Deatails/:id',
        component: DetailsComponent,
        canActivate: [PermissionGuard],
        data: {
          role: DevicePermission[DevicePermission.Get_Device],
        },
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceRoutingModule {}
