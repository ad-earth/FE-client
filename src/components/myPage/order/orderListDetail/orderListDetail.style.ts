import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  font-size: ${({ theme }) => theme.fs15};
  display: table;
  border-collapse: collapse;
  margin-bottom: 40px;
  & th,
  tr,
  td {
    border: 1px solid ${({ theme }) => theme.rgba06};
  }
  @media (max-width: 990px) {
    & tr td {
      border: none;
      padding: 0;
    }
  }
`;
export const Thead = styled.thead`
  width: 100%;
  & th {
    font-weight: initial;
    padding: 10px 16px;
  }
  @media (max-width: 990px) {
    display: none;
  }
`;
export const TBody = styled.tbody`
  & tr {
    @media (max-width: 990px) {
      display: flex;
      flex-direction: column;
      padding: 20px 15px;
    }
  }
  & .center {
    text-align: center;
    @media (max-width: 990px) {
      display: none;
    }
  }
  & td {
    padding: 16px 20px;
  }
  & .buttonBox {
    height: 100%;
    color: ${({ theme }) => theme.fc09};
    font-weight: 600;
    display: revert;
    @media (max-width: 990px) {
      margin: 10px 0 0 100px;
      padding: 0;
      box-sizing: border-box;
    }
  }
`;
export const ButtonBox = styled.div`
  width: 130px;
  float: right;
  @media (max-width: 990px) {
    width: 100%;
    float: none;
    margin-top: 14px;
  }
`;
export const IsMobile = styled.tr`
  text-align: center;
`;
