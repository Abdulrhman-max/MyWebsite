import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TableResponse } from '../../models/table-response';
import { TableService } from '../../table.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.styl']
})
export class CreateComponent implements OnInit {

  request:TableResponse=new TableResponse();
  floorId!:any;
  constructor(
    private tableService:TableService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.floorId = this.route.snapshot.paramMap.get('floorId');

  }

  onSubmit(){
    this.request.FloorId=this.floorId;
    this.tableService.create(this.request).subscribe(
      (res: any) => {
        if (res.Success) {
          this.router.navigateByUrl('pages/table/list/'+this.request.FloorId);
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
