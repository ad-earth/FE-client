import * as t from "./buttons.style";

import { changeOption } from "../../components/detailPage/productOptions/optionsHandler";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setOptionData } from "../../redux/reducer/optionSlice";
import { BtnType, PropsType } from "./buttons.type";

export const MainButton = (props: BtnType) => {
  return <t.Btn {...props}>{props.children}</t.Btn>;
};

// 수량 수정 버튼
export const CountButton = (props: PropsType) => {
  let qty = props.qty;
  function addQty() {
    qty += 1;
    props.setQty(qty);
  }
  function substractQty() {
    if (qty !== 0) {
      qty -= 1;
      props.setQty(qty);
    }
  }
  return (
    <t.CountBtn>
      <t.Minus onClick={() => substractQty()}>
        <t.RemoveIcon />
      </t.Minus>
      <t.Input>{qty}</t.Input>
      <t.Plus onClick={() => addQty()}>
        <t.AddIcon />
      </t.Plus>
    </t.CountBtn>
  );
};

// 수량 수정 버튼(상품 옵션이 있는 경우)
export const OptionCountButton = (props: PropsType) => {
  const dispatch = useAppDispatch();
  const optionList = useAppSelector((state) => state.optionSlice.optionData);

  let qty = props.qty;
  function addQty() {
    qty += 1;
    dispatch(setOptionData(changeOption(props.id, qty, optionList)));
  }
  function substractQty() {
    if (qty !== 1) {
      qty -= 1;
      dispatch(setOptionData(changeOption(props.id, qty, optionList)));
    }
  }
  return (
    <t.CountBtn>
      <t.Minus onClick={() => substractQty()}>
        <t.RemoveIcon />
      </t.Minus>
      <t.Input>{qty}</t.Input>
      <t.Plus onClick={() => addQty()}>
        <t.AddIcon />
      </t.Plus>
    </t.CountBtn>
  );
};
