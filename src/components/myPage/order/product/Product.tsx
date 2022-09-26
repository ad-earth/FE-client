import * as t from "./product.style";
interface PropsType {
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Option: Array<
    [string | null, string | null, number | null, number | null, number | null]
  >;
}

const Product = ({ product }: { product: PropsType }) => {
  return (
    <t.ProductInfoBox>
      <t.ProductImg src={product.p_Thumbnail[0]} />
      <t.ProductInfo>
        <t.ProducName>
          [{product.a_Brand}] {product.p_Name}
        </t.ProducName>
        {product.p_Option.map((option, i: number) => (
          <t.ProducOptionBox key={i}>
            <t.ProducOption>
              {`${option[0] !== null ? option[0] : ""}  `}
              {`${option[1] !== null && option[0] !== null ? "/" : ""}`}
              {`${option[1] !== null ? option[1] : ""}  `}
            </t.ProducOption>
            <t.ProducPrice>
              {option[4]}원 / {option[2]}개
            </t.ProducPrice>
          </t.ProducOptionBox>
        ))}
      </t.ProductInfo>
    </t.ProductInfoBox>
  );
};

export default Product;
