import { Component, OnInit } from '@angular/core';
import { FloorService } from '../../floor.service';
import { FloorResponse } from '../../models/floor-response';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {

  floors!:FloorResponse[];


  constructor(private floorService:FloorService) { }

  ngOnInit(): void {
    this.floorService.getAll().subscribe((res: any) => {
      debugger
      this.floors = res.Data;
    });
  }

}
