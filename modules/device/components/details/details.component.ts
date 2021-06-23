import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DeviceService } from '../../device.service';
import { DeviceResponse } from '../../models/device-response';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.styl'],
})
export class DetailsComponent implements OnInit {
  request!: DeviceResponse;
  id!: any;

  constructor(
    private deviceservice: DeviceService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.deviceservice.getById(this.id).subscribe(
      (res: any) => {
        this.request = res.Data;
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
