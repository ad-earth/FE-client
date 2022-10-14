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
export const ShipDiv = styled.div`
  margin-top: 10px;
`;
export const ButtonBox = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
`;
export const BtnArea = styled.div`
  flex: display;
  flex-direction: column;
  padding: 0 30px
  margin-bottom: 18px;
`;
export const DropBtn = styled.select`
  width: 100%;
  font-size: ${({ theme }) => theme.fs14};
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.fc09};
  padding: 0.5em 0.75em;
  box-sizing: border-box;
  border: 1px solid rgba(33, 33, 33, 0.15);
  outline-color: ${({ theme }) => theme.ls01};
`;
