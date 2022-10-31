import styled from "styled-components";

export const UserBox = styled.div`
  display: flex;
  align-items: center;
`;
export const UserImg = styled.div`
  align-items: center;
  display: flex;
  padding-right: 20px;
  cursor: pointer;
`;
export const UserName = styled.p`
  font-size: ${({ theme }) => theme.fs22};
  text-align: left;
  color: ${({ theme }) => theme.fc14};
  margin: 0;
  @media (max-width: 990px) {
    font-size: ${({ theme }) => theme.fs18};
  }
`;
