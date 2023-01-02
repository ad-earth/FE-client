import * as t from "./cancelDetail.style";
import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import CancelInfo from "../../../components/myPage/cancel/cancelInfo/CancelInfo";
import CancelListDetail from "../../../components/myPage/cancel/cancelListDetail/CancelListDetail";
import CancelAmount from "../../../components/myPage/cancel/cancelAmount/CancelAmount";
import { MainButton } from "../../../elements/buttons/Buttons";
import useCancelDetail from "./usePutCancelDetail";
import { LocationType, PutData } from "./cancelDetail.type";
import { useViewport } from "../../../hooks/useViewport";

const CancelDetail = () => {
  const viewport = useViewport();
  const navigate = useNavigate();
  //상품 정보 Params
  const { id } = useParams<{ id: string }>();
  const [params] = useState<string>(id ? id : "");
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
  const cancleClick = () =>
    putData.p_No.length === 0 ? alert("취소상품을 선택해 주세요") : mutate();
  //성공시 페이지 이동
  useEffect(() => {
    if (!isSuccess) return;
    alert("주문을 취소하였습니다.");
    navigate("/mypage");
  }, [isSuccess]);

  useEffect(() => {
    setCheckPrices(
      products
        .map((item, i) => (checkedItems.includes(item.p_No) ? item.p_Price : 0))
        .reduce((acc, cur) => acc + cur)
    );
    setPutData((putData: PutData) => ({ ...putData, p_No: checkedItems }));
  }, [checkedItems]);

  //주문완료건만 filter
  const successOrderList = products.filter(
    (item) => item.o_Status === "주문완료"
  );
  return (
    <t.Section>
      <t.Title>
        <span onClick={() => navigate("..")}></span>
        주문 취소요청
        <t.OrderNumber>{orderNo}</t.OrderNumber>
      </t.Title>
      <t.Contents>
        <t.ContentsBox>
          <CancelInfo />
          <t.ButtomBox>
            <MainButton radius="50px" onClick={cancleClick}>
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
          {viewport <= 990 && (
            <t.MobileButtomBox>
              <MainButton radius="50px" onClick={cancleClick}>
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
