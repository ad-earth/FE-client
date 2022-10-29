import { useState } from "react";
import { MainButton } from "../../../../elements/buttons/Buttons";
import ReviewModal from "../../../modal/reviewModal/ReviewModal";
import Product from "../product/Product";
import * as t from "./orderListDetail.style";
import { useAppDispatch } from "../../../../redux/store";
import { setReviewData } from "../../../../redux/reducer/reviewSlice";
import { useViewport } from "../../../../hooks/useViewport";
import { PropsType } from "./orderListDetail.type";

const OrderListDetail = ({ products }: { products: PropsType[] }) => {
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
                <Product product={product} />
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
                {product.o_Status === "배송완료" && (
                  <t.ButtonBox>
                    <MainButton
                      radius="50px"
                      onClick={() => addReviweClick(product)}
                    >
                      구매평 작성
                    </MainButton>
                  </t.ButtonBox>
                )}
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
