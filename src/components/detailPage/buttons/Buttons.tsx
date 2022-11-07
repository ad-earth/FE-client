import * as t from "./buttons.style";
import { theme } from "../../../style/theme";
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PropsType } from "./buttons.type";
import { usePostLikeQuery } from "./usePostLikeQuery";
import { useOptionList } from "./useOptionList";
import { useAppSelector } from "../../../redux/store";
import { putCartDB } from "../../../shared/utils/putCartDB";
import { putPaymentDB } from "../../../shared/utils/putPaymentDB";
import ChoiceModal from "../../../elements/ChoiceModal";
import { MainButton } from "../../../elements/buttons/Buttons";
import { useDiscount } from "../productName/useDiscount";

const Buttons = (props: PropsType) => {
  const { productNo } = useParams();
  const navigate = useNavigate();
  const detailData = useAppSelector((state) => state.detailSlice.details);

  const price = useDiscount(
    detailData.product.p_Cost,
    detailData.product.p_Discount
  );
  const optionList = useOptionList(price);

  const { isLike, likeQty } = useMemo(
    () => ({
      isLike: detailData?.userLike,
      likeQty: detailData?.product.p_Like,
    }),
    [detailData]
  );

  const { mutate } = usePostLikeQuery(productNo);

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <ChoiceModal open={open} />
      <t.BtnWrapper>
        {detailData?.product.p_Soldout ? (
          <MainButton
            width={"200%"}
            radius={"30px"}
            bgColor={theme.bg09}
            hBgColor={theme.bg09}
            onClick={() => {
              alert("이 상품은 현재 재고가 없어 구매가 불가합니다.");
            }}
          >
            품절된 상품입니다.
          </MainButton>
        ) : (
          <>
            <MainButton
              radius={"30px"}
              onClick={() => {
                putPaymentDB(
                  detailData,
                  optionList,
                  props.qty,
                  props.totalOptionPrice,
                  props.totalOptionQty,
                  props.totalPrice
                );
                navigate(`/payment`);
              }}
            >
              구매하기
            </MainButton>
            <MainButton
              radius={"30px"}
              border={`0.5px solid ${theme.ls03}`}
              bgColor={theme.bg01}
              color={theme.fc09}
              hBorder={`0.5px solid ${theme.ls11}`}
              hBgColor={theme.bg01}
              onClick={() => {
                putCartDB(
                  detailData,
                  optionList,
                  props.qty,
                  props.totalOptionPrice,
                  props.totalOptionQty,
                  props.totalPrice
                );
                setOpen(true);
              }}
            >
              장바구니
            </MainButton>
          </>
        )}

        <MainButton
          radius={"30px"}
          border={`0.5px solid ${theme.ls03}`}
          bgColor={theme.bg01}
          color={theme.fc09}
          hBorder={`0.5px solid ${theme.ls11}`}
          hBgColor={theme.bg01}
          onClick={() => mutate()}
        >
          {isLike ? <t.HeartIcon /> : <t.NoHeartIcon />}
          {likeQty}
        </MainButton>
      </t.BtnWrapper>
    </div>
  );
};

export default Buttons;
