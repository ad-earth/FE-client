import * as t from "./newPayInput.style";
import { useCallback, useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { MainButton } from "../../../elements/buttons/Buttons";
import Input from "../../../elements/input/Input";
import { PayMethodSelect } from "../payMethod/PayMethod";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { RootState } from "../../../redux/store";
import {
  editDNo,
  editName,
  editPNumber,
  editZipcode,
  editAddress1,
  editAddress2,
} from "../../../redux/reducer/payUserSlice";
import {
  editIsName,
  editisPNumber,
} from "../../../redux/reducer/payCheckSlice";

export const NewPayInput = () => {
  const { name, pNumber, zipcode, address1, address2 } = useAppSelector(
    (state: RootState) => state.payUserSlice
  );
  const { isName, isPNumber } = useAppSelector(
    (state: RootState) => state.payCheckSlice
  );
  const dispatch = useAppDispatch();
  const open = useDaumPostcodePopup();
  const [nameMessage, setNameMessage] = useState<string>("");
  const [phoneMessage, setPhoneMessage] = useState<string>("");

  //-- 주소찾기
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let address2 = "";
    let code = data.zonecode;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        address2 += data.bname;
      }
      if (data.buildingName !== "") {
        address2 +=
          address2 !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += address2 !== "" ? ` (${address2})` : "";
    }
    dispatch(editZipcode(code));
    dispatch(editAddress1(fullAddress));
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
    dispatch(editDNo("0"));
  };

  const changeHandler = (value: string) => {
    dispatch(editZipcode(value));
    dispatch(editAddress1(value));
  };
  //-- 이름
  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editName(e.target.value));
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage("2글자 이상 5글자 미만으로 입력해주세요.");
      dispatch(editIsName(false));
    } else {
      setNameMessage("올바른 이름 형식입니다 :)");
      dispatch(editIsName(true));
    }
  }, []);

  //-- 연락처 유효성 체크
  const onChangePhone = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const regExp = /^\d{2,3}-\d{3,4}-\d{4}$/;
      const currentNum = e.target.value;
      dispatch(editPNumber(currentNum));
      if (!regExp.test(currentNum)) {
        setPhoneMessage("하이픈(-)을 포함한 형태로 입력해주세요.");
        dispatch(editisPNumber(false));
      } else {
        setPhoneMessage("올바른 전화번호 형식입니다 : )");
        dispatch(editisPNumber(true));
      }
    },
    []
  );

  return (
    <t.DivArea>
      <t.CheckInputDivArea style={{ margin: "25px 0 20px 0" }}>
        <t.CheckDiv>
          <Input
            value={name}
            color="#20252b"
            fontSize="14px"
            width="100%"
            holderName="수령인"
            onChange={onChangeName}
          />

          {name.length > 0 && (
            <span className={`message ${isName ? "success" : "error"}`}>
              {nameMessage}
            </span>
          )}
        </t.CheckDiv>
        <t.CheckDiv>
          <Input
            value={pNumber}
            color="#20252b"
            fontSize="14px"
            width="100%"
            holderName="연락처"
            onChange={onChangePhone}
          />
          {pNumber.length > 0 && (
            <span className={`message ${isPNumber ? "success" : "error"}`}>
              {phoneMessage}
            </span>
          )}
        </t.CheckDiv>
      </t.CheckInputDivArea>
      <t.InputDivArea style={{ width: "50%" }}>
        <t.CheckDiv style={{ marginTop: "2.5px" }}>
          <Input
            value={zipcode}
            color="#20252b"
            fontSize="14px"
            width="100%"
            holderName="우편번호"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeHandler(e.target.value)
            }
          ></Input>
        </t.CheckDiv>
        <t.CheckDiv>
          <MainButton
            width="100%"
            fontSize="14px"
            bgColor="#F2F2F2"
            color="#20252b"
            hBgColor="F2F2F2"
            onClick={handleClick}
          >
            주소찾기
          </MainButton>
        </t.CheckDiv>
      </t.InputDivArea>
      <t.InputDivArea>
        <Input
          value={address1}
          color="#20252b"
          fontSize="14px"
          width="100%"
          holderName="주소"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeHandler(e.target.value)
          }
        />
      </t.InputDivArea>
      <t.InputDivArea style={{ marginBottom: "10px" }}>
        <Input
          value={address2}
          color="#20252b"
          fontSize="14px"
          width="100%"
          holderName="상세주소"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(editAddress2(e.target.value))
          }
        />
      </t.InputDivArea>
      <PayMethodSelect />
    </t.DivArea>
  );
};
