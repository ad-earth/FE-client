import * as t from "./NewPayInput.style";
import { Dispatch, SetStateAction } from "react";
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

  return (
    <t.DivArea>
      <t.InputDivArea style={{ margin: "20px 0 20px 0" }}>
        <Input
          value={props.name}
          color="#20252b"
          fontSize="14px"
          width="49%"
          holderName="수령인"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.setName(e.target.value)
          }
        />
        <Input
          value={props.pNumber}
          color="#20252b"
          fontSize="14px"
          width="49%"
          holderName="연락처"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.setPNumber(e.target.value)
          }
        />
      </t.InputDivArea>
      <t.InputDivArea style={{ width: "50%" }}>
        <Input
          value={props.zipcode}
          color="#20252b"
          fontSize="14px"
          width="48%"
          holderName="우편번호"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeHandler(e.target.value)
          }
        ></Input>
        <MainButton
          width="48%"
          fontSize="14px"
          bgColor="#F2F2F2"
          color="#20252b"
          hBgColor="F2F2F2"
          onClick={handleClick}
        >
          주소찾기
        </MainButton>
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
