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
  padding-right: 20px;
  display: flex;
  align-items: center;
`;
const UserName = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 22px;
  text-align: left;
  margin: 0;
  @media (max-width: 990px) {
    font-size: 18px;
  }
`;
