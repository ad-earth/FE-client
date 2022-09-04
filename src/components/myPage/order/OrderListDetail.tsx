import React from "react";
import Product from "./Product";
import styled from "styled-components";
import { MainButton } from "../../../elements/Buttons";
import useMobileMediaQuery from "../../../hook/useMobileMediaQuery";

const OrderListDetail = () => {
  const isMobile = useMobileMediaQuery();
  return (
    <Table>
      <Thead>
        <tr>
          <th>상품정보</th>
          <th>배송비</th>
          <th>진행상태</th>
        </tr>
      </Thead>

      <TBody>
        {["1ddd", "2dddd", "3ddd"].map((data, i: number) => (
          <tr key={i}>
            <td>
              <Product />
            </td>
            {i === 0 ? (
              <td rowSpan={data.length} className="center">
                무료
              </td>
            ) : (
              <td style={{ display: "none" }}></td>
            )}
            <td className="buttonBox">
              <span>배송왼료</span>
              <ButtonBox>
                <MainButton radius="50px">배송왼료</MainButton>
              </ButtonBox>
            </td>
          </tr>
        ))}
        {isMobile && (
          <IsMobile>
            <td>
              배송비 <strong>3000원</strong>
            </td>
          </IsMobile>
        )}
      </TBody>
    </Table>
  );
};

const Table = styled.table`
  display: table;
  width: 100%;
  font-size: 15px;
  border-collapse: collapse;
  margin-bottom: 40px;
  & th,
  tr,
  td {
    border: 1px solid rgba(100, 100, 100, 0.1);
  }
  @media (max-width: 990px) {
    & tr td {
      border: none;
      padding: 0;
    }
  }
`;
const Thead = styled.thead`
  width: 100%;
  & th {
    font-weight: initial;
    padding: 10px 16px;
  }
  @media (max-width: 990px) {
    display: none;
  }
`;
const TBody = styled.tbody`
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
    display: revert;
    color: #646464;
    font-weight: 600;
    @media (max-width: 990px) {
      margin: 10px 0 0 100px;
      box-sizing: border-box;
      padding: 0;
    }
  }
`;
const ButtonBox = styled.div`
  width: 130px;
  float: right;
  @media (max-width: 990px) {
    width: 100%;
    float: none;
    margin-top: 14px;
  }
`;
const IsMobile = styled.tr`
  text-align: center;
`;

export default OrderListDetail;
