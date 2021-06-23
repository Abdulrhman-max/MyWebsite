import { Component, OnInit } from '@angular/core';
import { WarehouseResponse } from '../../models/warehouse-response';
import { WarehouseService } from '../../warehouse.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {
  warehouses!:WarehouseResponse[]
  constructor(private warehouseService:WarehouseService) { }

  ngOnInit(): void {
    this.warehouseService.getAll().subscribe((res: any) => {
      this.warehouses = res.Data;
    });
  }

}
