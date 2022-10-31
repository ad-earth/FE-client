export interface ReviewType {
  r_Content: string;
  r_Score: number | null;
}
export interface PropsType {
  handleClose: () => void;
  isOpen: boolean;
}
