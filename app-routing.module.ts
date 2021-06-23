import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { GuardRouteService } from './core/guards/auth-guard';
import { UnauthGuardService } from './core/guards/unauth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full'},
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
    canActivate: [UnauthGuardService],
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./modules/pages.module').then((m) => m.PagesModule),
  },
 
  // {
  //   path: 'vendors',
  //   loadChildren: () =>
  //     import('./modules/vendors/vendors.module').then(
  //       (m) => m.VendorsModule
  //     ),
  //     canLoad: [AuthGuard],
  //     data: {
  //       role: Vendorpermission[Vendorpermission.Get_Vendor],
  //     },
  // },
  // {
  //   path: 'warehouses',
  //   loadChildren: () =>
  //     import('./modules/warehouse/warehouse.module').then(
  //       (m) => m.WarehouseModule
  //     ),
  //     canLoad: [AuthGuard],
  //     data: {
  //       role: WarehousePermission[WarehousePermission.Get_Warehouse],
  //     },
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
