import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
export const H1tag = styled.h1`
  font-size: ${({ theme }) => theme.fs26};
  color: ${({ theme }) => theme.fc13};
  text-align: center;
  margin: 10px 0 0px;
  padding-top: 50px;
  font-weight: normal;
`;
export const H6tag = styled.h6`
  font-size: 20px;
  color: ${({ theme }) => theme.fc08};
  text-align: center;
  margin: 10px 0 10px;
  font-weight: bold;
  white-space: pre-wrap;
`;
