export class PricePolicyRequist {
  Uid!: string;
  Code!: string;
  ArabicName!: string;
  LatinName!: string;
  Status!: boolean;
  Level!: number;
  Type!: number;
  LevelName!: string;
  TypeName!: string;
  Details!: string[];
}
export class LookUpResponse {
  Id!: number;
  LatinName!: string;
  Uid!: string;
}
