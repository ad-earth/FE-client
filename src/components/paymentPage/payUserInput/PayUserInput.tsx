import * as t from "./payUserInput.style";
import Input from "../../../elements/input/Input";
import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { editName, editPNumber } from "../../../redux/reducer/payUserSlice";
import { RootState } from "../../../redux/store";

const PayUserInput = () => {
  const { name, pNumber } = useAppSelector(
    (state: RootState) => state.payUserSlice
  );
  const dispatch = useAppDispatch();

  const [nameMessage, setNameMessage] = useState<string>("");
  const [isName, setIsName] = useState<boolean>(false);
  const [phoneMessage, setPhoneMessage] = useState<string>("");
  const [isPhone, setIsPhone] = useState<boolean>(false);
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
          value={pNumber}
          color="#20252b"
          fontSize="14px"
          holderName="연락처"
          onChange={onChangePhone}
        />
        {pNumber.length > 0 && (
          <span className={`message ${isPhone ? "success" : "error"}`}>
            {phoneMessage}
          </span>
        )}
      </t.Div>
    </t.DivArea>
  );
};
export default PayUserInput;
