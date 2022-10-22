import styled from "styled-components";

export const BodyDiv = styled.div`
  display: grid;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg01};
  width: 420px;
  grid-template-columns: 33% 67%;
  grid-template-rows: repeat(5, minmax(50px, auto));
  margin-top: 30px;
`;
export const CellL = styled.div`
  font-size: ${({ theme }) => theme.fs14};
  vertical-align: top;
  padding: 16px 0 12px 24px;
  font-weight: normal;
  color: ${({ theme }) => theme.fc07};
  border-width: 0 0 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.rgba04};
`;

export const CellR = styled.div`
  font-size: ${({ theme }) => theme.fs14};
  vertical-align: top;
  padding: 16px 24px 14px 12px;
  font-weight: normal;
  color: ${({ theme }) => theme.fc14};
  align-self: start;
  white-space: pre-wrap;
  border-width: 0 0 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.rgba04};
`;
export const Text = styled.div`
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.fc13};
  padding: 1px 0 1px;
`;
export const BtnDiv = styled.div`
  background-color: ${({ theme }) => theme.bg01};
  width: 420px;
  margin-bottom: 140px;
`;
