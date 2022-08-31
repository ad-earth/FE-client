import styled from "styled-components";

import ProdDetails from "../../components/detailPage/ProdDetails";

const ProdContents = () => {
  return (
    <MainContainer>
      <MenuWrapper>
        <Menu>상세정보</Menu>
        <Menu className="right">구매평 (3)</Menu>
      </MenuWrapper>
      <ContentsWrapper>
        <ProdDetails />
      </ContentsWrapper>
    </MainContainer>
  );
};

export default ProdContents;

const MainContainer = styled.div`
  width: 1200px;
  margin: 35px auto;
  @media (max-width: 1200px) {
    width: 100%;
  }
  /* @media (max-width: 990px) {
    width: 100%;
    flex-direction: column;
  } */
`;
const MenuWrapper = styled.div`
  width: 98%;
  border: 1px solid #e5e7ebbb;
  display: flex;
  margin: 0 auto;
`;
const Menu = styled.div`
  width: 50%;
  color: #646464;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  &.right {
    border-left: 1px solid #e5e7ebbb;
  }
`;
const ContentsWrapper = styled.div`
  width: 98%;
  margin: 0 auto;
`;
