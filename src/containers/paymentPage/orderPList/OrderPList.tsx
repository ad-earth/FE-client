import * as t from "./orderPList.style";
import { useState, useEffect } from "react";
import { openDB } from "idb";
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
import { DataType } from "../../../components/paymentPage/pdtInfo/pdInfo.type";

const OrderPList = () => {
  const titles = [
    "주문 상품 정보",
    "주문자 정보",
    "배송 정보",
    "주문 요약",
    "결제수단",
  ];
  const navigate = useNavigate();
  const [btnopen, setBtnopen] = useState<boolean>(false);
  const [btnchange, setBtnchange] = useState<boolean>(false);

  const [name, setName] = useState("");
  const [pNumber, setPNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [memo, setMemo] = useState("");
  const [dNo, setDNo] = useState<string>(null);

  const [data, setData] = useState([]);

  const MemoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMemo(e.target.value);
  };
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
  ////////////////////////////////////////////////////
  const { prodNo } = useParams<{ prodNo: string }>();
  console.log(prodNo);
  const prodId = data.map((v: DataType) => {
    return v.id;
  }, 0);
  // console.log(prodId);
  const [find, setFind] = useState<any>();
  const prodFind = prodId.includes(Number(prodNo));
  // console.log(prodFind);

  // const ProdFind2 = () => {
  //   const find =  data.filter((item: any) => item);
  //   setFind(find);
  // };
  // console.log("ProdFind2", find);

  // const filterItems = (prodNo: any) => {
  //   return data.filter(
  //     (el) => el.toLowerCase().indexOf(prodNo.toString().toLowerCase()) > -1
  //   );
  // };
  // const a = setFind(filterItems);
  // console.log(find);

  return (
    <>
      {data && GetPaylist && (
        <t.PayArea>
          <t.LPListArea>
            {/* {ProdFind2 && ProdFind2 ? (
              <t.LTipOff>
                <t.LOrderInfoDiv>{titles[0]}</t.LOrderInfoDiv>
                <PdtInfo data={data} />
                <FreeShipping />
              </t.LTipOff>
            ) : null} */}
            <t.LTipOff>
              <t.LOrderInfoDiv>{titles[0]}</t.LOrderInfoDiv>
              <PdtInfo data={data} />
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
                  dNo={dNo}
                  setDNo={setDNo}
                  name={name}
                  setName={setName}
                  pNumber={pNumber}
                  setPNumber={setPNumber}
                  zipcode={zipcode}
                  setZipcode={setZipcode}
                  address1={address1}
                  setAddress1={setAddress1}
                  address2={address2}
                  setAddress2={setAddress2}
                  memo={memo}
                  MemoChange={MemoChange}
                  addressList={GetPaylist.addressList}
                  userInfo={GetPaylist.userInfo}
                />
              </t.LTipOff>
            ) : (
              <t.LTipOff>
                <t.LOrderInfoDiv>{titles[2]}</t.LOrderInfoDiv>
                <PayMethod
                  memo={memo}
                  MemoChange={MemoChange}
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
              <PaySummary data={data} />
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
