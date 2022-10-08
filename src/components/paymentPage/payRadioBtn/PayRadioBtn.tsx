import * as t from "./PayRadioBtn.style";
import React, { useState } from "react";

import { Input } from "../../../elements/Input";
import { DropBtn } from "../payMethod/PayMethod.style";
import { useRef } from "react";

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

const PayRadioBtn = () => {
  const [select, setSelect] = useState("");
  const [open, setOpen] = useState(false);

  const numberRef = useRef<HTMLInputElement>(null);

  const checkHandler = (checked: boolean) => {
    if (checked) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    numberRef.current.value = "";
    if (value === "checked") {
      setSelect(value);
    } else {
      setSelect(value);
    }
  };

  return (
    <t.Wrapper>
      <t.Item>
        <t.RadioButton
          type="radio"
          name="payment"
          value="checked"
          checked={true}
          readOnly
        />
        <t.RadioButtonLabel />
        <t.Text>무통장입금</t.Text>
      </t.Item>
      <DropBtn style={{ fontSize: "14px" }} id="-select" defaultValue={"first"}>
        <option value="first">지구은행 12309812 (주)광고지구</option>
      </DropBtn>
      <Input
        fontSize="14px"
        holderName={"입금자명 (미입력시 주문자명)"}
        marginTop="10px"
        color="#20252b"
      />
      <t.LineDiv>
        <t.PayText>주문 후 24시간동안 미입금시 자동취소됩니다.</t.PayText>
      </t.LineDiv>

      <t.Item style={{ margin: "15px 0 20px" }}>
        <t.CheckBtn
          type="checkbox"
          value="checked"
          onChange={(e) => {
            checkHandler(e.target.checked);
          }}
        />
        <t.Text>현금영수증 신청</t.Text>
      </t.Item>
      {open ? (
        <>
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
          {select === "paycheck2" ? (
            <Input
              fontSize="14px"
              holderName={"사업자번호 입력"}
              marginTop="10px"
              color="#20252b"
              ref={numberRef}
            />
          ) : (
            <Input
              fontSize="14px"
              holderName={"휴대전화번호 입력"}
              marginTop="10px"
              color="#20252b"
              ref={numberRef}
            />
          )}
        </>
      ) : null}
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
          onChange={props.onChange}
        />
        <t.RadioButtonLabel top={props.top} />
      </t.Item>
    </>
  );
};

export default PayRadioBtn;
