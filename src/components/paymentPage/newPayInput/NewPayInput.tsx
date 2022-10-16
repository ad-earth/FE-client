import * as t from "./newPayInput.style";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { MainButton } from "../../../elements/Buttons";
import Input from "../../../elements/Input";
import { MemoType, PayMethodSelect } from "../payMethod/PayMethod";
import { useDaumPostcodePopup } from "react-daum-postcode";
export interface AddressType {
  dNo?: string;
  name: string;
  pNumber: string;
  zipcode: string;
  address1: string;
  address2: string;
  setDNo: Dispatch<SetStateAction<string>>;
  setName: Dispatch<SetStateAction<string>>;
  setPNumber: Dispatch<SetStateAction<string>>;
  setZipcode: Dispatch<SetStateAction<string>>;
  setAddress1: Dispatch<SetStateAction<string>>;
  setAddress2: Dispatch<SetStateAction<string>>;
}

export const NewPayInput = (props: AddressType & MemoType) => {
  const open = useDaumPostcodePopup();
  const [name, setName] = useState<string>("");
  const [nameMessage, setNameMessage] = useState<string>("");
  const [isName, setIsName] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
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

    props.setZipcode(code);
    props.setAddress1(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
    props.setDNo("0");
  };

  const changeHandler = (value: string) => {
    props.setZipcode(value);
    props.setAddress1(value);
    console.log(props.setAddress1);
  };
  // 이름
  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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
      setPhone(emailCurrent);
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
            value={phone}
            color="#20252b"
            fontSize="14px"
            width="100%"
            holderName="연락처"
            onChange={onChangePhone}
          />
          {phone.length > 0 && (
            <span className={`message ${isPhone ? "success" : "error"}`}>
              {phoneMessage}
            </span>
          )}
        </t.CheckDiv>
      </t.CheckInputDivArea>
      <t.InputDivArea style={{ width: "50%" }}>
        <t.CheckDiv style={{ marginTop: "2.5px" }}>
          <Input
            value={props.zipcode}
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
          value={props.address1}
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
          value={props.address2}
          color="#20252b"
          fontSize="14px"
          width="100%"
          holderName="상세주소"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.setAddress2(e.target.value)
          }
        />
      </t.InputDivArea>
      <PayMethodSelect memo={props.memo} MemoChange={props.MemoChange} />
    </t.DivArea>
  );
};
