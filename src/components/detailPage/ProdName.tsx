import styled from "styled-components";

import { Badge } from "../../elements/Badge";
import { theme } from "../../style/theme";

const ProdName = () => {
  return (
    <MainContainer>
      <NameWrapper>
        <Name>[지구샵] 스트롱고체치약 (쿨민트향) 150정입</Name>
        <Badge type={"best"}>BEST</Badge>
      </NameWrapper>

      <Price>13,400원</Price>

      <Line />
    </MainContainer>
  );
};

export default ProdName;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Name = styled.div`
  color: ${theme.fc10};
  font-size: ${theme.fs16};
`;
const Price = styled.div`
  color: ${theme.fc15};
  font-size: ${theme.fs16};
  margin-top: 7px;
`;
const Line = styled.div`
  width: 100%;
  height: 24px;
  border-bottom: 0.5px solid ${theme.ls08};
`;
