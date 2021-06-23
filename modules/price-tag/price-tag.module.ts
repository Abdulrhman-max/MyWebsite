import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceTagRoutingModule } from './price-tag-routing.module';
import { AddPriceTagComponent } from './components/add-price-tag/add-price-tag.component';
import { ListPriceTagComponent } from './components/list-price-tag/list-price-tag.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddPriceTagComponent,
    ListPriceTagComponent
  ],
  imports: [
    CommonModule,
    PriceTagRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PriceTagModule { }
