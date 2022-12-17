import * as t from "./cartButtons.style";
import { theme } from "../../../../style/theme";
import { MainButton } from "../../../../elements/buttons/Buttons";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import {
  setModalOpen,
  setReplace,
} from "../../../../redux/reducer/optionSlice";
import { PropsType } from "../../../detailPage/buttons/buttons.type";
import { useDiscount } from "../../../detailPage/productName/useDiscount";
import { useOptionList } from "../../../detailPage/buttons/useOptionList";
import { putCartDB } from "../../../../shared/utils/putCartDB";

const CartButtons = (props: PropsType) => {
  const dispatch = useAppDispatch();
  const detailData = useAppSelector((state) => state.detailSlice.details);

  const price = useDiscount(
    detailData.product.p_Cost,
    detailData.product.p_Discount
  );
  const optionList = useOptionList(price);

  return (
    <t.OptBtn>
      <MainButton
        width={"49%"}
        fontWeight={"normal"}
        radius={"30px"}
        border={`0.5px solid ${theme.ls03}`}
        bgColor={theme.bg01}
        color={theme.fc14}
        hBorder={`0.5px solid ${theme.ls11}`}
        hBgColor={theme.bg01}
        onClick={() => dispatch(setModalOpen(false))}
      >
        취소
      </MainButton>
      <MainButton
        width={"49%"}
        fontWeight={"normal"}
        radius={"30px"}
        onClick={() => {
          putCartDB(
            detailData,
            optionList,
            props.qty,
            props.totalOptionPrice,
            props.totalOptionQty,
            props.totalPrice
          );
          dispatch(setReplace(true));
          dispatch(setModalOpen(false));
        }}
      >
        변경
      </MainButton>
    </t.OptBtn>
  );
};

export default CartButtons;
