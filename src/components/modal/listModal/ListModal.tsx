import * as t from "./listModal.style";
import { useEffect, useMemo, useState } from "react";
import Modal from "../Modal";
import ProductName from "../../detailPage/productName/ProductName";
import ProductImgs from "../../detailPage/productImgs/ProductImgs";
import ProductSummary from "../../detailPage/productSummary/ProductSummary";
import ProductOptions from "../../detailPage/productOptions/ProductOptions";
import ProductCarousel from "../../detailPage/productCarousel/ProductCarousel";
import { useAppSelector } from "../../../redux/store";
import { usePostLikeQuery } from "../../detailPage/buttons/usePostLikeQuery";

const ListModal = ({
  isOpen,
  handleClose,
  pNo,
}: {
  isOpen: boolean;
  handleClose: () => void;
  pNo: number;
}) => {
  function close(e: React.MouseEvent) {
    e.preventDefault();
    handleClose();
  }
  const [viewport, setViewport] = useState(visualViewport.width);
  const detailData = useAppSelector((state) => state.detailSlice.details);
  // const { isLike, likeQty } = useMemo(
  //   () => ({
  //     isLike: detailData?.userLike,
  //     likeQty: detailData?.product.p_Like,
  //   }),
  //   [detailData]
  // );
  // const { refetch } = usePostLikeQuery(String(pNo));
  useEffect(() => {
    const resizeListener = () => {
      setViewport(visualViewport.width);
    };
    window.addEventListener("resize", resizeListener);
  });

  // useEffect(() => {
  //   mutate();
  // }, []);
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
