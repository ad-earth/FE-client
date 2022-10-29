import { useNavigate, Link } from "react-router-dom";
import * as t from "./orderList.style";
import { theme } from "../../../../style/theme";
import Product from "../product/Product";
import { MainButton } from "../../../../elements/buttons/Buttons";
import { ProductType } from "../../../../containers/myPage/order/order.type";
import { PropsType } from "./orderList.type";
import { useAppDispatch } from "../../../../redux/store";
import { setReviewData } from "../../../../redux/reducer/reviewSlice";
import ReviewModal from "../../../modal/reviewModal/ReviewModal";
import { useState } from "react";

const OrderList = ({ products, orderNo }: PropsType) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 리뷰모달

  //구매평 작성 클릭 => 모달 open
  const dispatch = useAppDispatch();
  const addReviweClick = (product: ProductType) => {
    dispatch(setReviewData(product));
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      {/* 리뷰모달  */}
      <ReviewModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      />
      {/* 주문정보 리스트  */}
      {products.map((list, idx: number) => (
        <t.OderListBox key={idx}>
          <t.ProductBox>
            <Link to={`${orderNo}`} className="link">
              <Product product={list} />
              <t.Status>{list.o_Status}</t.Status>
            </Link>
          </t.ProductBox>
          <t.ButtonBox>
            {list.o_Status === "주문완료" ? (
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
                  navigate(`cancel-call/${orderNo}`, {
                    state: { products: products, orderNo: orderNo },
                    replace: true,
                  });
                }}
              >
                취소
              </MainButton>
            ) : list.o_Status === "배송완료" && list.r_Status ? (
              <MainButton
                radius="30px"
                border="1px solid transparent"
                hBorder="1px solid transparent"
                fontSize={`${theme.fs12}`}
                fontWeight="500"
                padding="10px 16px"
                onClick={() => addReviweClick(list)}
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
