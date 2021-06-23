import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DeliveryZoneService } from '../../delivery-zone.service';
import { DeliveryZoneResponse } from '../../models/delivery-zone-response';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.styl']
})
export class EditComponent implements OnInit {

  request!:DeliveryZoneResponse;
  id:any;
  constructor(
    private deliveryZoneService: DeliveryZoneService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.deliveryZoneService.getById(this.id).subscribe((res: any) => {
      if (res.Success) {
        this.request = res.Data;
      }
    });
  }

  onSubmit(){
    this.deliveryZoneService.update(this.id, this.request).subscribe(
      (res: any) => {
        if (res.Success) {
          this.router.navigateByUrl('pages/deliveryzone');
          this.toastr.success('Update Success');
        } else {
          this.toastr.error(res.error.Errors[0]);
        }
      },
      (err: any) => {
        if (err.error.Errors[0] != null) {
          this.toastr.error(err.error.Errors[0]);
        } else {
          this.toastr.error('server-down');
        }
      }
    );
  }

}
