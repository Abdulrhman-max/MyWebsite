export class OptionGroupResponse {
  Id!: number;
  Uid!: string;
  ArabicName!: string;
  LatinName!: string;
  Options!: option[];
}

export class option {
  ArabicName!: number;
  LatinName!: number;
  Included!: boolean;
  Default!: boolean;
  DefaultQuantity!: number;
  PriceTagUid!: string;
  ProductId!: number;
}
