import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/core/guards/permission-guard.service';
import { ListComponent } from './components/list/list.component';
import { Vendorpermission } from './enums/vendorpermission.enum';

const routes: Routes = [
  {

        path: '',
        component: ListComponent,
        canActivate: [PermissionGuard],
        data: {
          role: Vendorpermission[Vendorpermission.Get_Vendor],
        },
      }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorsRoutingModule { }
