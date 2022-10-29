export interface StateType {
  id: number;
  r_Content: string;
  r_Score: number | null;
}
export interface PropsType {
  handleClose: () => void;
  isOpen: boolean;
}
