import * as t from "./bestProducts.style";
import { PropsType } from "./bestProducts.type";
import BestCards from "../bestCards/BestCards";
import { bestProduct } from "../../../shared/utils/imgUrls";

const BestProducts = (props: PropsType) => {
  return (
    <t.MainContainer>
      <t.TitleWrapper>
        <t.Title>
          <span>#BEST</span>
          <p>
            제로 웨이스트 입문자도
            <br />
            어려움 없이 사용할 수 있는
            <br />
            베스트 제품!
          </p>
        </t.Title>
        <t.Image>
          <img src={bestProduct} alt="베스트 상품" />
        </t.Image>
      </t.TitleWrapper>
      <BestCards bestList={props.bestList} />
    </t.MainContainer>
  );
};

export default BestProducts;
