import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './Compontants/list/list.component';
import { AddComponent } from './Compontants/add/add.component';
import { EditComponent } from './Compontants/edit/edit.component';
import { optionGroupRoutingModule } from './option-group-routing.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ListComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    optionGroupRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
})
export class OptionGroupModule {}
