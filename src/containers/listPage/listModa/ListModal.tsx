import * as t from "./ListModal.style";
import { useEffect, useState } from "react";

import Modal from "../../../components/modal/Modal";
import ProdName from "../../../components/detailPage/prodName/ProdName";
import ProdDesc from "../../../components/detailPage/prodDesc/ProdDesc";
import ProdOpt from "../../../components/detailPage/prodOpt/ProdOpt";
import ProdCarousel from "../../../components/detailPage/prodCarousel/ProdCarousel";
import ProdImg from "../../../components/detailPage/prodImg/ProdImg";
import { ListMoType } from "../../../components/listPage/cardIcon/cardIcon.type";
import { CardIconType } from "../../../components/listPage/cardIcon/cardIcon.type";
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

  const [viewport, setViewport] = useState(visualViewport.width);
  useEffect(() => {
    const resizeListener = () => {
      setViewport(visualViewport.width);
    };
    window.addEventListener("resize", resizeListener);
  });
  // console.log(list.p_Thumbnail);

  return (
    <>
      {isOpen && (
        <Modal handleClose={() => handleClose()} isOpen={isOpen}>
          <t.BtnDiv>
            <t.Xbtn sx={{ fontSize: "36px" }} onClick={close} />
            <t.ProdInfoContainer>
              {viewport <= 990 ? (
                <t.Max>
                  <ProdCarousel p_Thumbnail={list.p_Thumbnail} />
                </t.Max>
              ) : (
                <ProdImg p_Thumbnail={list.p_Thumbnail} />
              )}
              <t.InfoWrapper>
                <ProdName
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
                  <ProdDesc desc={list.p_Desc} brand={list.a_Brand} />
                </t.CaroDiv>
                <ProdOpt
                  option={list.p_Option}
                  price={list.p_Cost}
                  discount={list.p_Discount}
                  // like={userLike}
                  likeCnt={list.p_Like}
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
