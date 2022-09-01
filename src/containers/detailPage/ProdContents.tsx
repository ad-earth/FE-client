import { useState } from "react";
import styled from "styled-components";

import ProdComments from "../../components/detailPage/ProdComments";
import ProdDetails from "../../components/detailPage/ProdDetails";

const ProdContents = () => {
  //상세정보 & 구매평 스위치
  const [contentsChange, setContentsChange] = useState(false);

  return (
    <MainContainer>
      <MenuWrapper>
        <Menu onClick={() => setContentsChange(false)}>상세정보</Menu>
        <Menu onClick={() => setContentsChange(true)} className="right">
          구매평 (3)
        </Menu>
      </MenuWrapper>
      <ContentsWrapper>
        {contentsChange ? <ProdComments /> : <ProdDetails />}
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
  cursor: pointer;
  &.right {
    border-left: 1px solid #e5e7ebbb;
  }
`;
const ContentsWrapper = styled.div`
  width: 98%;
  margin: 0 auto;
`;
