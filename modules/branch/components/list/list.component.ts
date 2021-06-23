import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BaseListComponent } from 'src/app/core/base/baseList.component';
import { StateService } from 'src/app/core/services/state.service';
import { BranchService } from '../../branch.service';
import { BranchResponse } from '../../models/branch-response';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl'],
})
export class ListComponent
   extends BaseListComponent<BranchResponse> implements OnInit {
  List!: BranchResponse[];

  constructor(
    private branchService: BranchService,
    private toastr: ToastrService,
    protected readonly stateService: StateService,

    ) {
    super(stateService)
    }

  ngOnInit(): void {
    this.branchService.getAll().subscribe((res: any) => {
      this.List = res.Data;
    });
  }

  Active(id: string): void {
    this.branchService.active(id).subscribe(
      (res: any) => {
        if (res.Success) {
          this.toastr.success('Update Success');
        } else {
          this.toastr.error(res.error.Errors[0]);
        }
      },
      (err: any) => {
        debugger
        if (err.error.Errors[0] != null) {
          this.toastr.error(err.error.Errors[0]);
        } else {
          this.toastr.error('server-down');
        }
      }
    );
  }
}
