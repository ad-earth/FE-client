import * as t from "./payMethod.style";
import { MainButton } from "../../../elements/Buttons";
import { PayListType } from "../../../containers/paymentPage/orderPList/orderPList.type";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../../redux/store";
import { editMemo } from "../../../redux/reducer/paymentSlice";

export interface MemoType {
  BtnonClick?: () => void;
}

interface GetPayUserType {
  uAddress1: string;
  uAddress2: string;
  uAddress3: string;
  uName: string;
  uPhone: string;
}
export const PayMethod = (props: PayListType & MemoType) => {
  // console.log(props.addressList);
  return (
    <>
      <t.DivArea>
        <PayMethodInfo
          uAddress1={props.userInfo.u_Address1}
          uAddress2={props.userInfo.u_Address2}
          uAddress3={props.userInfo.u_Address3}
          uName={props.userInfo.u_Name}
          uPhone={props.userInfo.u_Phone}
        />
        <t.ButtonBox>
          <MainButton
            color="#fff"
            hBgColor="#00913a"
            fontSize="13px"
            fontWeight="500"
            padding="6px 12px"
            radius="2px"
            width="50px"
            onClick={() => props.BtnonClick()}
          >
            변경
          </MainButton>
        </t.ButtonBox>
      </t.DivArea>
      <PayMethodSelect />
    </>
  );
};

export const PayMethodInfo = (props: GetPayUserType) => {
  return (
    <t.Div>
      <t.NameDiv>
        <span>{props.uName}</span>
      </t.NameDiv>
      <t.PayText>{props.uPhone}</t.PayText>
      <t.PayText>
        {props.uAddress2}
        {props.uAddress3}
      </t.PayText>
      <t.PayText>({props.uAddress1})</t.PayText>
    </t.Div>
  );
};

export const PayMethodSelect = (props: MemoType) => {
  const { memo } = useAppSelector((state: RootState) => state.paymentReducer);
  const dispatch = useAppDispatch();

  const MemoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(editMemo(e.target.value));
  };
  return (
    <t.ShipDiv>
      <t.PayText>배송메모</t.PayText>
      <t.BtnArea style={{ marginTop: "10px" }}>
        <t.DropBtn name="ship" id="ship" onChange={MemoChange} value={memo}>
          <option value="null">배송메모를 선택해주세요.</option>
          <option value="배송 전에 미리 연락 바랍니다.">
            배송 전에 미리 연락 바랍니다.
          </option>
          <option value="부재시 경비실에 맡겨주세요.">
            부재시 경비실에 맡겨주세요.
          </option>
          <option value="부재시 전화나 문자를 남겨주세요.">
            부재시 전화나 문자를 남겨주세요.
          </option>
        </t.DropBtn>
      </t.BtnArea>
    </t.ShipDiv>
  );
};
export default PayMethod;
