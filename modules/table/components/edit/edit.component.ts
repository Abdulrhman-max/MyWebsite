import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TableResponse } from '../../models/table-response';
import { TableService } from '../../table.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.styl']
})
export class EditComponent implements OnInit {
  request!:TableResponse;
  // floorId!:any;
  id!:any;
  constructor(
    private tableService:TableService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    // this.floorId = this.route.snapshot.paramMap.get('floorId');

    this.tableService.getById(this.id).subscribe((res: any) => {
      this.request = res.Data;
    });
  }

  onSubmit(){
    // this.request.FloorId=this.floorId;
    this.tableService.update(this.id,this.request).subscribe(
      (res: any) => {
        if (res.Success) {
          this.router.navigateByUrl('pages/table/list/'+this.request.FloorId);
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
      });
  }

}
