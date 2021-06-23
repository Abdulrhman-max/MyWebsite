import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryZoneRoutingModule } from './delivery-zone-routing.module';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [CommonModule, DeliveryZoneRoutingModule,SharedModule ]
})
export class DeliveryZoneModule { }
