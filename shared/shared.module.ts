import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MenubarModule} from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ToolbarModule} from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';





import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TableModule } from 'primeng/table';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderPathComponent } from './components/header-path/header-path.component';




//angular materials modules

const ANGULAR_MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSelectModule,
];

const PRIME_NG = [
  ButtonModule,
  SidebarModule,
  PanelMenuModule,
  ToolbarModule,
  TableModule,
  MenubarModule,
  DialogModule,
  InputTextModule,
  DropdownModule,
];
const COMPONENTS = [
  NotFoundComponent,
  HeaderComponent,
  FooterComponent,
  ConfirmDeleteComponent,
  SideMenuComponent,
  HeaderPathComponent,
];

const ANGULAR_MATERIAL_EXTENSIONS = [
  // extensions aangular material
];

@NgModule({
  declarations: [[...COMPONENTS]],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ToastrModule,
    TranslateModule,
    NgxSpinnerModule,
    [...ANGULAR_MATERIAL_MODULES],
    [...COMPONENTS],
    [...PRIME_NG],
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    TranslateModule,
    MatSliderModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    NgMultiSelectDropDownModule.forRoot(),

    [...ANGULAR_MATERIAL_MODULES],
    [...PRIME_NG],
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
