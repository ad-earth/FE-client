import * as t from "./cancelAmount.style";
import useMobileMediaQuery from "../../../../hooks/useMobileMediaQuery";
import { MainButton } from "../../../../elements/Buttons";

const CancelAmount = () => {
  const isMobile = useMobileMediaQuery();
  return (
    <t.CancelAmountBox>
      <t.Title>환불 예정금액 </t.Title>
      <t.CancelList>
        <t.Content>
          <t.Item>
            <t.TitleText>취소상품 총 금액 합계</t.TitleText>
            <span>4,900원</span>
          </t.Item>
          <t.Item>
            <t.SubText>취소 상품 합계</t.SubText>
            <t.SubText>4,900원</t.SubText>
          </t.Item>
        </t.Content>
        <t.Content className="border">
          <t.Item>
            <t.TitleText>환불금액 차감내역</t.TitleText>
            <span>0원</span>
          </t.Item>
          <t.Item>
            <t.SubText>반품 </t.SubText>
            <t.SubText>0원</t.SubText>
          </t.Item>
          <p>
            취소 승인 이후 할인 및 배송비 추가 여부에 따라 취소 비용이 추가로
            청구될 수 있습니다.
          </p>
        </t.Content>
        <t.Content>
          <t.Item>
            <t.TitleText>환불 예정 금액</t.TitleText>
            <span className="green">4,900원</span>
          </t.Item>
        </t.Content>
      </t.CancelList>
      {isMobile && (
        <t.ButtomBox>
          <MainButton radius="50px">주문 취소</MainButton>
        </t.ButtomBox>
      )}
    </t.CancelAmountBox>
  );
};

export default CancelAmount;
