export interface PayListType {
  userInfo?: PayUserInfoType;
  addressList: PayAddressListType;
}

export interface PayUserInfoType {
  u_Address1: string;
  u_Address2: string;
  u_Address3: string;
  u_Name: string;
  u_Phone: string;
}

export interface PayAddressListType {
  map(
    arg0: (val: PayAddressListType, i: number) => JSX.Element
  ): import("react").ReactNode;
  d_Address1: string;
  d_Address2: string;
  d_Address3: string;
  d_Name: string;
  d_No: number;
  d_Phone: string;
  u_Idx: number;
  d_Memo: string;
}

export interface PayAddressData {
  address: {
    d_Address1: string;
    d_Address2: string;
    d_Address3: string;
    d_Name: string;
    d_No: number;
    d_Phone: string;
    d_Memo: string;
  };
}
