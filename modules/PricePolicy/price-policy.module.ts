import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PricePolicyRoutingModule } from './price-policy-routing.module';
import { PricePolicyAddComponent } from './Compontants/price-policy-add/price-policy-add.component';
import { PricePolicyListComponent } from './Compontants/price-policy-list/price-policy-list.component';
import { ProductComponent } from './Compontants/product/product.component';
import { InventoryComponent } from './Compontants/inventory/inventory.component';
import { EditPriceComponent } from './Compontants/edit-price/edit-price.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PricePolicyAddComponent,
    PricePolicyListComponent,
    ProductComponent,
    InventoryComponent,
    EditPriceComponent,
  ],
  imports: [
    CommonModule,
    PricePolicyRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
})
export class PricePolicyModule {}
