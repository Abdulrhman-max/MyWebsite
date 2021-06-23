import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PricePolicyRequist} from './models/price-policy-requist';
import { ItemPriceRespons } from './models/item-price-respons';
import { ProductPriceRespons } from './models/product-price-respons';
@Injectable({
  providedIn: 'root',
})
export class PricePolicy {
  constructor(private http: HttpClient, private _router: Router) {}

  //#region  list
  getAllPricePolice(): Observable<any> {
    return this.http.get<any>('pricePolicy');
  }
  //#endregion

  //#region  create and edit

  create(model: PricePolicyRequist): Observable<any> {
    return this.http.post<any>('pricePolicy', model);
  }

  update(id: string,model: PricePolicyRequist): Observable<any> {
    return this.http.put<any>('pricePolicy/' + id, model);
  }

  getById(Id: string): Observable<any> {
    return this.http.get<any>('pricePolicy/' + Id);
  }

  FillDropDown(Id: number): Observable<any> {
    return this.http.get<any>('pricePolicy/GetDropDownByLevel?id=' + Id);
  }
  getAllLevels(): Observable<any> {
    return this.http.get<any>('pricePolicy/GetAllLevels');
  }
  getAllTypes(): Observable<any> {
    return this.http.get<any>('pricePolicy/GetAllTypes');
  }
  //#endregion

  //#region Item Price
  getAllItems(): Observable<any> {
    return this.http.get<any>('itemDefinition');
  }
  CreateItemPrice(model: ItemPriceRespons): Observable<any> {
    return this.http.post<any>('ItemPrices/Add', model);
  }
  getAllItemsPrice(Id: string): Observable<any> {
    return this.http.get<any>('ItemPrices/GetAllByPricePolicyAsync?Id=' + Id);
  }

  UpdateItemPrice(
    id: string,
    model: ItemPriceRespons
  ): Observable<ItemPriceRespons> {
    return this.http.put<ItemPriceRespons>('ItemPrices/' + id, model);
  }
  //#endregion

  //#region  Product Price
  getAllProducts(): Observable<any> {
    return this.http.get<any>('product');
  }
  getAllPriceTag(): Observable<any> {
    return this.http.get<any>('pricetag');
  }

  CreateProductPrice( model: ProductPriceRespons): Observable<any> {
    return this.http.post<any>('ProductPrice', model);
  }

  getAllProductsPrice(Id: string): Observable<any> {
    return this.http.get<any>('ProductPrice/GetByPricePolicyAsync?Id=' + Id );
  }

  UpdateProductPrice(id: string,model: ProductPriceRespons): Observable<any> {
    return this.http.put<any>('productprice/' + id, model);
  }
  //#endregion
}
