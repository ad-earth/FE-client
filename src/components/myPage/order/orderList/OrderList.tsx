import * as t from "./orderList.style";
import { theme } from "../../../../style/theme";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ProductType } from "../../../../containers/myPage/order/order.type";
import Product from "../product/Product";
import { MainButton } from "../../../../elements/buttons/Buttons";
import ReviewModal from "../../../modal/reviewModal/ReviewModal";
import { useAppDispatch } from "../../../../redux/store";
import { setReviewData } from "../../../../redux/reducer/reviewSlice";

const OrderList = (props: { products: ProductType[]; orderNo?: number }) => {
  const { products, orderNo } = props;
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const addReviweClick = (product: ProductType) => {
    dispatch(setReviewData(product));
    setIsModalOpen(!isModalOpen);
  };

  const modal = isModalOpen && (
    <ReviewModal
      isOpen={isModalOpen}
      handleClose={() => setIsModalOpen(false)}
    />
  );

  return (
    <>
      {modal}
      {products.map((list, idx: number) => (
        <t.OderListBox key={idx}>
          <t.ProductBox>
            <Link to={`${orderNo}`} className="link">
              <Product product={list} />
              <t.Status>{list.o_Status}</t.Status>
            </Link>
          </t.ProductBox>
          <t.ButtonBox>
            {/**  주문완료, 취소완료 , 배송완료  */}
            {list.o_Status === "주문완료" && (
              <MainButton
                bgColor="transparent"
                radius="30px"
                border={`1px solid ${theme.rgba08}`}
                hBgColor="transparent"
                hBorder={`1px solid ${theme.rgba08}`}
                hColor={`${theme.fc14}`}
                color={`${theme.fc14}`}
                fontSize={`${theme.fc12}`}
                fontWeight="500"
                padding="10px 16px"
                onClick={() => {
                  navigate(`cancel-call/${orderNo}`, {
                    state: { products: products, orderNo: orderNo },
                    replace: true,
                  });
                }}
              >
                취소
              </MainButton>
            )}
            {list.p_Status && list.r_Status && (
              <MainButton
                radius="30px"
                fontSize={`${theme.fs12}`}
                fontWeight="500"
                padding="10px 16px"
                onClick={() => addReviweClick(list)}
              >
                구매평 작성
              </MainButton>
            )}
          </t.ButtonBox>
        </t.OderListBox>
      ))}
    </>
  );
};
export default OrderList;
