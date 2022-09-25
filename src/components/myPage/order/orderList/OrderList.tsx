import { useState } from "react";
import { useNavigate } from "react-router-dom";
//style
import * as t from "./orderList.style";
import { theme } from "../../../../style/theme";
//components
import ReviewModal from "../../../modal/reviewModal/ReviewModal";
import Product from "../product/Product";
import { MainButton } from "../../../../elements/Buttons";

interface PropsType {
  p_No: number;
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Option: Array<
    [string | null, string | null, number | null, number | null, number | null]
  >;
  o_Status: string;
}

const OrderList = ({
  products,
  orderNo,
}: {
  products: PropsType[];
  orderNo?: number;
}) => {
  const [infoIsOpen, setInfoIsOpen] = useState<boolean>(false);
  let navigate = useNavigate();
  const [product, setProduct] = useState<PropsType>();

  const ClickEvent = (data: PropsType) => {
    // console.log(data);
    setProduct(data);
    setInfoIsOpen(true);
  };
  return (
    <>
      <ReviewModal
        isOpen={infoIsOpen}
        handleClose={() => setInfoIsOpen(false)}
        product={product}
      />
      {products.map((product, idx: number) => (
        <t.OderListBox key={idx}>
          <t.ProductBox>
            <Product product={product} />
            <t.Status>{product.o_Status}</t.Status>
          </t.ProductBox>
          <t.ButtonBox>
            {product.o_Status === "주문완료" ? (
              <MainButton
                bgColor="transparent"
                radius="30px"
                border={`1px solid ${theme.rgba08}`}
                hBorder={`1px solid ${theme.ls11}`}
                hBgColor="transparent"
                color={`${theme.fc14}`}
                fontSize={`${theme.fc12}`}
                fontWeight="500"
                padding="10px 16px"
                onClick={() => {
                  navigate(`/mypage/cancel-call/${orderNo}`, {
                    state: { products: products, orderNo: orderNo },
                    replace: true,
                  });
                }}
              >
                취소
              </MainButton>
            ) : product.o_Status === "배송완료" ? (
              <MainButton
                radius="30px"
                border="1px solid transparent"
                hBorder="1px solid transparent"
                fontSize={`${theme.fs12}`}
                fontWeight="500"
                padding="10px 16px"
                onClick={() => {
                  ClickEvent(product);
                  // setInfoIsOpen(true);
                  // context({ type: "TOGGLE_MODAL", data: product });
                }}
              >
                구매평 작성
              </MainButton>
            ) : (
              <></>
            )}
          </t.ButtonBox>
        </t.OderListBox>
      ))}
    </>
  );
};
export default OrderList;
