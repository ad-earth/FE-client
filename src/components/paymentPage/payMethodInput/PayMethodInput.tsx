import * as t from "./payMethodInput.style";
import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { PayListType } from "../../../containers/paymentPage/orderPList/orderPList.type";
import useDelPay from "./usePayMethodInput";
import { RadioBtn } from "../payRadioBtn/PayRadioBtn";
import { NewPayInput } from "../newPayInput/NewPayInput";

import { RadiobtnType } from "../payRadioBtn/payRadioBtn.type";
import { PayMethodInfo, PayMethodSelect } from "../payMethod/PayMethod";
import { editDNo } from "../../../redux/reducer/payUserSlice";
import { editTab } from "../../../redux/reducer/payCheckSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

const PayMethodInput = (props: RadiobtnType & PayListType) => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const tab = useAppSelector((state) => state.payCheckSlice.tab);
  const [select, setSelect] = useState<string>("");

  //--라디오 버튼 선택
  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setSelect(value);
      dispatch(editDNo(value));
    } else {
      setSelect(value);
      dispatch(editDNo(value));
    }
  };
  //--배송지 목록 삭제
  const { mutate } = useDelPay();
  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    const del = e.currentTarget.value;
    mutate(del, {
      onSuccess: () => {
        alert("삭제 되었습니다");
        queryClient.invalidateQueries("getPay");
      },
    });
  };

  return (
    <t.DivArea>
      <t.TbtnDiv>
        <t.Tbtn
          onClick={() => {
            dispatch(editTab(false));
            // setTab(false);
            dispatch(editDNo("0"));
          }}
          bgColor="#bebebe"
        >
          배송지 선택
        </t.Tbtn>
        <t.Tbtn
          onClick={() => {
            // setTab(true);
            dispatch(editTab(true));
            dispatch(editDNo("0"));
          }}
        >
          신규입력
        </t.Tbtn>
      </t.TbtnDiv>
      <t.ContentsDiv>
        {tab ? (
          <>
            <NewPayInput />
          </>
        ) : (
          <>
            <t.DivArea style={{ marginTop: "10px" }}>
              {props.addressList.map((val, i: number) => {
                return (
                  <t.Div key={val.d_No}>
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

              <PayMethodSelect />
            </t.DivArea>
          </>
        )}
      </t.ContentsDiv>
    </t.DivArea>
  );
};

export default PayMethodInput;
