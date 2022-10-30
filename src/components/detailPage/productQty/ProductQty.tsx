import * as t from "./productQty.style";
import { useState } from "react";
import { PropsType } from "./productQty.type";
import { useTotalPrice } from "./useTotalPrice";
import { useTotalQty } from "./useTotalQty";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { setOptionData } from "../../../redux/reducer/optionSlice";
import { removeOption } from "../productOptions/optionsHandler";
import {
  CountButton,
  OptionCountButton,
} from "../../../elements/buttons/Buttons";
import Buttons from "../buttons/Buttons";

const ProductQty = (props: PropsType) => {
  const dispatch = useAppDispatch();
  const optionData = useAppSelector((state) => state.optionSlice.optionData);
  const detailData = useAppSelector((state) => state.detailSlice.details);

  const [qty, setQty] = useState<number>(1);
  const totalPrice = useTotalPrice(optionData);
  const totalQty = useTotalQty(optionData);

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
                          setOptionData(removeOption(option.id, optionData))
                        )
                      }
                    />
                  </t.OptWrapper>
                  <t.CountWrapper>
                    <OptionCountButton id={option.id} qty={option.qty} />
                    {(option.price * option.qty).toLocaleString()}원
                  </t.CountWrapper>
                </t.OptBox>
              </div>
            );
          })}
          <t.Price>
            총 상품 금액({totalQty}개)
            <span>{totalPrice?.toLocaleString()}원</span>
          </t.Price>
        </div>
      ) : (
        <div>
          <t.OptBox>
            <t.OptWrapper>수량</t.OptWrapper>
            <t.CountWrapper>
              <CountButton qty={qty} setQty={setQty} />
              {(detailData?.product.p_Cost * qty).toLocaleString()}원
            </t.CountWrapper>
          </t.OptBox>
          <t.Price>
            총 상품 금액({qty}개)
            <span>{(detailData?.product.p_Cost * qty).toLocaleString()}원</span>
          </t.Price>
        </div>
      )}
      <Buttons
        optionList={optionData}
        qty={qty}
        totalPrice={totalPrice}
        totalQty={totalQty}
      />
    </div>
  );
};

export default ProductQty;
