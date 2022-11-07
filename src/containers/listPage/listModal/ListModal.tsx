import * as t from "./listModal.style";
import { useEffect, useState } from "react";
import Modal from "../../../components/modal/Modal";
import ProductName from "../../../components/detailPage/productName/ProductName";
import ProductImgs from "../../../components/detailPage/productImgs/ProductImgs";
import ProductSummary from "../../../components/detailPage/productSummary/ProductSummary";
import ProductOptions from "../../../components/detailPage/productOptions/ProductOptions";
import ProductCarousel from "../../../components/detailPage/productCarousel/ProductCarousel";

const ListModal = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  function close(e: React.MouseEvent) {
    e.preventDefault();
    handleClose();
  }
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
                <ProductOptions />
              </t.InfoWrapper>
            </t.ProdInfoContainer>
          </t.BtnDiv>
        </Modal>
      )}
    </>
  );
};

export default ListModal;
