import React from "react";
import styled from "styled-components";

import ProdImg from "../components/detailPage/ProdImg";
import ProdName from "../components/detailPage/ProdName";
import ProdDesc from "../components/detailPage/ProdDesc";
import ProdOpt from "../components/detailPage/ProdOpt";

const ProdInfo = () => {
  return (
    <ProdInfoContainer>
      <ProdImg />
      <InfoWrapper>
        <ProdName />
        <ProdDesc />
        <ProdOpt />
      </InfoWrapper>
    </ProdInfoContainer>
  );
};
export default ProdInfo;

const ProdInfoContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const InfoWrapper = styled.div`
  width: 41%;
  display: flex;
  flex-direction: column;
`;
