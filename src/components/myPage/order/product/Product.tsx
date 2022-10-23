import * as t from "./product.style";
import { ProdType } from "../../../../containers/myPage/order/order.type";

const Product = ({ product }: { product: ProdType }) => {
  const { p_Thumbnail, a_Brand, p_Name, p_Option } = product;
  return (
    <t.ProductInfoBox>
      <t.ProductImg src={p_Thumbnail[0]} />
      <t.ProductInfo>
        <t.ProducName>
          [{a_Brand}] {p_Name}
        </t.ProducName>
        {p_Option.map((option, i: number) => (
          <t.ProducOptionBox key={i}>
            <t.ProducOption>
              {`${option[0] !== null ? option[0] : ""}  `}
              {`${option[1] !== null && option[0] !== null ? "/" : ""}`}
              {`${option[1] !== null ? option[1] : ""}  `}
            </t.ProducOption>
            <t.ProducPrice>
              {option[4]}원 / {option[3]}개
            </t.ProducPrice>
          </t.ProducOptionBox>
        ))}
      </t.ProductInfo>
    </t.ProductInfoBox>
  );
};

export default Product;
