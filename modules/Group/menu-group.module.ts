import { MenuGroupRoutingModule } from './menu-group-routing.module';
import { GroupListComponent } from './components/group-list/group-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupEditComponent } from './components/group-edit/group-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [GroupEditComponent, GroupListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MenuGroupRoutingModule,
    MaterialModule,

  ],
})
export class MenuGroupModule {}
