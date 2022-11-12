import { Dispatch, SetStateAction } from "react";

export interface PropsType {
  imgUrl: string;
  setImgUrl: Dispatch<SetStateAction<string>>;
}
export interface UploadImg {
  file: File;
  fileName: string;
  thumbnail: string;
  type: string;
}
