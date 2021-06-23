export class RollResponse {
  RoleId!: string;
  RoleName!: string;
  Category: PermissionCategory[] = [];
  SelectedPermissions:number[]=[];
}

export class PermissionCategory {
  PermissionCategoryId!: number;
  CategoryName!:string;
  Permissions!:PermissionsResponse[];
}

export class PermissionsResponse {
  PermissionId!:number;
  PermissionName!:string;
}
