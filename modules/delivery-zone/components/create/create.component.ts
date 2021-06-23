import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DeliveryZoneService } from '../../delivery-zone.service';
import { DeliveryZoneResponse } from '../../models/delivery-zone-response';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.styl']
})
export class CreateComponent implements OnInit {
  request!:DeliveryZoneResponse
  constructor(
     private deliveryZoneService: DeliveryZoneService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
    ) {
    this.request=new DeliveryZoneResponse()
  }

  ngOnInit(): void {

  }


  onSubmit(){
    this.deliveryZoneService.create(this.request).subscribe(
      (res: any) => {
        if (res.Success) {
          this.router.navigateByUrl('pages/deliveryzone');
          this.toastr.success('Add Success');
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
      });
  }

}
