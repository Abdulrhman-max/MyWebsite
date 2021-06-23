import { CustomerGroupService } from './../../customer-group/customer-group.service';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {

  customers!:Customer[];
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    debugger;
    this.customerService.getAllCustomers().subscribe((res: any) => {
      this.customers = res;
      console.log(this.customers)
    });
  }

}
