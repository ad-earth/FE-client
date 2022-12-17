import { useState } from "react";
import { MainButton } from "../../../../elements/buttons/Buttons";
import ReviewModal from "../../../modal/reviewModal/ReviewModal";
import Product from "../product/Product";
import * as t from "./orderListDetail.style";
import { useAppDispatch } from "../../../../redux/store";
import { setReviewData } from "../../../../redux/reducer/reviewSlice";
import { useViewport } from "../../../../hooks/useViewport";
import { PropsType } from "./orderListDetail.type";
import { Link, useNavigate } from "react-router-dom";
import { theme } from "../../../../style/theme";

const OrderListDetail = ({
  products,
  orderNo,
}: {
  products: PropsType[];
  orderNo: number;
}) => {
  const navigate = useNavigate();
  const viewport = useViewport();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 모달
  //구매평 작성 클릭 => 모달 open
  const dispatch = useAppDispatch();
  const addReviweClick = (product: PropsType) => {
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
      <t.Table>
        <t.Thead>
          <tr>
            <th>상품정보</th>
            <th>배송비</th>
            <th>진행상태</th>
          </tr>
        </t.Thead>

        <t.TBody>
          {products.map((product: PropsType, i: number) => (
            <tr key={i}>
              <td>
                {product.p_Status ? (
                  <Link to={`/detail/${product.p_No}`} className="link">
                    <Product product={product} />
                  </Link>
                ) : (
                  <span onClick={() => alert("노출되지 않은 상품입니다.")}>
                    <Product product={product} />
                  </span>
                )}
              </td>
              {i === 0 ? (
                <td rowSpan={products.length} className="center">
                  무료
                </td>
              ) : (
                <td style={{ display: "none" }}></td>
              )}
              <td className="buttonBox">
                <span>{product.o_Status}</span>
                <t.ButtonBox>
                  {/* 주문완료, 취소완료 , 배송완료  */}
                  {product.o_Status === "주문완료" && (
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
                      // padding="10px 16px"
                      onClick={() => {
                        navigate(`/mypage/cancel-call/${orderNo}`, {
                          state: { products: products, orderNo: orderNo },
                          replace: true,
                        });
                      }}
                    >
                      취소
                    </MainButton>
                  )}
                  {product.p_Status && product.r_Status && (
                    <MainButton
                      radius="30px"
                      fontSize={`${theme.fs12}`}
                      fontWeight="500"
                      onClick={() => addReviweClick(product)}
                    >
                      구매평 작성
                    </MainButton>
                  )}
                </t.ButtonBox>
              </td>
            </tr>
          ))}
          {viewport <= 990 && (
            <t.IsMobile>
              <td>
                배송비 <strong>무료</strong>
              </td>
            </t.IsMobile>
          )}
        </t.TBody>
      </t.Table>
    </>
  );
};

export default OrderListDetail;
