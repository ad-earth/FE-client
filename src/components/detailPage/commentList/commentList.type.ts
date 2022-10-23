export interface PropsType {
  setPage: (page: number) => void;
  reviewQty: number;
  reviewList: {
    createdAt: string;
    r_Content: string;
    r_No: number;
    r_Score: number;
    u_Id: string;
  }[];
}
