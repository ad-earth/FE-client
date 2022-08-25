import React from "react";
import styled from "styled-components";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

import { theme } from "../../style/theme";
import { Badge } from "../../elements/Badge";

const ProdName = () => {
  return (
    <ProdNameContainer>
      <Name>[지구샵] 스트롱고체치약 (쿨민트향) 150정입</Name>
      <IconWrapper>
        <Price>13,400원</Price>
        <ShareOutlinedIcon sx={{ color: "#999999", cursor: "pointer" }} />
      </IconWrapper>
      {/* 뱃지 타입 에러 해결 필요 */}
      {/* <Badge type={"best"}>BEST</Badge> */}
      <Line />
    </ProdNameContainer>
  );
};

export default ProdName;

const ProdNameContainer = styled.div`
  width: 100%;
`;
const Name = styled.div`
  color: ${theme.colors.gray1};
  font-size: ${theme.fontSize.medium};
`;
const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Price = styled.div`
  color: ${theme.colors.green2};
  font-size: 15px;
  margin-top: 7px;
`;
const Line = styled.div`
  width: 100%;
  height: 24px;
  border-bottom: 1px solid #e5e7eb;
`;
