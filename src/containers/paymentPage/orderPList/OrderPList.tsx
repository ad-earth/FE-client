import * as t from "./orderPList.style";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//pages//
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../../redux/store";
import { FreeShipping } from "../../../components/paymentPage/orderPdtInfo/OrderPdtInfo";
import PdtInfo from "../../../components/paymentPage/pdtInfo/PdtInfo";
import PayMethod from "../../../components/paymentPage/payMethod/PayMethod";
import PayUserInfo from "../../../components/paymentPage/payUserInfo/PayUserInfo";
import PayUserInput from "../../../components/paymentPage/payUserInput/PayUserInput";
import PayMethodInput from "../../../components/paymentPage/payMethodInput/PayMethodInput";
import PayRadioBtn from "../../../components/paymentPage/payRadioBtn/PayRadioBtn";
import PaySummary from "../../../components/paymentPage/paySummary/PaySummary";
import PayAgree from "../../../components/paymentPage/payAgree/PayAgree";
import { MainButton } from "../../../elements/buttons/Buttons";
import { useGetPay, usePostPay } from "./useOrderPList";
import { PayListType } from "./orderPList.type";
import { useAllPaymentDB } from "../../../hooks/useAllPaymentDB";
import { DataPropsType } from "../../../components/paymentPage/pdtInfo/pdInfo.type";
import { useDeletePayDB } from "../../../hooks/useDeletePayDB";
import { editClear } from "../../../redux/reducer/payCheckSlice";

const OrderPList = () => {
  const titles = [
    "주문 상품 정보",
    "주문자 정보",
    "배송 정보",
    "주문 요약",
    "결제수단",
  ];
  const navigate = useNavigate();
  const [btnOpen, setBtnopen] = useState<boolean>(false);
  const [btnchange, setBtnchange] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  //-- get요청으로 data 받아오기
  const GetPaylist: PayListType = useGetPay();
  //-- slice에서 data 받아오기
  const oPrice = useAppSelector((state) => state.payPdtSlice.oPrice);
  const products = useAppSelector((state) => state.payPdtSlice.products);
  const state = useAppSelector((state) => state.payCheckSlice);
  const [cartData, setCartData] = useState<DataPropsType[]>();
  //-- redux
  const { name, dNo, pNumber, zipcode, address1, address2, memo } =
    useAppSelector((state: RootState) => state.payUserSlice);
  const { isName, isPNumber, isUserName, isUserPhone } = useAppSelector(
    (state: RootState) => state.payCheckSlice
  );
  //-- post 요청할 데이터들
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
    products: products,
    o_Price: oPrice,
  };
  const { mutate, isSuccess } = usePostPay(postPay);

  //-- 결제하기 버튼
  const PayClick = () => {
    if (isUserName === false && btnOpen === true) {
      alert("이름을 입력해주세요");
    } else if (isUserPhone === false && btnOpen === true) {
      alert("연락처를 입력해주세요");
    } else if (state.agree === false) {
      alert("전체 동의에 체크해주세요");
    } else if (isName === false && state.tab === true) {
      alert("이름을 입력해주세요");
    } else if (isPNumber === false && state.tab !== false) {
      alert("연락처를 입력해주세요");
    } else if (zipcode === "" && state.tab !== false) {
      alert("주소를 입력해주세요");
    } else if (address2 === "" && state.tab !== false) {
      alert("상세 주소를 입력해주세요");
    } else {
      mutate();
    }
  };

  //-- indexedDB
  const cartDB = useAllPaymentDB();

  useEffect(() => {
    if (isSuccess) {
      alert("결제가 완료되었습니다.");
      navigate("/complete");
    } else {
    }
  }, [isSuccess]);
  //-- 디비 리덕스 저장
  useEffect(() => {
    cartDB.then((response) => setCartData(response));
  }, []);
  //-- 디비 삭제
  useEffect(() => {
    dispatch(editClear(true));
  }, [dispatch]);
  useDeletePayDB();

  return (
    <>
      {GetPaylist && cartData && (
        <t.PayArea>
          <t.LPListArea>
            <t.LTipOff>
              <t.LOrderInfoDiv>{titles[0]}</t.LOrderInfoDiv>
              <PdtInfo data={cartData} />
              <FreeShipping />
            </t.LTipOff>

            {btnOpen ? (
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
              <PaySummary data={cartData} />
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
