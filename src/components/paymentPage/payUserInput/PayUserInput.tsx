import * as t from "./payUserInput.style";
import { useCallback, useState } from "react";
import Input from "../../../elements/input/Input";
import { editIsUserName, editIsUserPhone } from "../../../redux/reducer/payCheckSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

const PayUserInput = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [pNumber, setPNumber] = useState<string>("");
  const [nameMessage, setNameMessage] = useState<string>("");
  const [phoneMessage, setPhoneMessage] = useState<string>("");
  const { isUserName, isUserPhone } = useAppSelector((state) => state.payCheckSlice);

  //-- 이름 유효성 체크
  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage("2글자 이상 5글자 미만으로 입력해주세요.");
      dispatch(editIsUserName(false));
    } else {
      setNameMessage("");
      dispatch(editIsUserName(true));
    }
  }, []);

  //-- 연락처 유효성 체크
  const onChangePhone = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const regExp = /^\d{2,3}-\d{3,4}-\d{4}$/;
    const currentNum = e.target.value;
    setPNumber(currentNum);
    if (!regExp.test(currentNum)) {
      setPhoneMessage("하이픈(-)을 포함한 형태로 입력해주세요.");
      dispatch(editIsUserPhone(false));
    } else {
      setPhoneMessage("");
      dispatch(editIsUserPhone(true));
    }
  }, []);
  return (
    <t.DivArea>
      <t.Div>
        <Input value={name} color="#20252b" fontSize="14px" holderName="이름" onChange={onChangeName} />
        {name.length > 0 && <span className={`message ${isUserName ? "success" : "error"}`}>{nameMessage}</span>}
      </t.Div>
      <t.Div>
        <Input value={pNumber} color="#20252b" fontSize="14px" holderName="연락처" onChange={onChangePhone} />
        {pNumber.length > 0 && <span className={`message ${isUserPhone ? "success" : "error"}`}>{phoneMessage}</span>}
      </t.Div>
    </t.DivArea>
  );
};
export default PayUserInput;
