import * as t from "./deliveryInfo.style";
import { delivery } from "../../../shared/utils/imgUrls";

const DeliveryInfo = () => {
  return (
    <t.MainContainer>
      <t.Title>배송정보</t.Title>
      <img src={delivery} alt="배송정보" />
      <p>
        - 모든 제품의 배송은 Plastic Free 원칙으로 종이재질로 발송됩니다.
        (종이박스, 종이완충재, 종이테이프)
        <br />
        - 수령하신 택배박스는 운송장을 제거한 후 종이로 분리배출 해주세요.
        <br />
        - 결제완료 후 제품을 수령하시기까지 약 2-5일 소요됩니다.
        <br />- 배송이 늦어지거나 일부 제품이 품절인 경우 개별적으로 연락을
        드리겠습니다.
      </p>
    </t.MainContainer>
  );
};

export default DeliveryInfo;
