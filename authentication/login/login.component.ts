import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/app/core/base/base-form.component';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent
  extends BaseFormComponent
  implements OnInit, OnDestroy
{
  hide: boolean = true;
  loading$!: boolean;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly toastr: ToastrService,
    private readonly authService: AuthService,
    private readonly router: Router,
    public readonly translate: TranslateService
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  handelSubmitted(): void {
    this.loading$ = true;

    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe(
        (response: any) => {
          this.toastr.success('SUCCESS LOGIN ');
          localStorage.setItem('TOKEN', response?.Data?.Token);
          this.loading$ = false;
          this.router.navigate(['/pages']);
        },
        (error) => {
          this.loading$ = false;
        }
      );
    } else {
      this.toastr.error('Email or password incorrect !');
      this.loading$ = false;
    }
  }

  ngOnDestroy(): void {
    this.onDestory();
  }
}
