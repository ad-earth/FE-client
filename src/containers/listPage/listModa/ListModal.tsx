import * as t from "./ListModal.style";
import { useEffect, useState } from "react";

import Modal from "../../../components/modal/Modal";
import ProdImg from "../../../components/detailPage/prodImg/ProdImg";
import ProdName from "../../../components/detailPage/prodName/ProdName";
import ProdDesc from "../../../components/detailPage/prodDesc/ProdDesc";
import ProdOpt from "../../../components/detailPage/prodOpt/ProdOpt";
import ProdCarousel from "../../../components/detailPage/prodCarousel/ProdCarousel";

interface ModalType {
  isOpen: boolean;
  handleClose: () => void;
}
const ListModal = (props: ModalType) => {
  function close(e: React.MouseEvent) {
    e.preventDefault();
    props.handleClose();
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
      {props.isOpen && (
        <Modal handleClose={() => props.handleClose()} isOpen={props.isOpen}>
          <t.BtnDiv>
            <t.Xbtn sx={{ fontSize: "36px" }} onClick={close} />
            <t.ProdInfoContainer>
              {viewport <= 990 ? (
                <t.Max>
                  <ProdCarousel />
                </t.Max>
              ) : (
                <ProdImg />
              )}
              <t.InfoWrapper>
                {/* <ProdName /> */}
                <t.CaroDiv>{/* <ProdDesc /> */}</t.CaroDiv>
                <ProdOpt />
              </t.InfoWrapper>
            </t.ProdInfoContainer>
          </t.BtnDiv>
        </Modal>
      )}
    </>
  );
};

export default ListModal;
