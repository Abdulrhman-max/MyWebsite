import { Component, OnInit } from '@angular/core';
import { OptionGroupResponse } from '../../models/option-group-response.model';
import { OptiongroupService } from './../../optiongroup.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl'],
})
export class ListComponent implements OnInit {
  groups!: OptionGroupResponse[];

  constructor(private optionGroupservice: OptiongroupService) {}

  ngOnInit(): void {
    this.optionGroupservice.getAll().subscribe((res: any) => {
      this.groups = res.Data;
    });
  }
}
