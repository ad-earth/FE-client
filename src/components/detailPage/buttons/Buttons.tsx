import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { openDB } from "idb";

import * as t from "./buttons.style";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { theme } from "../../../style/theme";
import { MainButton } from "../../../elements/buttons/Buttons";
import { PropsType } from "./buttons.type";
import { useGetLikeQuery, usePostLikeQuery } from "./useLikeQuery";
import { useAppSelector } from "../../../redux/store";

const Buttons = (props: PropsType) => {
  const navigate = useNavigate();
  const { productNo } = useParams();
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
  const { mutate } = usePostLikeQuery(Number(productNo));

  async function setCart() {
    let cartOptionList: (string | number)[][] = [];
    let cartOption: (string | number)[];

    optionList.map((option) => {
      if (!option.color && !option.size) {
        cartOptionList = [];
      } else {
        cartOption = [
          option.color,
          option.size,
          option.extraCost,
          option.qty,
          (option.extraCost + option.price) * option.qty,
        ];
        cartOptionList.push(cartOption);
      }
    });
    let store;
    const db = await openDB("cart", 1, {
      upgrade(db) {
        store = db.createObjectStore("cart", {
          keyPath: "id",
          autoIncrement: true,
        });
      },
    });
    store = db.transaction("cart", "readwrite").objectStore("cart");
    store.put({
      id: detailData?.product?.p_No,
      keywordNo: detailData?.k_No,
      prodNo: detailData?.product?.p_No,
      thumbnail: detailData?.product?.p_Thumbnail[0],
      category: detailData?.product?.p_Category,
      brand: detailData?.product?.a_Brand,
      name: detailData?.product?.p_Name,
      price: detailData?.product?.p_Cost,
      discount: detailData?.product?.p_Discount,
      option: cartOptionList,
      totalPrice: props.totalPrice,
      totalCnt: props.totalQty,
    });
  }

  return (
    <div>
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
                setCart();
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
                setCart();
                navigate("/cart");
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
