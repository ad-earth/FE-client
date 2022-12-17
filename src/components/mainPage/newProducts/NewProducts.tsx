import * as t from "./newProducts.style";
import { PropsType } from "./newProducts.type";
import NewCarousel from "../newCarousel/NewCarousel";

const NewProducts = (props: PropsType) => {
  return (
    <t.MainContainer>
      <t.TitleWrapper>
        <t.Title>
          <span>#NEW</span>
          <p>
            지구샵만의 꼼꼼한 기준으로 입고된
            <br />
            새로운 제로웨이스트 제품을 만나보세요!
          </p>
        </t.Title>
      </t.TitleWrapper>
      <NewCarousel newList={props.newList} />
    </t.MainContainer>
  );
};

export default NewProducts;
