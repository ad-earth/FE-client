import * as t from "./prodDetails.style";
import DeliveryInfo from "../deliveryInfo/DeliveryInfo";

const ProdDetails = () => {
  return (
    <t.MainContainer>
      <img
        src="https://cdn.imweb.me/upload/S202001038f7af028ec26d/fe8e6f3fa1560.jpg"
        alt="상품 상세 정보"
      />
      <img
        src="https://cdn.imweb.me/upload/S202001038f7af028ec26d/8b581844a9989.jpg"
        alt="상품 상세 정보"
      />
      <img
        src="https://cdn.imweb.me/upload/S202001038f7af028ec26d/fcfcee950a7b8.jpg"
        alt="상품 상세 정보"
      />
      <img
        src="https://cdn.imweb.me/upload/S202001038f7af028ec26d/81372705c646b.jpg"
        alt="상품 상세 정보"
      />
      <DeliveryInfo />
    </t.MainContainer>
  );
};

export default ProdDetails;
