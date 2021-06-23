import { CustomerGroupService } from './../../customer-group.service';
import { Component, OnInit } from '@angular/core';
import { CustomerGroupResponse } from '../../models/customer-group-response';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {


  customerGroups!:CustomerGroupResponse[];
  constructor(private customerGroupService:CustomerGroupService) { }

  ngOnInit(): void {
    this.customerGroupService.getAllCustomerGroup().subscribe((res: any) => {
      this.customerGroups = res;
    });
  }
  onsbmit(){

  }
}
