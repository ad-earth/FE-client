export interface StyleType {
  drop?: boolean;
  colorCode?: string;
}

export type OptionListType = {
  id: number;
  color: string;
  size: string;
  extraCost: number;
  price: number;
  qty: number;
}[];
