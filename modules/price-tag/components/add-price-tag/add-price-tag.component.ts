import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PriceTag } from '../../models/price-tag';
import { PriceTagService } from '../../price-tag.service';

@Component({
  selector: 'app-add-price-tag',
  templateUrl: './add-price-tag.component.html',
  styleUrls: ['./add-price-tag.component.styl']
})
export class AddPriceTagComponent implements OnInit {

  constructor(
    private priceTagService: PriceTagService,
    private route: ActivatedRoute,
    private router: Router,
    private toaster: ToastrService
  ) { }

  request!: PriceTag;
  id: any;
  Title!: string;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.Title = (this.id == '0') ? "Create New Price Tag" : "Edit Price Tag";
    this.request = new PriceTag();
    if (this.id != 0) {
      this.priceTagService.getById(this.id).subscribe((res: any) => {
        this.request = res.Data;
      });
    }
  }

  onSubmit() {
    if(this.id==0){
    this.priceTagService.create(this.request).subscribe(
      (res: any) => {
        if (res.Success) {
          this.router.navigateByUrl('pages/priceTag');
          this.toaster.success('Add Success');
        } else {
          this.toaster.error(res.error.Errors[0]);
        }
      },
      (err: any) => {
        if (err.error.Errors[0] != null) {
          this.toaster.error(err.error.Errors[0]);
        } else {
          this.toaster.error('server-down');
        }
      });
    }
    else {
      this.priceTagService.Update(this.request).subscribe(
        (res: any) => {
          if (res.Success) {
            this.router.navigateByUrl('pages/priceTag');
            this.toaster.success('Add Success');
          } else {
            this.toaster.error(res.error.Errors[0]);
          }
        },
        (err: any) => {
          if (err.error.Errors[0] != null) {
            this.toaster.error(err.error.Errors[0]);
          } else {
            this.toaster.error('server-down');
          }
        });
    }
  }

}
