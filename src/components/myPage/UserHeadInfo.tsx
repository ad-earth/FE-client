import React from "react";
import styled from "styled-components";

import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";

const UserHeadInfo = () => {
  const isMobile = useMediaQuery("(max-width: 990px)");
  return (
    <UserBox>
      <UserImg>
        <Avatar
          sx={isMobile ? { width: 56, height: 56 } : { width: 85, height: 85 }}
          src="/broken-image.jpg"
        />
      </UserImg>
      <UserName>
        안녕하세요 <strong>최수인님</strong>
        <br />
        오늘도 같이 지구를 살려봅시다 🌍
      </UserName>
    </UserBox>
  );
};

export default UserHeadInfo;
const UserBox = styled.div`
  display: flex;
  align-items: center;
`;
const UserImg = styled.div`
  align-items: center;
  display: flex;
  padding-right: 20px;
`;
const UserName = styled.p`
  font-size: ${({ theme }) => theme.fs22};
  text-align: left;
  color: ${({ theme }) => theme.fc14};
  margin: 0;
  @media (max-width: 990px) {
    font-size: ${({ theme }) => theme.fs18};
  }
`;
