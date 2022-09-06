import * as t from "./bestProd.style";
import BestCards from "../../../components/mainPage/bestCards/BestCards";

const BestProd = () => {
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
          <img
            src="https://cdn.imweb.me/thumbnail/20220304/3ae1ed5a06cf4.jpg"
            alt="베스트 상품 이미지"
          />
        </t.Image>
      </t.TitleWrapper>
      <BestCards />
    </t.MainContainer>
  );
};

export default BestProd;
