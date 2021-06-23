import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { option, OptionGroupResponse} from '../../models/option-group-response.model';
import { OptiongroupService } from '../../optiongroup.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.styl'],
})
export class AddComponent implements OnInit {
  request: OptionGroupResponse;
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
    private router: Router,
    private toastr: ToastrService
  ) {
    this.request = new OptionGroupResponse();
  }

  ngOnInit(): void {
    this.optiongroupService.getAllProducts().subscribe((res: any) => {
      this.products = res.Data;
    });
  }

  onSubmit(): void {
    this.optiongroupService.create(this.request).subscribe(
      (res: any) => {
        if (res.Success) {
          this.router.navigateByUrl('pages/optiongroup');
          this.toastr.success('Add Success');
        } else {
          this.toastr.error(res.error.Errors[0]);
        }
      },
      (err: any) => {
        debugger;
        if (err.error.Errors[0] != null) {
          this.toastr.error(err.error.Errors[0]);
        } else {
          this.toastr.error('server-down');
        }
      }
    );
  }
}
