import { DeliveryZoneResponse } from './delivery-zone-response';
import { LookUpResponse } from './look-up-response';
import { ShiftResponse } from './shift-response';
import { WarehouseResponse } from './warehouse-response';

export class BranchResponse {
  Uid!: string;
  Id!: number;
  ArabicName!: string;
  ShiftDelayTimeOut!: String;
  LatinName!: string;
  Phone!: String;
  OpenFrom!: string;
  OpenTo!: string;
  PricePolicyId!: string;
  ForceInventoryCountAtEndOfDay!: boolean;
  AddShifts!: boolean;
  State!: number;
  Shifts: ShiftResponse[] = [];
  DeliveryZone: LookUpResponse[] = [];
  Warehouse: LookUpResponse[] = [];
}
