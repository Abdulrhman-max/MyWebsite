import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LookUpResponse } from 'src/app/modules/branch/models/look-up-response';
import { FloorService } from '../../floor.service';
import { FloorResponse } from '../../models/floor-response';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.styl']
})
export class EditComponent implements OnInit {
  request!:FloorResponse;
  branches!:LookUpResponse[];
  id!:any;
  constructor(
    private floorService:FloorService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.floorService.getAllBranchs().subscribe((res: any) => {
      this.branches = res.Data;
    });

    this.floorService.getById(this.id).subscribe((res: any) => {
      this.request = res.Data;
    });
  }
  onSubmit(){
    this.request.Tables=[];
    this.floorService.update(this.id, this.request).subscribe(
      (res: any) => {
        if (res.Success) {
          this.router.navigateByUrl('pages/floor');
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
  }}
