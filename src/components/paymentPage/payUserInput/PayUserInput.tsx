import * as t from "./PayUserInput.style";
import Input from "../../../elements/Input";
import { useCallback, useState } from "react";

const PayUserInput = () => {
  const [name, setName] = useState<string>("");
  const [nameMessage, setNameMessage] = useState<string>("");
  const [isName, setIsName] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const [phoneMessage, setPhoneMessage] = useState<string>("");
  const [isPhone, setIsPhone] = useState<boolean>(false);
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
      <t.Div>
        <Input
          value={name}
          color="#20252b"
          fontSize="14px"
          holderName="이름"
          onChange={onChangeName}
        />
        {name.length > 0 && (
          <span className={`message ${isName ? "success" : "error"}`}>
            {nameMessage}
          </span>
        )}
      </t.Div>
      <t.Div>
        <Input
          value={phone}
          color="#20252b"
          fontSize="14px"
          holderName="연락처"
          onChange={onChangePhone}
        />
        {phone.length > 0 && (
          <span className={`message ${isPhone ? "success" : "error"}`}>
            {phoneMessage}
          </span>
        )}
      </t.Div>
    </t.DivArea>
  );
};
export default PayUserInput;
