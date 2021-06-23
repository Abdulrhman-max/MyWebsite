import { Permission } from "./permission";

export class PermissionCategory {
  PermissionCategoryId!: number;
  CategoryName!: string;
  Permissions!: Permission[];
}
