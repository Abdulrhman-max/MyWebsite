import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerGroupRoutingModule } from './../customer-group/customer-group-routing.module';

@NgModule({
  declarations: [ListComponent, EditComponent],
  imports: [CommonModule, CustomerGroupRoutingModule, SharedModule],
})
export class CustomerGroupModule {}
