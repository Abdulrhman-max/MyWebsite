import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchRoutingModule } from './branch-routing.module';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [CommonModule,BranchRoutingModule,SharedModule,MaterialModule,NgMultiSelectDropDownModule.forRoot(),
  ],
})
export class BranchModule {}
