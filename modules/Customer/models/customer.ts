import { CustomerGroupResponse } from "./customer-group-response";

export class Customer {
    Uid!: string;
    Code!: string;
    ArabicName!: string;
    LatinName!: string;
    Status!: Status;
    Phone!: string;
    CountryCode!: string;
    Gender!: Gender;
    GenderName!: string;
    Email!: string;
    Address!: string;
    Note!: string;
    CustomerGroupId!: string;
    CustomerGroup!: CustomerGroupResponse;
  }

  export enum Gender{
    Male = 0,
    Female = 1
  }

  export enum Status{
        Inactive = 0,
        Active = 1
    }
