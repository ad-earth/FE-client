import * as t from "./Input.style";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { InputType } from "./Input.type";

const Input: ForwardRefRenderFunction<HTMLInputElement, InputType> = (
  { ...props },
  ref
) => {
  return (
    <t.MyInput
      type={props.type}
      placeholder={props.holderName}
      ref={ref}
      defaultValue={props.defaultValue}
      {...props}
    ></t.MyInput>
  );
};

export default forwardRef(Input);
