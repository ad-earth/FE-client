import styled from "styled-components";

export const Base = styled.div`
  padding: 32px 24px 24px;
  max-width: 600px;
  box-sizing: border-box;
`;
export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  margin: 0 0 24px;
  font-weight: bold;
`;
export const Description = styled.p`
  margin-bottom: 24px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black};
`;
export const ButtonBox = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;
