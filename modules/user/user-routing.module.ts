import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user.component';
import { BranchsResolver } from '../../core/resolvers/branchs.resolver';
import { UsersResolver } from '../../core/resolvers/user.resolver';
import { RolesResolver } from '../../core/resolvers/roles.resolver';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: UserListComponent,
        resolve: { users: UsersResolver },
      },
      {
        path: 'new',
        component: UserFormComponent,
        resolve: { branches: BranchsResolver, roles: RolesResolver },
      },
      { path: ':id', component: UserFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
