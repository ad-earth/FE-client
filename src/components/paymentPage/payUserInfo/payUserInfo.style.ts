import styled from "styled-components";

export const DivArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const Div = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
export const NameDiv = styled.div`
  margin: 0 0 4 px;
  & span {
    width: 80px;
    font-size: ${({ theme }) => theme.fs15};
    color: ${({ theme }) => theme.fc13};
  }
`;
export const PayText = styled.span`
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.fc08};
`;
export const ButtonBox = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
`;
