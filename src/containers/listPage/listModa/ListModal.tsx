import * as t from "./listModal.style";
import { useEffect, useState } from "react";

import Modal from "../../../components/modal/Modal";
import ProductName from "../../../components/detailPage/productName/ProductName";
import ProductSummary from "../../../components/detailPage/productSummary/ProductSummary";
import ProductOptions from "../../../components/detailPage/productOptions/ProductOptions";
import ProductCarousel from "../../../components/detailPage/productCarousel/ProductCarousel";
import ProductImgs from "../../../components/detailPage/productImgs/ProductImgs";
import { ProductsType } from "../cardList/cardList.type";

const ListModal = ({
  list,
  isOpen,
  handleClose,
  userLike,
}: {
  list: ProductsType;
  isOpen: boolean;
  handleClose: () => void;
  userLike: number[];
}) => {
  function close(e: React.MouseEvent) {
    e.preventDefault();
    handleClose();
  }
  const like = userLike.includes(list.p_No);
  const [viewport, setViewport] = useState(visualViewport.width);
  useEffect(() => {
    const resizeListener = () => {
      setViewport(visualViewport.width);
    };
    window.addEventListener("resize", resizeListener);
  });

  return (
    <>
      {isOpen && (
        <Modal handleClose={() => handleClose()} isOpen={isOpen}>
          <t.BtnDiv>
            <t.Xbtn sx={{ fontSize: "36px" }} onClick={close} />
            <t.ProdInfoContainer>
              {viewport <= 990 ? (
                <t.Max>
                  <ProductCarousel imgs={list.p_Thumbnail} />
                </t.Max>
              ) : (
                <ProductImgs imgs={list.p_Thumbnail} />
              )}
              <t.InfoWrapper>
                <ProductName
                  brand={list.a_Brand}
                  name={list.p_Name}
                  best={list.p_Best}
                  new={list.p_New}
                  sale={list.p_Sale}
                  soldout={list.p_Soldout}
                  price={list.p_Cost}
                  discount={list.p_Discount}
                />
                <t.CaroDiv>
                  <ProductSummary desc={list.p_Desc} brand={list.a_Brand} />
                </t.CaroDiv>
                <ProductOptions
                  productNo={list.p_No}
                  options={list.p_Option}
                  price={list.p_Cost}
                  discount={list.p_Discount}
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
