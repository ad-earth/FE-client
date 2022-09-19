import React from "react";
import { MainButton } from "../../../../elements/Buttons";
import useMobileMediaQuery from "../../../../hooks/useMobileMediaQuery";
import Product from "../product/Product";

import * as t from "./orderListDetail.style";

const OrderListDetail = () => {
  const isMobile = useMobileMediaQuery();
  return (
    <t.Table>
      <t.Thead>
        <tr>
          <th>상품정보</th>
          <th>배송비</th>
          <th>진행상태</th>
        </tr>
      </t.Thead>

      <t.TBody>
        {["1ddd", "2dddd", "3ddd"].map((data, i: number) => (
          <tr key={i}>
            <td>{/* <Product /> */}</td>
            {i === 0 ? (
              <td rowSpan={data.length} className="center">
                무료
              </td>
            ) : (
              <td style={{ display: "none" }}></td>
            )}
            <td className="buttonBox">
              <span>배송왼료</span>
              <t.ButtonBox>
                <MainButton radius="50px">배송왼료</MainButton>
              </t.ButtonBox>
            </td>
          </tr>
        ))}
        {isMobile && (
          <t.IsMobile>
            <td>
              배송비 <strong>3000원</strong>
            </td>
          </t.IsMobile>
        )}
      </t.TBody>
    </t.Table>
  );
};

export default OrderListDetail;
