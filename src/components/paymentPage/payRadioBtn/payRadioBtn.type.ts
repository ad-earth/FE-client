export interface RadiobtnType {
  value?: number | string;
  checked?: boolean;
  type?: string;
  select?: boolean;
  top?: string;
  bgColor?: string;
  number?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
