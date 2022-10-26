import React from "react";
import { MainButton } from "../../../../elements/buttons/Buttons";
import useMobileMediaQuery from "../../../../hooks/useMobileMediaQuery";
import Product from "../product/Product";
import * as t from "./orderListDetail.style";

interface PropsType {
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Option: Array<
    [string | null, string | null, number | null, number | null, number | null]
  >;
  o_Status: string;
}
const OrderListDetail = ({ products }: { products: PropsType[] }) => {
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
        {products.map((product: PropsType, i: number) => (
          <tr key={i}>
            <td>
              <Product product={product} />
            </td>
            {i === 0 ? (
              <td rowSpan={products.length} className="center">
                무료
              </td>
            ) : (
              <td style={{ display: "none" }}></td>
            )}
            <td className="buttonBox">
              <span>{product.o_Status}</span>
              {product.o_Status === "배송완료" && (
                <t.ButtonBox>
                  <MainButton radius="50px">
                    구매평 작성
                    <div
                      onClick={() => {
                        // setInfoIsOpen(true);
                      }}
                    ></div>
                  </MainButton>
                </t.ButtonBox>
              )}
            </td>
          </tr>
        ))}
        {isMobile && (
          <t.IsMobile>
            <td>
              배송비 <strong>무료</strong>
            </td>
          </t.IsMobile>
        )}
      </t.TBody>
    </t.Table>
  );
};

export default OrderListDetail;
