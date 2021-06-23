import { Component, OnInit } from '@angular/core';
import { DeliveryZoneService } from '../../delivery-zone.service';
import { DeliveryZoneResponse } from '../../models/delivery-zone-response';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {
  zones!: DeliveryZoneResponse[];

  constructor(private deliveryZoneService: DeliveryZoneService) { }

  ngOnInit(): void {
    this.deliveryZoneService.getAll().subscribe((res: any) => {
      this.zones = res.Data;
    });
  }

}
