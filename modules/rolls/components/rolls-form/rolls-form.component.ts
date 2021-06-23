import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PermissionCategory } from '../../models/permission-category';
import { RollResponse } from '../../models/roll-response';
import { RolleService } from '../../rolle.service';

@Component({
  selector: 'app-rolls-form',
  templateUrl: './rolls-form.component.html',
  styleUrls: ['./rolls-form.component.scss']
})
export class RollsFormComponent implements OnInit {
  public checks = false;
  public permissionsID!: number[];
  public unCheckedPermissionsID!: number[];
  public permissionList!: PermissionCategory[];
  // public roll!: RollRequest;
  public roleResponse!: RollResponse;
  id!: string;
  isButtonVisible = true;
  constructor(
    public service: RolleService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.roleResponse = new RollResponse();
    this.permissionsID = [];
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id !=null) {
      this.isButtonVisible = false;
      this.service.getRollByID(this.id).subscribe(
        (res) => {
          this.roleResponse = res.Data;
          this.permissionsID = res.Data.SelectedPermissions;
        },
        (err) => {}
      );
    }

    this.service.getCategoryPermissons().subscribe(
      (res) => {
        this.permissionList = res.Data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  selectAll(e: any) {
    if (e.target.checked == true) {
      this.checks = true;
      this.permissionsID = this.permissionList
        .map((x) => x.Permissions.map((el) => el.PermissionId))
        .flatMap((x) => x);
      // this.roll.Permissions = this.permissionsID;
      this.roleResponse.SelectedPermissions = this.permissionsID;
      // let m = x.map((x: any) => x.Permissions['PermissionCategoryId']);
    } else {
      this.checks = false;
      this.permissionsID = [];
      this.roleResponse.SelectedPermissions = [];
    }
  }
  saveCheck(id: number, e: any) {
    debugger
    console.log(this.permissionsID.indexOf(id))
    if (e.target.checked == true && this.permissionsID.indexOf(id) == -1) {
      this.permissionsID.push(id);
      this.roleResponse.SelectedPermissions = this.permissionsID;
    } else {
      const index = this.permissionsID.indexOf(id);
      if (index > -1) {
        this.permissionsID.splice(index, 1);
      }
      this.roleResponse.SelectedPermissions = this.permissionsID.filter(
        (el) => el != id
      );
    }
  }
  Submit() {
    if (this.id==null) {
      this.service.addRoll(this.roleResponse).subscribe(
        (res) => {
          console.log(res);
          this.router.navigateByUrl('pages/Rolles');
          this.toastr.success('Successfully Added');
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      debugger
      console.log(this.roleResponse)
      this.roleResponse.SelectedPermissions = this.permissionsID;
      this.service.updateRoll(this.id, this.roleResponse).subscribe(
        (res) => {
          console.log(this.roleResponse);
          this.router.navigateByUrl('pages/Rolles');
          this.toastr.success('Successfully Edited');
        },
        (err) => {}
      );
    }
  }

  ischecked(permitionId: number): boolean {
    return this.roleResponse.SelectedPermissions.find((x) => x == permitionId) == undefined ? false  : true;
  }

}
