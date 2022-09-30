import * as t from "./NewPayInput.style";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { MainButton } from "../../../elements/Buttons";
import { Input } from "../../../elements/Input";
import { PayMethodSelect } from "../payMethod/PayMethod";

export const NewPayInput = () => {
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);

  /**
   * handler
   */
  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode((current) => !current);
    },

    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `);
      setOpenPostcode(false);
    },
  };

  return (
    <t.DivArea>
      <t.InputDivArea style={{ margin: "20px 0 20px 0" }}>
        <Input
          color="#20252b"
          fontSize="14px"
          width="49%"
          holderName="수령인"
        />
        <Input
          color="#20252b"
          fontSize="14px"
          width="49%"
          holderName="연락처"
        />
      </t.InputDivArea>

      <t.InputDivArea style={{ width: "50%" }}>
        <Input
          color="#20252b"
          fontSize="14px"
          width="48%"
          holderName="우편번호"
        ></Input>
        <MainButton
          width="48%"
          fontSize="14px"
          bgColor="#F2F2F2"
          color="#20252b"
          hBgColor="F2F2F2"
          onClick={handle.clickButton}
        >
          주소찾기
        </MainButton>
      </t.InputDivArea>
      <t.InputDivArea>
        <Input color="#20252b" fontSize="14px" width="100%" holderName="주소" />
      </t.InputDivArea>
      <t.InputDivArea style={{ marginBottom: "10px" }}>
        <Input
          color="#20252b"
          fontSize="14px"
          width="100%"
          holderName="상세주소"
        />
      </t.InputDivArea>
      <PayMethodSelect />
    </t.DivArea>
  );
};
