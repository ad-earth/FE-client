import * as t from "./newPayInput.style";
import { useCallback, useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { MainButton } from "../../../elements/Buttons";
import Input from "../../../elements/Input";
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

export const NewPayInput = () => {
  const { name, pNumber, zipcode, address1, address2 } = useAppSelector(
    (state: RootState) => state.payUserSlice
  );
  const dispatch = useAppDispatch();

  const open = useDaumPostcodePopup();
  const [nameMessage, setNameMessage] = useState<string>("");
  const [isName, setIsName] = useState<boolean>(false);
  const [phoneMessage, setPhoneMessage] = useState<string>("");
  const [isPhone, setIsPhone] = useState<boolean>(false);

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
  // 이름
  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editName(e.target.value));
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage("2글자 이상 5글자 미만으로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다 :)");
      setIsName(true);
    }
  }, []);
  // 연락처
  const onChangePhone = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
      const emailCurrent = e.target.value;
      dispatch(editPNumber(emailCurrent));
      if (!regExp.test(emailCurrent)) {
        setPhoneMessage("올바른 전화번호를 입력하세요.");
        setIsPhone(false);
      } else {
        setPhoneMessage("올바른 전화번호 형식입니다 : )");
        setIsPhone(true);
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
            <span className={`message ${isPhone ? "success" : "error"}`}>
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
