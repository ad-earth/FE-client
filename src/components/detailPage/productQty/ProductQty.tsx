import { useState } from "react";

import * as t from "./productQty.style";
import { CountButton, OptionCountButton } from "../../../elements/Buttons";
import { PropsType } from "./productQty.type";
import { removeOption } from "../productOptions/optionsHandler";
import { useTotalPrice } from "./useTotalPrice";
import { useTotalQty } from "./useTotalQty";
import Buttons from "../buttons/Buttons";

const ProductQty = (props: PropsType) => {
  const [qty, setQty] = useState<number>(1);
  // 상품 총 가격 계산
  const totalPrice = useTotalPrice(props.optionList);
  // 상품 총 수량 계산
  const totalQty = useTotalQty(props.optionList);

  return (
    <div>
      {props.haveOptions ? (
        <div>
          {props.optionList.map((option) => {
            return (
              <div key={option.id}>
                <t.OptBox>
                  <t.OptWrapper>
                    {option?.color} {option?.size}
                    <t.IcX
                      onClick={() =>
                        props.setOptionList(
                          removeOption(option.id, props.optionList)
                        )
                      }
                    />
                  </t.OptWrapper>
                  <t.CountWrapper>
                    <OptionCountButton
                      id={option.id}
                      qty={option.qty}
                      optionList={props?.optionList}
                      setOptionList={props?.setOptionList}
                    />
                    {(option?.price * option?.qty).toLocaleString()}원
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
              {(props?.price * qty).toLocaleString()}원
            </t.CountWrapper>
          </t.OptBox>
          <t.Price>
            총 상품 금액({qty}개)
            <span>{(props?.price * qty).toLocaleString()}원</span>
          </t.Price>
        </div>
      )}
      <Buttons
        details={props.details}
        optionList={props.optionList}
        totalPrice={totalPrice}
        totalQty={totalQty}
      />
    </div>
  );
};

export default ProductQty;
