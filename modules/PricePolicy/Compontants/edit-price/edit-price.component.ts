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
  selector: 'app-edit-price',
  templateUrl: './edit-price.component.html',
  styleUrls: ['./edit-price.component.styl'],
})
export class EditPriceComponent implements OnInit {
  id: any;
  header: string = 'Edit Price Policy';
  request!: PricePolicyRequist;
  levels!: LookUpResponse[];
  types!: LookUpResponse[];
  DropDownData!: LookUpResponse[];
  selectedItems!: LookUpResponse[];
  selectedIndex: number = 0;
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
    private toastr: ToastrService,
    private PricePolicyservice: PricePolicy
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.PricePolicyservice.getAllLevels().subscribe((res: any) => {
      this.levels = res.Data;
    });

    this.PricePolicyservice.getAllTypes().subscribe((res: any) => {
      this.types = res.Data;
    });

    this.PricePolicyservice.getById(this.id).subscribe(
      (res: any) => {
        this.request = res.Data;
        let index = this.levels.findIndex((x) => x.Id == this.request.Level);

        this.levelsName = this.levels[index]?.LatinName;
        this.PricePolicyservice.FillDropDown(this.request.Level).subscribe(
          (res: any) => {
            this.DropDownData = res.Data;
            this.selectedItems = [];
            this.request.Details.forEach((el) => {
              let index = this.DropDownData.findIndex((x) => x.Uid == el);
              if (index != -1) {
                this.selectedItems.push(this.DropDownData[index]);
              }
            });
          }
        );
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

  onSubmit(): void {
    this.request.Details = this.selectedItems.map((el) => el['Uid']);
    this.PricePolicyservice.update(this.id, this.request).subscribe(
      (res: any) => {
        if (res.Success) {
          this.selectedIndex += 1;
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

  fillDropDownDetails() {
    this.selectedItems = [];
    this.PricePolicyservice.FillDropDown(this.request.Level).subscribe(
      (res: any) => {
        this.DropDownData = res.Data;
        this.request.Details.forEach((el) => {
          let index = this.DropDownData.findIndex((x) => x.Uid == el);
          if (index != -1) {
            this.selectedItems.push(this.DropDownData[index]);
          }
        });

        let index = this.levels.findIndex((x) => x.Id == this.request.Level);

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
