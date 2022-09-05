import * as t from "./AddressForm.style";
import { theme } from "../../../style/theme";
import { Input } from "../../../elements/Input";
import { MainButton } from "../../../elements/Buttons";

const AddressForm = () => {
  return (
    <>
      <t.AdrDiv>
        <Input holderName="우편번호" width="20%" />
        <t.BtnDiv>
          <MainButton
            fontSize={theme.fs13}
            bgColor={theme.bg02}
            hBgColor={theme.bg02}
            color={theme.fc13}
            border={`2px solid ${theme.ls03}`}
            hBorder={`2px solid ${theme.ls03}`}
          >
            주소찾기
          </MainButton>
        </t.BtnDiv>
      </t.AdrDiv>
      <Input holderName="주소" marginTop="14px" />
      <Input holderName="상세주소" />
    </>
  );
};

export default AddressForm;
