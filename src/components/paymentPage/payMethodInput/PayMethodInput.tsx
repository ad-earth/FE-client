import * as t from "./payMethodInput.style";
import React, { useState } from "react";

import {
  MemoType,
  PayMethodInfo,
  PayMethodSelect,
} from "../payMethod/PayMethod";
import { NewPayInput } from "../newPayInput/NewPayInput";
import { RadioBtn } from "../payRadioBtn/PayRadioBtn";
import {
  PayAddressListType,
  PayListType,
} from "../../../containers/paymentPage/orderPList/orderPList.type";
import { RadiobtnType } from "../payRadioBtn/PayRadioBtn";
import { AddressType } from "../newPayInput/NewPayInput";
import useDelPay from "./usePayMethodInput";

const PayMethodInput = (
  props: RadiobtnType & AddressType & MemoType & PayListType
) => {
  const [tab, setTab] = useState(false);
  const [select, setSelect] = useState<string>("");
  const [param, setParam] = useState<string>("");

  //라디오 버튼 선택
  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setSelect(value);
      props.setDNo(value);
    } else {
      setSelect(value);
      props.setDNo(value);
    }
  };
  //배송지 목록 삭제
  const { mutate, isSuccess } = useDelPay(Number(param));
  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    mutate();
    if (isSuccess) {
      alert("삭제되었습니다");
    }
    setParam(e.currentTarget.value);
  };

  return (
    <t.DivArea>
      <t.TbtnDiv>
        <t.Tbtn onClick={() => setTab(false)} bgColor="#bebebe">
          배송지 선택
        </t.Tbtn>
        <t.Tbtn onClick={() => setTab(true)}>신규입력</t.Tbtn>
      </t.TbtnDiv>
      <t.ContentsDiv>
        {tab ? (
          <>
            <NewPayInput
              setDNo={props.setDNo}
              name={props.name}
              setName={props.setName}
              pNumber={props.pNumber}
              setPNumber={props.setPNumber}
              zipcode={props.zipcode}
              setZipcode={props.setZipcode}
              address1={props.address1}
              setAddress1={props.setAddress1}
              address2={props.address2}
              setAddress2={props.setAddress2}
              memo={props.memo}
              MemoChange={props.MemoChange}
            />
          </>
        ) : (
          <>
            <t.DivArea style={{ marginTop: "10px" }}>
              {props.addressList.map((val: PayAddressListType, i: number) => {
                return (
                  <t.Div>
                    <RadioBtn
                      type="radio"
                      value={val.d_No + ""}
                      checked={select === val.d_No + ""}
                      select={props.checked}
                      onChange={(e) => {
                        handleSelectChange(e);
                      }}
                      top="5%"
                    />

                    <PayMethodInfo
                      uAddress1={val.d_Address1}
                      uAddress2={val.d_Address1}
                      uAddress3={val.d_Address3}
                      uName={val.d_Name}
                      uPhone={val.d_Phone}
                    />
                    <t.Btn
                      value={val.d_No + ""}
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    >
                      삭제
                    </t.Btn>
                  </t.Div>
                );
              })}

              <PayMethodSelect
                memo={props.memo}
                MemoChange={props.MemoChange}
              />
            </t.DivArea>
          </>
        )}
      </t.ContentsDiv>
    </t.DivArea>
  );
};

export default PayMethodInput;
