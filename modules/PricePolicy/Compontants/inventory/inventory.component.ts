import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ItemPriceRespons } from '../../models/item-price-respons';
import { ItemRespons } from '../../models/item-respons';
import { PricePolicy } from '../../PricePolicy.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.styl'],
})
export class InventoryComponent implements OnInit {
  @Input() pricePolicyId!: string;
  itemsPrice: ItemPriceRespons[] = [];
  Items!: ItemRespons[];

  constructor(
    private PricePolicyservice: PricePolicy,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.PricePolicyservice.getAllItems().subscribe((res: any) => {
      this.Items = res.Data;
    });

    this.PricePolicyservice.getAllItemsPrice(this.pricePolicyId).subscribe(
      (res: any) => {
        this.itemsPrice = res.Data;
      }
    );
  }

  save(model: ItemPriceRespons) {
    model.PricePolicyId = this.pricePolicyId;
    model.ItemUnitId = '39daa79e-75dc-4c63-8792-3f8af5bd701a';
    model.Discount = 10;
    this.PricePolicyservice.CreateItemPrice(model).subscribe(
      (res: any) => {
        if (!res?.Success) {
          this.toastr.success('Saved successfully');
          model.Uid = res.Data.Uid;
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
  edit(model: ItemPriceRespons) {
    model.PricePolicyId = this.pricePolicyId;
    model.ItemUnitId = '39daa79e-75dc-4c63-8792-3f8af5bd701a';
    model.Discount = 10;
    this.PricePolicyservice.UpdateItemPrice(model.Uid, model).subscribe(
      (res: any) => {
        if (!res?.Success) {
          this.toastr.success('Updated successfully');
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

  delete(index: number) {
    this.itemsPrice.splice(index, 1);
  }
  add() {
    this.itemsPrice.push(new ItemPriceRespons());
  }
}
