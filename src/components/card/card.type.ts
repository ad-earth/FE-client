export interface CardCompoType {
  pThumbnail: string[];
  aBrand: string;
  pName?: string;
  pCost: number;
  pSale: boolean;
  pDiscount: number;
  pOption?: Array<string | number>[];
  type?: "wish" | "ad";
  pNew: boolean;
  pBest: boolean;
  pSoldOut: boolean;
  pNo?: number;
  heartClick?(): void;
}
