import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

export class BaseFormComponent {
  protected destroy$: Subject<void>;
  public form!: FormGroup;
  public loadingSubmitted$: boolean = false;

  constructor() {
    this.destroy$ = new Subject();
  }

  public validationError(controlName: string, validationType: string): boolean {
    const control = this.form.controls[controlName];

    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) && (control.dirty || control.touched);

    return result;
  }

  protected onDestory(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}