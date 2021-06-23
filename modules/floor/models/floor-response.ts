import { TableResponse } from "../../table/models/table-response";

export class FloorResponse {
    Id!:number;
    Name!:string;
    ShowInPOS!:boolean;
    BranchId!:number;
    Tables:TableResponse[]=[]
}
