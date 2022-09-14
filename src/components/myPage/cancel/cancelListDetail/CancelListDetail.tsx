import * as t from "./cancelListDetail.style";
import Product from "../../order/product/Product";

const CancelListDetail = () => {
  return (
    <t.CancelListBox>
      <t.Title>취소 상품 선택</t.Title>

      {["1", "2"].map((data, i: number) => (
        <t.CancelList key={i}>
          <>
            <t.Checkbox type="checkbox" />
            <Product />
          </>
        </t.CancelList>
      ))}
    </t.CancelListBox>
  );
};

export default CancelListDetail;
