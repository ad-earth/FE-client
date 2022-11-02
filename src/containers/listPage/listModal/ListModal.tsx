import * as t from "./listModal.style";
import { useEffect, useState } from "react";

import Modal from "../../../components/modal/Modal";
import ProductName from "../../../components/detailPage/productName/ProductName";
import ProductSummary from "../../../components/detailPage/productSummary/ProductSummary";
import ProductOptions from "../../../components/detailPage/productOptions/ProductOptions";
import ProductCarousel from "../../../components/detailPage/productCarousel/ProductCarousel";
import ProductImgs from "../../../components/detailPage/productImgs/ProductImgs";
import { ProductsType } from "../cardList/cardList.type";
import { useGetDetailQuery } from "../../detailPage/details/useGetDetailQuery";

const ListModal = ({
  list,
  isOpen,
  handleClose,
  userLike,
  productNo,
}: {
  list: ProductsType;
  isOpen: boolean;
  handleClose: () => void;
  userLike: number[];
  productNo: number;
}) => {
  function close(e: React.MouseEvent) {
    e.preventDefault();
    handleClose();
  }
  // const data = useGetDetailQuery(String(productNo));
  // const like = userLike.includes(list.p_No);
  const [viewport, setViewport] = useState(visualViewport.width);
  useEffect(() => {
    const resizeListener = () => {
      setViewport(visualViewport.width);
    };
    window.addEventListener("resize", resizeListener);
  });
  // console.log(productNo);

  return (
    <>
      {isOpen && (
        <Modal handleClose={() => handleClose()} isOpen={isOpen}>
          <t.BtnDiv>
            <t.Xbtn sx={{ fontSize: "36px" }} onClick={close} />
            <t.ProdInfoContainer>
              {viewport <= 990 ? (
                <t.Max>
                  <ProductCarousel />
                </t.Max>
              ) : (
                <ProductImgs />
              )}
              <t.InfoWrapper>
                <ProductName />
                <t.CaroDiv>
                  <ProductSummary />
                </t.CaroDiv>
                <ProductOptions
                // productNo={list.p_No}
                // options={list.p_Option}
                // price={list.p_Cost}
                // discount={list.p_Discount}
                // likeCnt={list.p_Like}
                // like={like}
                />
              </t.InfoWrapper>
            </t.ProdInfoContainer>
          </t.BtnDiv>
        </Modal>
      )}
    </>
  );
};

export default ListModal;
