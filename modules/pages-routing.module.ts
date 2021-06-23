import { AddCityComponent } from './../add-city/add-city.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from '../city/city.component';
import { GuardRouteService } from '../core/guards/auth-guard';
import { PagesComponent } from './pages.component';
import { EditCityComponent } from '../edit-city/edit-city.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [GuardRouteService],
    children: [
      { path: '', redirectTo: 'dashboard' },
      {
        path: 'users',
        loadChildren: () =>
          import('../modules/user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'floor',
        loadChildren: () =>
          import('../modules/floor/floor.module').then((m) => m.FloorModule),
      },
      {
        path: 'devices',
        loadChildren: () =>
          import('../modules/device/device.module').then((m) => m.DeviceModule),
      },
      {
        path: 'table',
        loadChildren: () =>
          import('../modules/table/table.module').then((m) => m.TableModule),
      },
      {
        path: 'branch',
        loadChildren: () =>
          import('../modules/branch/branch.module').then((m) => m.BranchModule),
      },
      {
        path: 'deliveryzone',
        loadChildren: () =>
          import('../modules/delivery-zone/delivery-zone.module').then((m) => m.DeliveryZoneModule),
      },
      {
        path: 'vendors',
        loadChildren: () =>
          import('../modules/vendors/vendors.module').then((m) => m.VendorsModule),
      },
      {
        path: 'warehouse',
        loadChildren: () =>
          import('../modules/warehouse/warehouse.module').then((m) => m.WarehouseModule),
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('../modules/Customer/customer.module').then((m) => m.CustomerModule),
      },
      {
        path: 'customersGroup',
        loadChildren: () =>
          import('../modules/customer-group/customer-group.module').then((m) => m.CustomerGroupModule),
      },
      {
        path: 'customersGroup',
        loadChildren: () =>
          import('../modules/customer-group/customer-group.module').then((m) => m.CustomerGroupModule),
      },
      {
        path: 'optionGroup',
        loadChildren: () =>
          import('../modules/option-group/option-group.module').then((m) => m.OptionGroupModule),
      },
      {
        path: 'group',
        loadChildren: () =>
          import('../modules/Group/menu-group.module').then((m) => m.MenuGroupModule),
      },
      {
        path: 'pricePolicy',
        loadChildren: () =>
          import('../modules/PricePolicy/price-policy.module').then((m) => m.PricePolicyModule),
      },
      {
        path: 'Rolles',
        loadChildren: () =>
          import('../modules/rolls/rolls.module').then((m) => m.RollsModule),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('../modules/payment-method/payment-method.module').then((m) => m.PaymentMethodModule),
      },
      {
        path: 'priceTag',
        loadChildren: () =>
          import('../modules/price-tag/price-tag.module').then((m) => m.PriceTagModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {path:'City' , component: CityComponent } , 
      {path:'AddCity' , component:AddCityComponent} ,
      {path:'editCity/:id' , component: EditCityComponent} 

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
