import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { CustomerGroupService } from "../../customer-group/customer-group.service";
import { CustomerService } from "../customer.service";
import { CountryCode } from "../models/country-code";
import { Customer } from "../models/customer";
import { CustomerGroupResponse } from "../models/customer-group-response";


type NewType = Customer;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.styl']
})
export class EditComponent implements OnInit {
  [x: string]: any;

  id!:any;
  header!:string;
  request : NewType;
  customerGroup!:CustomerGroupResponse[];
  countryCodes!: CountryCode[];

  constructor(private route: ActivatedRoute, private customerService : CustomerService, private customerGroupService:CustomerGroupService,
    private toastr: ToastrService, private router: Router) {
      this.request = new Customer();
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.header = this.id == 0 ? 'New Customer' : 'Edit Customer';

    if (this.id!=0)
    {
      this.customerService.getCustomerById(this.id).subscribe(
      (res: any) => {
        if (!res?.Success) {
          this.request = res;
          console.log(res);
        } else {
          this.toastr.error(res.error.Errors[0]);
        }
      },
      (err: any) => {
        if (err.error.Errors[0] != null) {
          this.toastr.error(err.error.Errors[0]);
        } else {
          this.toastr.error('server-down');
        }
      }
    );
    }

    this.customerGroupService.getAllCustomerGroup().subscribe((res: any) => {
      this.customerGroup = res;
      console.log(this.customerGroup);
    });

    this.customerService.getAllCountryCode().subscribe((res: any) => {
      this.countryCodes = res;


    });
  }
  onSubmit()
  {
    if (this.id == 0) {
      this.customerService.createCustomer(this.request).subscribe(
        (res: any) => {
          if (!res?.Success) {
            this.router.navigateByUrl('/pages/customers');
            this.toastr.success('Add Success');
          } else {
            this.toastr.error(res.error.Errors[0]);
          }
        },
        (err: any) => {
          debugger
          if (err.error.Errors[0] != null) {
            this.toastr.error(err.error.Errors[0]);
          } else {
            this.toastr.error('server-down');
          }
        }
      );
    } else {
      console.log(this.request);

      this.customerService.update(this.id, this.request).subscribe(
        (res: any) => {
          if (!res?.Success) {
            this.router.navigateByUrl('/pages/customers');
            this.toastr.success('Update Success');
          } else {
            this.toastr.error(res.error.Errors[0]);
          }
        },
        (err: any) => {
          if (err.error.Errors[0] != null) {
            this.toastr.error(err.error.Errors[0]);
          } else {
            this.toastr.error('server-down');
          }
        }
      );
    }
  }
}
