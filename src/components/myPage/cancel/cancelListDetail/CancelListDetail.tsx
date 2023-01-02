import * as t from "./cancelListDetail.style";
import Product from "../../order/product/Product";
import { PropsType } from "./cancelListDetail.type";

const CancelListDetail = (props: PropsType) => {
  const { products, checkedItems, setCheckedItems } = props;

  const changeHandler = (checked: boolean, value: number) => {
    checked
      ? setCheckedItems([...checkedItems, value])
      : setCheckedItems(checkedItems.filter((el) => el !== value));
  };

  return (
    <t.CancelListBox>
      <t.Title>취소 상품 선택</t.Title>
      {products.map((product, i: number) => (
        <t.CancelList key={i}>
          <>
            <t.Checkbox
              type="checkbox"
              value={product.p_No}
              onChange={(e) =>
                changeHandler(e.target.checked, Number(e.target.value))
              }
              checked={checkedItems.includes(product.p_No) ? true : false}
            />
            <Product product={product} />
          </>
        </t.CancelList>
      ))}
    </t.CancelListBox>
  );
};

export default CancelListDetail;
