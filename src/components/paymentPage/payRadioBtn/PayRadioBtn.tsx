import * as t from "./PayRadioBtn.style";
import React, { useState } from "react";

import Input from "../../../elements/Input";
import { DropBtn } from "../payMethod/PayMethod.style";

export interface RadiobtnType {
  value?: string;
  checked?: boolean;
  type?: string;
  select?: boolean;
  top?: string;
  bgColor?: string;
}

const PayRadioBtn = () => {
  const [select, setSelect] = useState("optionA");

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelect(value);
  };
  return (
    <t.Wrapper>
      <t.Item>
        <t.RadioButton
          type="radio"
          name="payment"
          value="bankbook"
          checked={select === "bankbook"}
          onChange={(e) => handleSelectChange(e)}
        />
        <t.RadioButtonLabel />
        <t.Text>무통장입금</t.Text>
      </t.Item>
      <DropBtn
        style={{ fontSize: "14px" }}
        name="payment"
        id="-select"
        defaultValue={"first"}
      >
        <option value="first">지구은행 12309812 (주)광고지구</option>
      </DropBtn>
      <Input
        fontSize="14px"
        holderName={"입금자명 (미입력시 주문자명)"}
        marginTop="10px"
      />
      <t.LineDiv>
        <t.PayText>주문 후 24시간동안 미입금시 자동취소됩니다.</t.PayText>
      </t.LineDiv>

      <t.Item style={{ margin: "15px 0 20px" }}>
        <t.CheckBtn type="checkbox" />
        <t.Text>현금영수증 신청</t.Text>
      </t.Item>
      <div style={{ display: "flex" }}>
        <t.Item>
          <t.RadioButton
            type="radio"
            name="paycheck"
            value="paycheck1"
            checked={select === "paycheck1"}
            onChange={(e) => handleSelectChange(e)}
          />
          <t.RadioButtonLabel />
          <t.Text>소득공제용</t.Text>
        </t.Item>
        <t.Item style={{ marginLeft: "30px" }}>
          <t.RadioButton
            type="radio"
            name="paycheck"
            value="paycheck2"
            checked={select === "paycheck2"}
            onChange={(e) => handleSelectChange(e)}
          />
          <t.RadioButtonLabel />
          <t.Text>지출증빙용</t.Text>
        </t.Item>
      </div>
      <Input
        fontSize="14px"
        holderName={"휴대전화번호 입력"}
        marginTop="10px"
      />
    </t.Wrapper>
  );
};

export const RadioBtn = (props: RadiobtnType) => {
  return (
    <>
      <t.Item>
        <t.RadioButton
          type={props.type}
          value={props.value}
          checked={props.checked}
        />
        <t.RadioButtonLabel top={props.top} />
      </t.Item>
    </>
  );
};

export default PayRadioBtn;
