export type PropsType = {
  option?: { id: number; color: string; size: string; price: number }[];
  haveOptions: boolean;
  price: number;
  like: boolean;
  likeCnt: number;
};
