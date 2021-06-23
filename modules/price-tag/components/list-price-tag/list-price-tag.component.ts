import { Component, OnInit } from '@angular/core';
import { PriceTag } from '../../models/price-tag';
import { PriceTagService } from '../../price-tag.service';

@Component({
  selector: 'app-list-price-tag',
  templateUrl: './list-price-tag.component.html',
  styleUrls: ['./list-price-tag.component.styl']
})
export class ListPriceTagComponent implements OnInit {

  priceTags!: PriceTag[]
  constructor(private priceTagService : PriceTagService) { }

  ngOnInit(): void {
    debugger

    this.priceTagService.getAll().subscribe((res: any) => {
      debugger
      this.priceTags = res.Data;
   });
  }

  Active(id: string): void { }

}
