import * as t from "./buttons.style";
import { changeUserOptionQty } from "../../components/detailPage/productOptions/optionHandler";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setOptionData } from "../../redux/reducer/optionSlice";
import { BtnType, PropsType } from "./buttons.type";

export const MainButton = (props: BtnType) => {
  return <t.Btn {...props}>{props.children}</t.Btn>;
};

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

export const OptionCountButton = (props: PropsType) => {
  const dispatch = useAppDispatch();
  const optionList = useAppSelector((state) => state.optionSlice.optionData);

  let qty = props.qty;
  function addQty() {
    qty += 1;
    dispatch(setOptionData(changeUserOptionQty(props.id, qty, optionList)));
  }
  function substractQty() {
    if (qty !== 1) {
      qty -= 1;
      dispatch(setOptionData(changeUserOptionQty(props.id, qty, optionList)));
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
