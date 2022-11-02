import { useEffect } from "react";
import { setPriceData } from "../../../redux/reducer/payPdtSlice";
import { useAppDispatch } from "../../../redux/store";
import { DataPropsType, DataType } from "../pdtInfo/pdInfo.type";
import * as t from "./paySummary.style";

const PaySummary = ({
  dtData,
  cartData,
}: {
  dtData: DataPropsType[];
  cartData: DataPropsType[];
}) => {
  const dispatch = useAppDispatch();
  const totalP = dtData.reduce((a: any, currentObject: any) => {
    return a + currentObject.totalPrice;
  }, 0);

  // console.log("PS", dtData.totalPrice);

  useEffect(() => {
    dispatch(setPriceData(totalP));
  });
  return (
    <>
      {dtData && (
        <>
          <t.DivArea>
            <t.Div>
              <t.PayText>상품가격</t.PayText>
              <t.PayText>배송비</t.PayText>
            </t.Div>
            <t.ButtonBox>
              <t.PayText style={{ fontWeight: "bold" }}>
                {totalP.toLocaleString("ko-KR")}원
              </t.PayText>
              <t.PayText style={{ fontWeight: "bold" }}>+0원</t.PayText>
            </t.ButtonBox>
          </t.DivArea>
          <t.CountDiv>
            <t.Div>
              <t.CountText>총 주문 금액</t.CountText>
            </t.Div>
            <t.ButtonBox>
              <t.CountText style={{ color: "#00913A", fontWeight: "bold" }}>
                {totalP.toLocaleString("ko-KR")}원
              </t.CountText>
            </t.ButtonBox>
          </t.CountDiv>
        </>
      )}
    </>
  );
};

export default PaySummary;
