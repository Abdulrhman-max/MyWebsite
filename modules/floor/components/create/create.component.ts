import { LookUpResponse } from './../../../branch/models/look-up-response';
import { FloorResponse } from './../../models/floor-response';
import { Component, OnInit } from '@angular/core';
import { FloorService } from '../../floor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.styl']
})
export class CreateComponent implements OnInit {
  request!:FloorResponse;
  branches!:LookUpResponse[];
  constructor(
    private floorService:FloorService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.request=new FloorResponse();
    this.floorService.getAllBranchs().subscribe((res: any) => {
      this.branches = res.Data;

    });
  }
  onSubmit(){
    this.floorService.create(this.request).subscribe(
      (res: any) => {
        if (res.Success) {
          this.router.navigateByUrl('pages/floor');
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
  }}
