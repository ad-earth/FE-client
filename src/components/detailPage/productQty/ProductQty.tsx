import * as t from "./productQty.style";
import { useEffect, useState } from "react";
import { PropsType } from "./productQty.type";
import { useTotalOptionPrice } from "./useTotalOptionPrice";
import { useTotalOptionQty } from "./useTotalOptionQty";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { setOptionData } from "../../../redux/reducer/optionSlice";
import { removeUserOption } from "../productOptions/optionHandler";
import {
  CountButton,
  OptionCountButton,
} from "../../../elements/buttons/Buttons";
import Buttons from "../buttons/Buttons";
import { useDiscount } from "../productName/useDiscount";
import CartButtons from "../../modal/optionModal/cartButtons/CartButtons";

const ProductQty = (props: PropsType) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setOptionData([]));
  }, []);

  const optionData = useAppSelector((state) => state.optionSlice.optionData);
  const detailData = useAppSelector((state) => state.detailSlice.details);
  const modalOpen = useAppSelector((state) => state.optionSlice.cartModalOpen);
  const [qty, setQty] = useState<number>(1);
  const price = useDiscount(
    detailData.product.p_Cost,
    detailData.product.p_Discount
  );

  const totalOptionQty = useTotalOptionQty(optionData);
  const totalOptionPrice = useTotalOptionPrice(optionData);
  return (
    <div>
      {props.haveOptions ? (
        <div>
          {optionData.map((option) => {
            return (
              <div key={option.id}>
                <t.OptBox>
                  <t.OptWrapper>
                    {option?.color} {option?.size}
                    <t.IcX
                      onClick={() =>
                        dispatch(
                          setOptionData(removeUserOption(option.id, optionData))
                        )
                      }
                    />
                  </t.OptWrapper>
                  <t.CountWrapper>
                    <OptionCountButton id={option.id} qty={option.qty} />
                    {(option.price * option.qty).toLocaleString()}???
                  </t.CountWrapper>
                </t.OptBox>
              </div>
            );
          })}
          <t.Price>
            ??? ?????? ??????({totalOptionQty}???)
            <span>{totalOptionPrice?.toLocaleString()}???</span>
          </t.Price>
        </div>
      ) : (
        <div>
          <t.OptBox>
            <t.OptWrapper>??????</t.OptWrapper>
            <t.CountWrapper>
              <CountButton qty={qty} setQty={setQty} />
              {(props.price * qty).toLocaleString()}???
            </t.CountWrapper>
          </t.OptBox>
          <t.Price>
            ??? ?????? ??????({qty}???)
            <span>{(props.price * qty).toLocaleString()}???</span>
          </t.Price>
        </div>
      )}
      {modalOpen ? (
        <CartButtons
          optionList={optionData}
          qty={qty}
          totalOptionPrice={totalOptionPrice}
          totalOptionQty={totalOptionQty}
          totalPrice={props.price * qty}
        />
      ) : (
        <Buttons
          optionList={optionData}
          qty={qty}
          totalOptionPrice={totalOptionPrice}
          totalOptionQty={totalOptionQty}
          totalPrice={props.price * qty}
        />
      )}
    </div>
  );
};

export default ProductQty;
