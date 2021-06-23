import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseListComponent } from 'src/app/core/base/baseList.component';
import { User } from 'src/app/core/models/model';
import { StateService } from 'src/app/core/services/state.service';
import { ModuleService } from '../../services/module.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent
  extends BaseListComponent<User>
  implements OnInit
{
  selecedUsers: User[] = [];

  constructor(
    protected readonly stateService: StateService,
    private readonly moduleService: ModuleService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    public readonly translate: TranslateService,
    private readonly spinner: NgxSpinnerService
  ) {
    super(stateService);
  }

  ngOnInit(): void {
    this.onInit();
    this.route.data.subscribe((data) => {
      this.List = data.users.Data;
      console.log('users ==> ', this.List);
      this.spinner.hide();
    });
  }

  editLis(list: User): void {
    console.log(list);
  }

  deleteList(list: User): void {
    console.log(list);
    this.moduleService.showDeleteModel$.next(true);
    this.moduleService.deleteModelData.next([list]);
  }

  deleteSelectedUsers(): void {
    this.moduleService.showDeleteModel$.next(true);
    this.moduleService.deleteModelData.next(this.selecedUsers);
  }

  newUser(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
