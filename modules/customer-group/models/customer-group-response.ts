import { Status } from "../../Customer/models/customer";

export class CustomerGroupResponse {
  Uid!: string;
  Code!: string;
  ArabicName!: string;
  LatinName!: string;
  Status!: Status;
}
