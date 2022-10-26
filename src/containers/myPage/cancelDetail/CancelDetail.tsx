import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
//style
import * as t from "./cancelDetail.style";
//components + elements
import CancelInfo from "../../../components/myPage/cancel/cancelInfo/CancelInfo";
import CancelListDetail from "../../../components/myPage/cancel/cancelListDetail/CancelListDetail";
import CancelAmount from "../../../components/myPage/cancel/cancelAmount/CancelAmount";
import { MainButton } from "../../../elements/buttons/Buttons";
//hook
import useCancelDetail from "./useCancelDetail";
import useMobileMediaQuery from "../../../hooks/useMobileMediaQuery";

interface ProductType {
  o_Status: string;
  p_No: number;
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Option: Array<
    [string | null, string | null, number | null, number | null, number | null]
  >;
  p_Price: number;
}
interface LocationType {
  products: ProductType[];
  orderNo: number;
}
interface PutData {
  oNo: string;
  p_No: number[];
}

const CancelDetail = () => {
  const isMobile = useMobileMediaQuery();
  const navigate = useNavigate();
  //상품 정보 Params
  const { id } = useParams<{ id: string }>();
  const [params, setParams] = useState<string>(id ? id : "");
  //상품 정보 state
  const location = useLocation();
  const state = location.state as LocationType;
  const { products, orderNo } = state;
  //useState
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [checkPrice, setCheckPrices] = useState<number>(0);
  const [putData, setPutData] = useState<PutData>({
    oNo: params,
    p_No: [],
  });
  // useMutation hook
  const { mutate, isSuccess } = useCancelDetail(putData);

  //주문취소 clickEvent
  const ClickEvent = () => {
    putData.p_No.length === 0 ? alert("취소상품을 선택해 주세요") : mutate();
  };
  //성공시 페이지 이동
  useEffect(() => {
    if (isSuccess) {
      alert("isSuccess");
      navigate("/mypage");
    }
  }, [isSuccess]);

  useEffect(() => {
    setCheckPrices(
      products
        .map((item, i) => (checkedItems.includes(item.p_No) ? item.p_Price : 0))
        .reduce((acc, cur) => acc + cur)
    );
    setPutData((putData: PutData) => {
      return { ...putData, p_No: checkedItems };
    });
  }, [checkedItems]);

  //주문완료건만 filter
  const successOrderList = products.filter(
    (item) => item.o_Status === "주문완료"
  );
  return (
    <t.Section>
      <t.Title>
        <span
          onClick={() => {
            navigate("..");
          }}
        ></span>
        주문 취소요청
        <t.OrderNumber>{orderNo}</t.OrderNumber>
      </t.Title>
      <t.Contents>
        <t.ContentsBox>
          <CancelInfo />
          <t.ButtomBox>
            <MainButton radius="50px" onClick={ClickEvent}>
              주문 취소
            </MainButton>
          </t.ButtomBox>
        </t.ContentsBox>
        <t.ContentsBox>
          <CancelListDetail
            products={successOrderList}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
          />
          <CancelAmount checkPrice={checkPrice} />
          {isMobile && (
            <t.MobileButtomBox>
              <MainButton radius="50px" onClick={ClickEvent}>
                주문 취소
              </MainButton>
            </t.MobileButtomBox>
          )}
        </t.ContentsBox>
      </t.Contents>
    </t.Section>
  );
};
export default CancelDetail;
