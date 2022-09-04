import styled from "styled-components";

export const Base = styled.div`
  max-width: 600px;
  padding: 32px 24px 24px;
  box-sizing: border-box;
`;
export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fs24};;
  font-weight: bold;
  text-align: center;
  margin: 0 0 24px;
`;
export const Description = styled.p`
  font-size: ${({ theme }) => theme.fs15};;
  color: ${({ theme }) => theme.fc14};
  margin-bottom: 24px;
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
