export interface User {
  Email: string;
  UserName: string;
  Id: string;
  PhoneNumber: string;
  branchRoles?: [];
}

export interface LOGIN_FROM {
  email: string;
  password: string;
}

export interface Branch {}
