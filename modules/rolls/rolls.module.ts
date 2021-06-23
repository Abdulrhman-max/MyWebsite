import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RollsRoutingModule } from './rolls-routing.module';
import { RollsFormComponent } from './components/rolls-form/rolls-form.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RollsListComponent } from './components/rolls-list/rolls-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RollsFormComponent,
    RollsListComponent
  ],
  imports: [
    CommonModule,
    RollsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class RollsModule { }
