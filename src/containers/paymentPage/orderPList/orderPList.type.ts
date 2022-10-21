import { PayUserInfoType } from "../../../components/paymentPage/payUserInfo/payUserInfo.type";

export interface PayListType {
  BtnonClick?: () => void;
  userInfo?: PayUserInfoType;
  addressList: PayAddressData[];
}

export interface PayDataType {
  address: PayAddressData;
  products: PayProductsData[];
  o_Price: number;
}

export interface PayAddressData {
  d_Address1: string;
  d_Address2: string;
  d_Address3: string;
  d_Name: string;
  d_No?: number;
  d_Phone: string;
  d_Memo?: string;
}
export interface PayProductsData {
  kNo: number;
  pNo: number;
  pThumbnail: string;
  pCategory: string;
  aBrand: string;
  pName: string;
  pCost: number;
  pDiscount: number;
  pSale: boolean;
  pOption: [string | null, string | null, string | null, number, number][];
  pPrice: number;
  pCnt: number;
}
