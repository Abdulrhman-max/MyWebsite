import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import {
  LookUpResponse,
  PricePolicyRequist,
} from '../../models/price-policy-requist';
import { PricePolicy } from '../../PricePolicy.service';

@Component({
  selector: 'app-price-policy-add',
  templateUrl: './price-policy-add.component.html',
  styleUrls: ['./price-policy-add.component.styl'],
})
export class PricePolicyAddComponent implements OnInit {
  header: string = 'Add Price Policy';
  request: PricePolicyRequist;
  levels!: LookUpResponse[];
  types!: LookUpResponse[];
  DropDownData!: LookUpResponse[];
  selectedItems!: LookUpResponse[];
  levelsName!: string;

  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'Uid',
    textField: 'LatinName',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    allowSearchFilter: true,
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private PricePolicyservice: PricePolicy
  ) {
    this.request = new PricePolicyRequist();
  }

  ngOnInit(): void {
    this.PricePolicyservice.getAllLevels().subscribe((res: any) => {
      this.levels = res.Data;
    });
    this.PricePolicyservice.getAllTypes().subscribe((res: any) => {
      this.types = res.Data;
    });
  }

  onSubmit(): void {
    console.log(this.request);
    this.request.Details = this.selectedItems.map((el) => el['Uid']);

    this.PricePolicyservice.create(this.request).subscribe(
      (res: any) => {
        if (res.Success) {
          this.router.navigateByUrl('policy');
          this.toastr.success('Add Success');
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

  fillDropDownDetails() {
    let id = this.request.Level;
    this.selectedItems = [];
    this.PricePolicyservice.FillDropDown(id).subscribe(
      (res: any) => {
        this.DropDownData = res.Data;
        let index = this.levels.findIndex((x) => x.Id == id);

        this.levelsName = this.levels[index].LatinName;
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
