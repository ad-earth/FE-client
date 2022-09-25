import * as t from "./cancelListDetail.style";
import Product from "../../order/product/Product";
import { SetStateAction, Dispatch } from "react";

interface ProductsType {
  p_No: number;
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Option: Array<
    [string | null, string | null, number | null, number | null, number | null]
  >;
}

interface PropsType {
  products: ProductsType[];
  checkedItems: number[];
  setCheckedItems: Dispatch<SetStateAction<number[]>>;
}
const CancelListDetail = ({
  products,
  checkedItems,
  setCheckedItems,
}: PropsType) => {
  const changeHandler = (checked: boolean, value: number) => {
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      // 체크 해제
      setCheckedItems(checkedItems.filter((el) => el !== value));
    }
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
              onChange={(e) => {
                changeHandler(e.target.checked, Number(e.target.value));
              }}
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
