import * as t from "./PayUserInput.style";
import Input from "../../../elements/Input";

const PayUserInput = () => {
  return (
    <t.DivArea>
      <t.Div>
        <Input color="#20252b" fontSize="14px" holderName="이름" />
      </t.Div>
      <t.Div>
        <Input color="#20252b" fontSize="14px" holderName="연락처" />
      </t.Div>
    </t.DivArea>
  );
};
export default PayUserInput;
