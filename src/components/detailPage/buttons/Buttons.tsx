import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as t from "./buttons.style";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { theme } from "../../../style/theme";
import { MainButton } from "../../../elements/Buttons";
import { PropsType } from "./buttons.type";
import { useGetLikeQuery, usePostLikeQuery } from "./useLikeQuery";
import { useAppSelector } from "../../../redux/store";
import { putCartDB } from "../../../shared/utils/putCartDB";
import { putPaymentDB } from "../../../shared/utils/putPaymentDB";
import ChoiceModal from "../../../elements/ChoiceModal";

const Buttons = (props: PropsType) => {
  const { productNo } = useParams();
  const navigate = useNavigate();
  const optionList = useAppSelector((state) => state.optionSlice.optionData);
  const detailData = useAppSelector((state) => state.detailSlice.details);

  const likeData = useGetLikeQuery(productNo);
  const { isLike, likeQty } = useMemo(
    () => ({
      isLike: likeData.data?.data.userLike,
      likeQty: likeData.data?.data.product?.p_Like,
    }),
    [likeData]
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
                  props.totalPrice,
                  props.totalQty
                );
                navigate("/payment");
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
                  props.totalPrice,
                  props.totalQty
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
          onClick={() => {
            mutate();
          }}
        >
          {isLike ? (
            <Heart
              style={{
                color: theme.fc15,
                fill: theme.bg16,
                paddingRight: "4px",
              }}
            />
          ) : (
            <Heart style={{ color: theme.fc04, paddingRight: "4px" }} />
          )}
          {likeQty}
        </MainButton>
      </t.BtnWrapper>
    </div>
  );
};

export default Buttons;
