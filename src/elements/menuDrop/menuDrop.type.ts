export interface MenuDropType {
  width?: string;
  top?: string;
  left?: string;
  radius?: string;
  fcColor?: string;
  bgColor?: string;
  cateData: {
    id: number;
    cate: string;
    path: string;
  }[];
  isDropped?: boolean;
}
