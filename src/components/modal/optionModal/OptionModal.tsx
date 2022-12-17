import * as t from "./optionModal.style";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import { useGetDetailQuery } from "../../../containers/detailPage/details/useGetDetailQuery";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  setModalOpen,
  setOptionData,
} from "../../../redux/reducer/optionSlice";
import { ModalType } from "./optionModal.type";
import ProductOptions from "../../detailPage/productOptions/ProductOptions";
import { ProductDetailType } from "../../../shared/types/types";

const OptionModal = (props: ModalType) => {
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<ProductDetailType>();
  const modalOpen = useAppSelector((state) => state.optionSlice.cartModalOpen);
  const productData = useGetDetailQuery(String(props.productNo), null);

  useEffect(() => {
    if (props.option) {
      const optList = props.option.map((opt, i) => ({
        id: Number(i),
        color: opt[0],
        colorCode: opt[1],
        size: opt[2],
        extraCost: opt[3],
        price: opt[5] / opt[4],
        qty: opt[4],
      }));
      dispatch(setOptionData(optList));
    }
  }, [props.option]);

  useEffect(() => {
    if (props.productNo) {
      setProduct(productData.data?.data.product);
    }
  }, [productData]);

  return (
    <>
      {modalOpen && (
        <Modal
          handleClose={() => dispatch(setModalOpen(false))}
          isOpen={modalOpen}
        >
          <t.OptContainer>
            <t.OptHeader>
              옵션 변경
              <t.Close onClick={() => dispatch(setModalOpen(false))} />
            </t.OptHeader>
            <t.OptContents>
              <t.ItemInfo>
                <img src={product && product.p_Thumbnail[0]} />
                <t.ItemDesc>
                  [{product && product.a_Brand}] {product && product.p_Name}
                  <span>{product && product.p_Cost}원</span>
                </t.ItemDesc>
              </t.ItemInfo>
              <ProductOptions />
            </t.OptContents>
          </t.OptContainer>
        </Modal>
      )}
    </>
  );
};

export default OptionModal;
