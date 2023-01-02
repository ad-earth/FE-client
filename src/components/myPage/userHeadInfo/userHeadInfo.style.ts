import styled from "styled-components";
import Avatar from "@mui/material/Avatar";

export const Section = styled.div`
  margin-bottom: 70px;
  padding: 50px 45px 40px;
  @media (max-width: 990px) {
    border-bottom: 1px solid ${({ theme }) => theme.rgba02};
    margin: 0 -15px 20px;
    padding: 30px 15px;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const AvatarImg = styled(Avatar)`
  cursor: pointer;
`;
export const UserName = styled.p`
  font-size: ${({ theme }) => theme.fs22};
  text-align: left;
  color: ${({ theme }) => theme.fc14};
  padding-left: 20px;
  margin: 0;
  @media (max-width: 990px) {
    font-size: ${({ theme }) => theme.fs18};
  }
`;
