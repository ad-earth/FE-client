import styled from "styled-components";

export const DivArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-width: 0 0 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.rgba04};
  padding-bottom: 10px;
`;
export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const PayText = styled.span`
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.fc08};
  margin-bottom: 8px;
`;
export const CountDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 15px 0;
  border-width: 1px 0 0 0;
`;
export const CountText = styled.span`
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.fc09};
  margin-bottom: 8px;
`;
export const ButtonBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
`;
