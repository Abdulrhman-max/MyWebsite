import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { BranchService } from '../../branch.service';
import { BranchResponse } from '../../models/branch-response';
import { DeliveryZoneResponse } from '../../models/delivery-zone-response';
import { LookUpResponse } from '../../models/look-up-response';
import { ShiftResponse } from '../../models/shift-response';
import { WarehouseResponse } from '../../models/warehouse-response';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.styl'],
})
export class CreateComponent implements OnInit {
  constructor(
    private branchService: BranchService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}
  toppings = new FormControl();
  request!: BranchResponse;
  DeliveryZones!: LookUpResponse[];
  Warehouses!: LookUpResponse[];
  id: any;
  public loadingSubmitted$: boolean = false;


  DeliveryZonesData: string[] = [];
  WarehousesData: string[] = [];

  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'Uid',
    textField: 'LatinName',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    allowSearchFilter: true,
  };

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.request = new BranchResponse();
    this.branchService.getAllVendors().subscribe((res: any) => {});
    this.branchService.getAllDeliveryZones().subscribe((res: any) => {
      this.DeliveryZones = res.Data;
    });

    this.branchService.getAllWarehouses().subscribe((res: any) => {
      this.Warehouses = res.Data;
    });

    if (this.id != '0') {
      this.branchService.getById(this.id).subscribe((res: any) => {
        if (res.Success) {
          this.request = res.Data;
          this.DeliveryZonesData= this.request.DeliveryZone.map(x=>x.Uid)
          this.WarehousesData= this.request.Warehouse.map(x=>x.Uid)
          console.log( this.DeliveryZonesData)
          console.log( this.DeliveryZones)
        }
      });
    } else {
      this.request = new BranchResponse();
    }
  }

  onSubmit() {

    console.log(this.request.DeliveryZone)

    let that = this;
    this.request.Warehouse = [];
    this.request.DeliveryZone = [];

    // this.WarehousesData.forEach(function (value) {
    //   let newWareHouse = new WarehouseResponse();
    //   newWareHouse.WarehouseId = value.Uid;
    //   that.request.Warehouse.push(newWareHouse);
    // });

    // this.DeliveryZonesData.forEach(function (value) {
    //   let newDeliveryZone = new DeliveryZoneResponse();
    //   newDeliveryZone.DeliveryZoneId = value.Uid;
    //   that.request.DeliveryZone.push(newDeliveryZone);
    // });

    if (this.id == '0') {
      this.branchService.create(this.request).subscribe(
        (res: any) => {
          if (res.Success) {
            this.router.navigateByUrl('pages/branch');
            this.toastr.success('Add Success');
          } else {
            debugger;
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
    } else {
      console.log(this.request);

      this.branchService.update(this.id, this.request).subscribe(
        (res: any) => {
          if (res.Success) {
            this.router.navigateByUrl('pages/branch');
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

  eventCheck(event: any) {
    console.log(event)
    if (event) {
      this.request.Shifts.push(new ShiftResponse());
    } else {
      this.request.Shifts = [];
    }
  }
  onRemoveRole(index: number): void {
    console.log(index);
    this.request.Shifts.splice(index, 1);
  }
  addNewShift() {
    this.request.Shifts.push(new ShiftResponse());
  }
}
