import styled from "styled-components";

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fs21};
  font-weight: 600;
  display: flex;
  align-items: center;
  margin: 10px 0;
  & span {
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: ${({ theme }) => theme.fs11};
    line-height: 20px;
    color: ${({ theme }) => theme.fc01};
    background-color: ${({ theme }) => theme.bg11};
    border-radius: 100%;
    border-color: ${({ theme }) => theme.ls11};
    display: inline-block;
    margin-left: 10px;
    padding: 0;
  }
`;
export const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;
export const List = styled.div`
  max-width: 25%;
  @media (max-width: 990px) {
    max-width: 50%;
  }
`;
export const DataNull = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fs15};
  text-align: center;
  color: ${({ theme }) => theme.fc05};
  padding: 70px;
  box-sizing: border-box;
`;
