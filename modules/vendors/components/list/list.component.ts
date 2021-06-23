import { Component, OnInit } from '@angular/core';
import { VendorResponse } from '../../models/vendor-response';
import { VendorService } from '../../vendor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {
  vendors!:VendorResponse[]
  constructor(private vendorService:VendorService) { }

  ngOnInit(): void {
    this.vendorService.getAll().subscribe((res: any) => {
      this.vendors = res.Data;
    });
  }

}
