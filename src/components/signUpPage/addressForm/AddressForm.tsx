import * as t from "./AddressForm.style";
import { theme } from "../../../style/theme";
import { Dispatch, SetStateAction } from "react";
import Input from "../../../elements/input/Input";
import { MainButton } from "../../../elements/buttons/Buttons";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { useEffect } from "react";
import { useAppSelector } from "../../../redux/store";

interface PropsType {
  zipcode: string;
  address: string;
  extraAddress: string;
  setZipcode: Dispatch<SetStateAction<string>>;
  setAddress: Dispatch<SetStateAction<string>>;
  setExtraAddress: Dispatch<SetStateAction<string>>;
}

const AddressForm = ({
  zipcode,
  address,
  extraAddress,
  setZipcode,
  setAddress,
  setExtraAddress,
}: PropsType) => {
  const open = useDaumPostcodePopup();

  const address1 = useAppSelector(
    (state) => state.userSlice.userData.u_Address1
  );
  const address2 = useAppSelector(
    (state) => state.userSlice.userData.u_Address2
  );
  const address3 = useAppSelector(
    (state) => state.userSlice.userData.u_Address3
  );

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";
    let code = data.zonecode;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setZipcode(code);
    setAddress(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const changeHandler = (value: string) => {
    setZipcode(value);
    setAddress(value);
  };

  const extraHandler = (value: string) => {
    setExtraAddress(value);
  };

  useEffect(() => {
    if (address1 && address2 && address3) {
      setZipcode(address1);
      setAddress(address2);
      setExtraAddress(address3);
    }
  }, [address1, address2, address3]);

  return (
    <>
      <t.AdrDiv>
        <Input
          value={zipcode}
          holderName="우편번호"
          width="30%"
          color={theme.fc14}
          onChange={(e) => changeHandler(e.target.value)}
        />
        <t.BtnDiv>
          <MainButton
            fontSize={theme.fs13}
            bgColor={theme.bg02}
            hBgColor={theme.bg02}
            color={theme.fc13}
            border={`2px solid ${theme.ls03}`}
            hBorder={`2px solid ${theme.ls03}`}
            onClick={handleClick}
          >
            주소찾기
          </MainButton>
        </t.BtnDiv>
      </t.AdrDiv>
      <Input
        value={address}
        holderName="주소"
        marginTop="14px"
        color={theme.fc14}
        onChange={(e) => changeHandler(e.target.value)}
      />
      <Input
        value={extraAddress}
        holderName="상세주소"
        color={theme.fc14}
        onChange={(e) => extraHandler(e.target.value)}
      />
    </>
  );
};

export default AddressForm;
