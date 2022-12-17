import * as t from "./buttons.style";
import { BtnType, PropsType, NotFoundType } from "./buttons.type";
import { changeUserOptionQty } from "../../components/detailPage/productOptions/optionHandler";
import { setOptionData } from "../../redux/reducer/optionSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

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

//notFound
export const NotFoundBtn = (props: NotFoundType) => {
  const { type, text, children, onClick } = props;
  if (type === "back") {
    return (
      <t.Btn
        onClick={onClick}
        width="200px"
        radius="5px"
        bgColor="transparent"
        hBgColor="transparent"
        border="1px solid #000"
        hBorder="1px solid #000"
        hColor="#000"
        color="#000"
      >
        {text ? text : children}
      </t.Btn>
    );
  }
  if (type === "home") {
    return (
      <t.Btn
        onClick={onClick}
        width="200px"
        radius="5px"
        bgColor="#000"
        hBgColor="#000"
      >
        {text ? text : children}
      </t.Btn>
    );
  }
};
