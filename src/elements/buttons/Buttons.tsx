import * as t from "./buttons.style";
import { useEffect, useState } from "react";
import { BtnType, PropsType, NotFoundType } from "./buttons.type";
import { changeUserOptionQty } from "../../components/detailPage/productOptions/optionHandler";
import { setOptionData } from "../../redux/reducer/optionSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export const MainButton = (props: BtnType) => {
  return <t.Btn {...props}>{props.children}</t.Btn>;
};

export const CountButton = (props: PropsType) => {
  let qty = props.qty;

  useEffect(() => {
    props.setQty(qty);
  }, [qty]);

  function addQty() {
    qty += 1;
  }
  function substractQty() {
    if (qty !== 0) {
      qty -= 1;
    }
  }
  return (
    <t.CountBtn>
      <t.Minus onClick={() => substractQty()}>
        <t.RemoveIcon />
      </t.Minus>
      <t.Input value={qty} onChange={(e) => (parseInt(e.target.value) ? props.setQty(parseInt(e.target.value)) : props.setQty(1))} />
      <t.Plus onClick={() => addQty()}>
        <t.AddIcon />
      </t.Plus>
    </t.CountBtn>
  );
};

export const OptionCountButton = (props: PropsType) => {
  const dispatch = useAppDispatch();
  const optionList = useAppSelector((state) => state.optionSlice.optionData);

  const [qty, setQty] = useState<number>(props.qty);

  useEffect(() => {
    dispatch(setOptionData(changeUserOptionQty(props.id, qty, optionList)));
  }, [qty]);

  function addQty() {
    setQty((prev) => prev + 1);
  }
  function substractQty() {
    if (qty !== 1) {
      setQty((prev) => prev - 1);
    }
  }
  return (
    <t.CountBtn>
      <t.Minus onClick={() => substractQty()}>
        <t.RemoveIcon />
      </t.Minus>
      <t.Input value={qty} onChange={(e) => (parseInt(e.target.value) ? setQty(parseInt(e.target.value)) : setQty(1))} />
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
      <t.Btn onClick={onClick} width="200px" radius="5px" bgColor="transparent" hBgColor="transparent" border="1px solid #000" hBorder="1px solid #000" hColor="#000" color="#000">
        {text ? text : children}
      </t.Btn>
    );
  }
  if (type === "home") {
    return (
      <t.Btn onClick={onClick} width="200px" radius="5px" bgColor="#000" hBgColor="#000">
        {text ? text : children}
      </t.Btn>
    );
  }
};
