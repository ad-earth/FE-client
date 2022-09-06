import * as t from "./cancelInfo.style";
import { MainButton } from "../../../../elements/Buttons";

const CancelInfo = () => {
  return (
    <>
      <t.Description>
        <p>
          주문하신 상품 단위로 취소요청이 가능합니다.(수량 부분취소 불가)
          <br />
          상품이 발송되기 전에 취소요청을 하실 수 있습니다.
        </p>
        <span>단, 상품을 이미 발송한 경우 취소처리가 거부될 수 있습니다.</span>
      </t.Description>
      <t.ButtomBox>
        <MainButton radius="50px">주문 취소</MainButton>
      </t.ButtomBox>
    </>
  );
};

export default CancelInfo;
