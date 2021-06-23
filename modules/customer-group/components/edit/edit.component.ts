import { CustomerGroupService } from './../../customer-group.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerGroupResponse } from '../../models/customer-group-response';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.styl']
})
export class EditComponent implements OnInit {

  id: any;
  header!: string;
  request : CustomerGroupResponse;

  constructor(private route: ActivatedRoute, private customerGroupService : CustomerGroupService,
    private toastr: ToastrService, private router: Router) {
    this.request = new CustomerGroupResponse();

   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.header = this.id == 0 ? 'New Customer Group' : 'Edit Customer Group';
if (this.id!=0)
{
    this.customerGroupService.getCustomerGroupById(this.id).subscribe(
      (res: any) => {
        if (!res?.Success) {
          this.request = res;
        } else {
          this.toastr.error(res?.errors[0]);
        }
      },
      (err: any) => {
        if (err.error.errors[0] != null) {
          this.toastr.error(err.error.errors[0]);
        } else {
          this.toastr.error('server-down');
        }
      }
    );
  }
}
  onSubmit()
  {
    if (this.id == 0) {
      this.customerGroupService.createCustomerGroup(this.request).subscribe(
        (res: any) => {
          if (!res?.Success) {
            this.router.navigateByUrl('/pages/customersGroup');
            this.toastr.success('Add Success');
          } else {
            this.toastr.error(res?.errors[0]);
          }
        },
        (err: any) => {
          if (err?.errors[0] != null) {
            this.toastr.error(err?.errors[0]);
          } else {
            this.toastr.error('server-down');
          }
        }
      );
    } else {
      console.log(this.request);

      this.customerGroupService.update(this.id, this.request).subscribe(
        (res: any) => {
          if (!res?.Success) {
            this.router.navigateByUrl('/pages/customersGroup');
            this.toastr.success('Update Success');
          } else {
            this.toastr.error(res?.errors[0]);
          }
        },
        (err: any) => {
          if (err?.errors[0] != null) {
            this.toastr.error(err?.errors[0]);
          } else {
            this.toastr.error('server-down');
          }
        }
      );
    }
  }

}
