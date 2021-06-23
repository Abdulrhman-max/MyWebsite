import { Component, OnInit } from '@angular/core';
import { PricePolicyRequist } from '../../models/price-policy-requist';
import { PricePolicy } from '../../PricePolicy.service';

@Component({
  selector: 'app-price-policy-list',
  templateUrl: './price-policy-list.component.html',
  styleUrls: ['./price-policy-list.component.styl'],
})
export class PricePolicyListComponent implements OnInit {
  constructor(private PricePolicyservice: PricePolicy) {}

  pericePolicies!: PricePolicyRequist[];

  ngOnInit(): void {
    this.PricePolicyservice.getAllPricePolice().subscribe((res: any) => {
      this.pericePolicies = res.Data;
    });
  }
}
