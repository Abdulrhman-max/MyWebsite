import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import {
  option,
  OptionGroupResponse,
} from '../../models/option-group-response.model';
import { OptiongroupService } from '../../optiongroup.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.styl'],
})
export class EditComponent implements OnInit {
  id!: any;
  request!: OptionGroupResponse;
  products!: option[];

  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'ProductId',
    textField: 'LatinName',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    allowSearchFilter: true,
  };
  constructor(
    private optiongroupService: OptiongroupService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.request = new OptionGroupResponse();
  }
  onSelectAll(items: any[]) {
    console.log(items);
    this.request.Options = items;
    console.log(this.request.Options);
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.optiongroupService.getById(this.id).subscribe(
      (res: any) => {
        this.request = res.Data;
      },
      (err: any) => {
        if (err.error.Errors[0] != null) {
          this.toastr.error(err.error.Errors[0]);
        } else {
          this.toastr.error('server-down');
        }
      }
    );

    this.optiongroupService.getAllProducts().subscribe((res: any) => {
      this.products = res.Data;
    });
  }

  onSubmit() {
    this.optiongroupService.update(this.id, this.request).subscribe(
      (res: any) => {
        if (res.Success) {
          this.router.navigateByUrl('pages/optiongroup');
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
