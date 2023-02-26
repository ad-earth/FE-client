import * as t from "./buttons.style";
import { theme } from "../../../style/theme";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
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
  const navigate = useNavigate();
  const detailData = useAppSelector((state) => state.detailSlice.details);

  const price = useDiscount(detailData.product.p_Cost, detailData.product.p_Discount);
  const optionList = useOptionList(price);

  const { isLike, likeQty, isOptionProduct } = useMemo(
    () => ({
      isLike: detailData?.userLike,
      likeQty: detailData?.product.p_Like,
      isOptionProduct: detailData.product.p_Option.length > 0 ? detailData?.product.p_Option[0][0] !== null || detailData?.product.p_Option[0][2] !== null : false,
    }),
    [detailData]
  );

  const { mutate } = usePostLikeQuery(String(detailData.product.p_No));

  const [open, setOpen] = useState<boolean>(false);
  const token = localStorage.getItem("token");

  const handleClickCart = () => {
    if (!token) {
      toast.error("로그인 후 사용해주세요.");
      return;
    }
    if (isOptionProduct) {
      if (detailData?.product.p_Cnt < props.totalOptionQty) toast.error(`최대 구매 수량은 ${detailData?.product.p_Cnt} 개입니다.`);
      else if (optionList.length) {
        putCartDB(detailData, optionList, props.qty, props.totalOptionPrice, props.totalOptionQty, props.totalPrice);
        setOpen(true);
      } else toast.error("옵션을 선택해주세요.");
    } else {
      if (detailData?.product.p_Cnt < props.qty) toast.error(`최대 구매 수량은 ${detailData?.product.p_Cnt} 개입니다.`);
      else {
        putCartDB(detailData, optionList, props.qty, props.totalOptionPrice, props.totalOptionQty, props.totalPrice);
        setOpen(true);
      }
    }
  };

  const handleClickPay = () => {
    if (!token) {
      toast.error("로그인 후 사용해주세요.");
      return;
    }
    if (isOptionProduct) {
      if (detailData?.product.p_Cnt < props.totalOptionQty) toast.error(`최대 구매 수량은 ${detailData?.product.p_Cnt} 입니다.`);
      else if (optionList.length) {
        putPaymentDB(detailData, optionList, props.qty, props.totalOptionPrice, props.totalOptionQty, props.totalPrice);
        navigate(`/payment`);
      } else toast.error("옵션을 선택해주세요.");
    } else {
      if (detailData?.product.p_Cnt < props.qty) toast.error(`최대 구매 수량은 ${detailData?.product.p_Cnt} 입니다.`);
      else {
        putPaymentDB(detailData, optionList, props.qty, props.totalOptionPrice, props.totalOptionQty, props.totalPrice);
        navigate(`/payment`);
      }
    }
  };

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
            <MainButton radius={"30px"} onClick={() => handleClickPay()}>
              구매하기
            </MainButton>
            <MainButton
              radius={"30px"}
              border={`0.5px solid ${theme.ls03}`}
              bgColor={theme.bg01}
              color={theme.fc09}
              hColor={theme.fc09}
              hBorder={`0.5px solid ${theme.ls11}`}
              hBgColor={theme.bg01}
              onClick={() => handleClickCart()}
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
          hColor={theme.fc09}
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
