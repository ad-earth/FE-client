import * as t from "./newProdList.style";
import NewCarousel from "../../../components/mainPage/newCarousel/NewCarousel";

const NewProdList = () => {
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
      <NewCarousel />
    </t.MainContainer>
  );
};

export default NewProdList;
