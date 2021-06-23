import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent],
  imports: [CommonModule, AuthenticationRoutingModule, SharedModule],
  providers: [AuthService],
})
export class AuthenticationModule {}
