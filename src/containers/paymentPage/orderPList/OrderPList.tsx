import * as t from "./orderPList.style";
import { useState, useEffect } from "react";
import { openDB } from "idb";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../../redux/store";
import { useNavigate, useParams } from "react-router-dom";
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
import { useGetPay, usePostPay } from "./useOrderPList";
import { PayListType } from "./orderPList.type";

const OrderPList = () => {
  const titles = [
    "주문 상품 정보",
    "주문자 정보",
    "배송 정보",
    "주문 요약",
    "결제수단",
  ];
  const { name, dNo, pNumber, zipcode, address1, address2, memo } =
    useAppSelector((state: RootState) => state.paymentReducer);
  const navigate = useNavigate();
  const [btnopen, setBtnopen] = useState<boolean>(false);
  const [btnchange, setBtnchange] = useState<boolean>(false);

  const [data, setData] = useState([]);

  const GetPaylist: PayListType = useGetPay();

  const postPay = {
    address: {
      d_No: Number(dNo),
      d_Name: name,
      d_Phone: pNumber,
      d_Address1: zipcode,
      d_Address2: address1,
      d_Address3: address2,
      d_Memo: memo,
    },
  };

  const { mutate, isSuccess } = usePostPay(postPay);
  const PayClick = () => {
    mutate();
  };
  //indexedDB
  async function getCart() {
    let store;
    const db = await openDB("cart", 1, {
      upgrade(db) {
        store = db.createObjectStore("cart", {
          keyPath: "id",
          autoIncrement: true,
        });
      },
    });
    store = db.transaction("cart", "readonly").objectStore("cart");
    const getReq = store.getAll();
    try {
      getReq.then((response) => {
        setData(response);
      });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (isSuccess) {
      alert("결제가 완료되었습니다.");
      navigate("/complete");
      getCart();
    } else {
      // alert("다시 시도해주세요.");
      getCart();
    }
  }, [isSuccess]);
  //파라미터로 담아온 prodNo만 걸러서 데이터 추출
  const { prodNo } = useParams<{ prodNo: string }>();
  const result = data.filter((v) => v.id === Number(prodNo));

  return (
    <>
      {data && GetPaylist && (
        <t.PayArea>
          <t.LPListArea>
            <t.LTipOff>
              <t.LOrderInfoDiv>{titles[0]}</t.LOrderInfoDiv>
              <PdtInfo data={result} />
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
                <PayUserInfo
                  userInfo={GetPaylist.userInfo}
                  BtnonClick={() => setBtnopen(true)}
                />
              </t.LTipOff>
            )}
            {btnchange ? (
              <t.LTipOff>
                <t.LOrderInfoDiv>{titles[2]}</t.LOrderInfoDiv>
                <PayMethodInput
                  addressList={GetPaylist.addressList}
                  userInfo={GetPaylist.userInfo}
                />
              </t.LTipOff>
            ) : (
              <t.LTipOff>
                <t.LOrderInfoDiv>{titles[2]}</t.LOrderInfoDiv>
                <PayMethod
                  BtnonClick={() => setBtnchange(true)}
                  addressList={GetPaylist.addressList}
                  userInfo={GetPaylist.userInfo}
                />
              </t.LTipOff>
            )}
          </t.LPListArea>
          <t.RPayArea>
            <t.RTipOff>
              <t.ROrderInfoDiv>{titles[3]}</t.ROrderInfoDiv>
              <PaySummary data={result} />
            </t.RTipOff>
            <t.RTipOff>
              <t.ROrderInfoDiv>{titles[4]}</t.ROrderInfoDiv>
              <PayRadioBtn></PayRadioBtn>
            </t.RTipOff>
            <t.RTipOff style={{ display: "rleative" }}>
              <PayAgree />
              <t.RBtnDiv>
                <MainButton width="100%" onClick={PayClick}>
                  결제하기
                </MainButton>
              </t.RBtnDiv>
            </t.RTipOff>
          </t.RPayArea>
        </t.PayArea>
      )}
    </>
  );
};

export default OrderPList;
