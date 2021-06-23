import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableResponse } from '../../models/table-response';
import { TableService } from '../../table.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {
  tables!:TableResponse[];
  id!:any;
  constructor(private tableService:TableService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.tableService.getAllByFloorId(this.id).subscribe((res: any) => {
      this.tables = res.Data;
    });
  }

}
