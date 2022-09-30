import * as t from "./orderPList.style";
import { useState } from "react";
//pages//
import { FreeShipping } from "../../../components/paymentPage/orderPdtInfo/OrderPdtInfo";
import PdtInfo from "../../../components/paymentPage/pdtInfo/PdtInfo";
import PayMethod from "../../../components/paymentPage/payMethod/PayMethod";
import PayUserInfo from "../../../components/paymentPage/payUserInfo/PayUserInfo";
import PayUserInput from "../../../components/paymentPage/payUserInput/PayUserInput";
import PayMethodInput from "../../../components/paymentPage/payMethodInput/PayMethodInput";
import PayRadioBtn from "../../../components/paymentPage/payRadioBtn/PayRadioBtn";
import PaySummary from "../../../components/paymentPage/paySummary/PaySummary";
import PayAgree from "../../../components/paymentPage/payAgree/PayAgree";
import { MainButton } from "../../../elements/Buttons";
import { useGetPay } from "./useOrderPList";
interface DBType {
  id: number;
  keywordNo: string;
  prodNo: number;
  thumbnail: string;
  category: string;
  brand: string;
  name: string;
  price: number;
  discount: number;
  option: [string | null, string | null, string | null, number, number][];
  totalPrice: number;
  totalCnt: number;
}
const OrderPList = () => {
  const titles = [
    "주문 상품 정보",
    "주문자 정보",
    "배송 정보",
    "주문 요약",
    "결제수단",
  ];

  const [btnopen, setBtnopen] = useState<boolean>(false);
  const [btnchange, setBtnchange] = useState<boolean>(false);
  return (
    <t.PayArea>
      <t.LPListArea>
        <t.LTipOff>
          <t.LOrderInfoDiv>{titles[0]}</t.LOrderInfoDiv>
          <PdtInfo />
          <PdtInfo />
          <FreeShipping />
        </t.LTipOff>

        {btnopen ? (
          <t.LTipOff>
            <t.LOrderInfoDiv>{titles[1]}</t.LOrderInfoDiv>
            <PayUserInput />
          </t.LTipOff>
        ) : (
          <t.LTipOff>
            <t.LOrderInfoDiv>{titles[1]}</t.LOrderInfoDiv>
            <PayUserInfo BtnonClick={() => setBtnopen(true)} />
          </t.LTipOff>
        )}
        {btnchange ? (
          <t.LTipOff>
            <t.LOrderInfoDiv>{titles[2]}</t.LOrderInfoDiv>
            <PayMethodInput />
          </t.LTipOff>
        ) : (
          <t.LTipOff>
            <t.LOrderInfoDiv>{titles[2]}</t.LOrderInfoDiv>
            <PayMethod BtnonClick={() => setBtnchange(true)} />
          </t.LTipOff>
        )}
      </t.LPListArea>
      <t.RPayArea>
        <t.RTipOff>
          <t.ROrderInfoDiv>{titles[3]}</t.ROrderInfoDiv>
          <PaySummary />
        </t.RTipOff>
        <t.RTipOff>
          <t.ROrderInfoDiv>{titles[4]}</t.ROrderInfoDiv>
          <PayRadioBtn></PayRadioBtn>
        </t.RTipOff>
        <t.RTipOff style={{ display: "rleative" }}>
          <PayAgree />
          <t.RBtnDiv>
            <MainButton width="100%">결제하기</MainButton>
          </t.RBtnDiv>
        </t.RTipOff>
      </t.RPayArea>
    </t.PayArea>
  );
};

export default OrderPList;
