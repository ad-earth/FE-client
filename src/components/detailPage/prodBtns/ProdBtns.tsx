import { useNavigate, useParams } from "react-router-dom";
import { openDB } from "idb";

import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { theme } from "../../../style/theme";
import { MainButton } from "../../../elements/Buttons";
import * as t from "./prodBtns.style";
import { PropsType } from "./prodBtns.type";
import { useGetLike, useProdLike } from "./useProdLike";
import { useProdInfo } from "../../../containers/detailPage/prodInfo/useProdInfo";

const ProdBtns = (props: PropsType) => {
  const navigate = useNavigate();
  const updateProdLike = useProdLike();
  const { prodNo } = useParams();
  const data = useGetLike(prodNo);
  const prodData = useProdInfo(prodNo);

  async function setCart() {
    let cartOptionList: (string | number)[][] = [];
    let cartOption: (string | number)[];
    props.optionList.map((option) => {
      if (!option.color && !option.size) {
        cartOptionList = [];
      } else {
        cartOption = [
          option.color,
          option.size,
          option.optionPrice,
          option.qty,
        ];
        cartOptionList.push(cartOption);
      }
    });
    const db = await openDB("cart", 1, {});
    let store = db.transaction("cart", "readwrite").objectStore("cart");
    store.put({
      id: prodData.product.p_No,
      keywordNo: prodData.k_No,
      prodNo: prodData.product.p_No,
      thumbnail: prodData.product.p_Thumbnail[0],
      category: prodData.product.p_Category,
      brand: prodData.product.a_Brand,
      name: prodData.product.p_Name,
      price: prodData.product.p_Cost,
      discount: prodData.product.p_Discount,
      option: cartOptionList,
      totalPrice: props.totalPrice,
      totalCnt: props.totalQty,
    });
  }

  return (
    <div>
      <t.BtnWrapper>
        <MainButton
          radius={"30px"}
          onClick={() => {
            setCart();
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
            setCart();
            navigate("/cart");
          }}
        >
          장바구니
        </MainButton>
        <MainButton
          radius={"30px"}
          border={`0.5px solid ${theme.ls03}`}
          bgColor={theme.bg01}
          color={theme.fc09}
          hBorder={`0.5px solid ${theme.ls11}`}
          hBgColor={theme.bg01}
          onClick={() => updateProdLike(props.prodNo)}
        >
          {data && data.userLike ? (
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
          {data.product && data.product.p_Like}
        </MainButton>
      </t.BtnWrapper>
    </div>
  );
};

export default ProdBtns;
