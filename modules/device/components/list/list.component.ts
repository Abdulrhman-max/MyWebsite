import { Component, OnInit } from '@angular/core';
import { DeviceResponse } from './../../models/device-response';
import { DeviceService } from './../../device.service';
import { ToastrService } from 'ngx-toastr';
import { BaseListComponent } from 'src/app/core/base/baseList.component';
import { StateService } from 'src/app/core/services/state.service';
import { ModuleService } from 'src/app/modules/services/module.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl'],
})
export class ListComponent
 extends BaseListComponent<DeviceResponse>
 implements OnInit {
  devices!: DeviceResponse[];

  constructor(
    protected readonly stateService: StateService,
    private readonly moduleService: ModuleService,
    private readonly route: ActivatedRoute,
    public readonly translate: TranslateService,
    private readonly spinner: NgxSpinnerService,
    private deviceservice: DeviceService,
    private toastr: ToastrService
  ) {
    super(stateService);
  }

  ngOnInit(): void {
    this.onInit();

    this.route.data.subscribe((data) => {
debugger
      this.List = data.devices.Data;
      console.log('users ==> ', this.List);
      this.spinner.hide();
    });

  }

  Active(id: string): void {
    this.deviceservice.active(id).subscribe(
      (res: any) => {
        if (res.Success) {
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
