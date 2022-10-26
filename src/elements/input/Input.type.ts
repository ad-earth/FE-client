export interface InputType {
  outline?: string;
  fontSize?: string;
  width?: string;
  marginTop?: string;
  padding?: string;
  holderName?: string;
  color?: string;
  bgColor?: string;
  fBorder?: string;
  value?: string;
  type?: string;
  ref?: any;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
