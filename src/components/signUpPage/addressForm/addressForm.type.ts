import { Dispatch, SetStateAction } from "react";

export interface PropsType {
  zipcode: string;
  address: string;
  extraAddress: string;
  setZipcode: Dispatch<SetStateAction<string>>;
  setAddress: Dispatch<SetStateAction<string>>;
  setExtraAddress: Dispatch<SetStateAction<string>>;
}
