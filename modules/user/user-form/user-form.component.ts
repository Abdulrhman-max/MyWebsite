import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { BaseFormComponent } from 'src/app/core/base/base-form.component';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent extends BaseFormComponent implements OnInit {
  @ViewChild('userForm') userForm!: NgForm;

  hide!: boolean;
  branches!: any[];
  roles!: any[];

  selectedPermissions: any[] = [
    {branch: '', role: ''}
  ];

  constructor(
    public readonly translate: TranslateService,
    private readonly route: ActivatedRoute,
    private readonly toastr: ToastrService,
    private readonly router: Router,
    private readonly userService: UserService
  ) {
    super();
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data);
      this.branches = data.branches.Data;
      this.roles = data.roles.Data;
    });
    console.log(this.route.url)
  }

  onAddRole(): void {
    this.selectedPermissions.push({ branch: '', role: '' });
  }

  onRemoveRole(index: number): void {
    console.log(index);
    this.selectedPermissions.splice(index, 1);
  }

  handelSubmittedUser(): void {
    this.loadingSubmitted$ = true;
    this.userForm.value.branchRoles = [];
    this.userService.user(this.userForm.value).subscribe(response => {
      console.log(response);
      this.toastr.success(this.translate.instant('SUCCESS'));
      this.loadingSubmitted$ = false;
      this.router.navigate(['../'], {relativeTo: this.route})
    },(error) => {
      this.loadingSubmitted$ = false;
    })
    console.log(this.selectedPermissions)
    console.log(this.userForm.value);
  }
}
