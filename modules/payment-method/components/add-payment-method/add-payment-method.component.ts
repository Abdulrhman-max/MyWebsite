import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentMethod } from '../../models/payment-method';
import { PaymentMethodService } from '../../payment-method.service';
import { ToastrService } from 'ngx-toastr';
import { PaymentMethodType } from '../../models/payment-method-type';

@Component({
  selector: 'app-add-payment-method',
  templateUrl: './add-payment-method.component.html',
  styleUrls: ['./add-payment-method.component.styl']
})
export class AddPaymentMethodComponent implements OnInit {

  constructor(
    private paymentMethodService: PaymentMethodService,
    private route: ActivatedRoute,
    private router: Router,
    private toaster: ToastrService,
  ) { }


  request!: PaymentMethod;
  id: any;
  Types!: PaymentMethodType[];
  Title!: string;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.Title = (this.id == '0') ? "Create New Payment Method" : "Edit Payment Method";
    this.request = new PaymentMethod();
    this.paymentMethodService.getTypes().subscribe((res: any) => {
      this.Types = res.Data;
    });
    if (this.id != 0) {
      this.paymentMethodService.getById(this.id).subscribe((res: any) => {
        this.request = res.Data;
      });
    }
  }

  onSubmit() {
    if(this.id==0){
    this.paymentMethodService.create(this.request).subscribe(
      (res: any) => {
        if (res.Success) {
          this.router.navigateByUrl('pages/payment');
          this.toaster.success('Add Success');
        } else {
          this.toaster.error(res.error.Errors[0]);
        }
      },
      (err: any) => {
        if (err.error.Errors[0] != null) {
          this.toaster.error(err.error.Errors[0]);
        } else {
          this.toaster.error('server-down');
        }
      });
    }
    else {
      this.paymentMethodService.Update(this.request).subscribe(
        (res: any) => {
          if (res.Success) {
            this.router.navigateByUrl('pages/payment');
            this.toaster.success('Add Success');
          } else {
            this.toaster.error(res.error.Errors[0]);
          }
        },
        (err: any) => {
          if (err.error.Errors[0] != null) {
            this.toaster.error(err.error.Errors[0]);
          } else {
            this.toaster.error('server-down');
          }
        });
    }
  }
}
