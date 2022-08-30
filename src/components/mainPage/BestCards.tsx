import styled from "styled-components";

import Card from "../Card";

const BestCards = () => {
  return (
    <MainContainer>
      <CardWrapper>
        <Card
          p_Thumbnail={
            "https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg"
          }
          p_Brand={"지구샵"}
          p_Name={"키친클로스(체크)"}
        />
      </CardWrapper>
      <CardWrapper>
        <Card
          p_Thumbnail={
            "https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg"
          }
          p_Brand={"지구샵"}
          p_Name={"키친클로스(체크)"}
        />
      </CardWrapper>
      <CardWrapper>
        <Card
          p_Thumbnail={
            "https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg"
          }
          p_Brand={"지구샵"}
          p_Name={"키친클로스(체크)"}
        />
      </CardWrapper>
      <CardWrapper>
        <Card
          p_Thumbnail={
            "https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg"
          }
          p_Brand={"지구샵"}
          p_Name={"키친클로스(체크)"}
        />
      </CardWrapper>
      <CardWrapper>
        <Card
          p_Thumbnail={
            "https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg"
          }
          p_Brand={"지구샵"}
          p_Name={"키친클로스(체크)"}
        />
      </CardWrapper>
      <CardWrapper>
        <Card
          p_Thumbnail={
            "https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg"
          }
          p_Brand={"지구샵"}
          p_Name={"키친클로스(체크)"}
        />
      </CardWrapper>
    </MainContainer>
  );
};

export default BestCards;

const MainContainer = styled.div`
  width: 55%;
  /* margin-left: 9%; */
  display: grid;
  grid-template-columns: repeat(3, 33%);
  row-gap: 30px;
  @media (max-width: 990px) {
    width: 100%;
    margin: 30px auto;
    grid-template-columns: repeat(2, 50%);
  }
`;
const CardWrapper = styled.div`
  width: 100%;
`;
