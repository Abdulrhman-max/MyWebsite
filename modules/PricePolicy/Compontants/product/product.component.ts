import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PriceTagResponse } from '../../models/price-tag-response';
import { ProductPriceRespons } from '../../models/product-price-respons';
import { ProductResponce } from '../../models/product-responce';
import { PricePolicy } from '../../PricePolicy.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.styl'],
})
export class ProductComponent implements OnInit {
  @Input() pricePolicyId!: string;
  ProductPrice: ProductPriceRespons[] = [];
  products!: ProductResponce[];
  priceTags!: PriceTagResponse[];

  constructor(
    private PricePolicyservice: PricePolicy,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.PricePolicyservice.getAllProducts().subscribe((res: any) => {
      this.products = res.Data;
    });
    this.PricePolicyservice.getAllPriceTag().subscribe((res: any) => {
      this.priceTags = res.Data;
    });
    this.PricePolicyservice.getAllProductsPrice(this.pricePolicyId).subscribe(
      (res: any) => {
        this.ProductPrice = res.Data;
      }
    );
  }

  save(model: ProductPriceRespons) {
    model.PricePolicyUid = this.pricePolicyId;
    this.PricePolicyservice.CreateProductPrice(model).subscribe(
      (res: any) => {
        if (res?.Success) {
          this.toastr.success('Saved successfully');
          model.Uid = res.Data.Uid;
        } else {
          this.toastr.error(res.error.Errors[0]);
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
  edit(model: ProductPriceRespons) {
    model.PricePolicyUid = this.pricePolicyId;
    this.PricePolicyservice.UpdateProductPrice(model.Uid, model).subscribe(
      (res: any) => {
        if (res?.Success) {
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
    this.ProductPrice.splice(index, 1);
  }
  add() {
    this.ProductPrice.push(new ProductPriceRespons());
  }
}
