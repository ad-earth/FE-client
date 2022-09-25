import { useState } from "react";

import * as t from "./prodCnt.style";
import { CountButton, OptionCountButton } from "../../../elements/Buttons";
import { PropsType } from "./prodCnt.type";

const ProdCnt = (props: PropsType) => {
  const [qty, setQty] = useState(0);
  return (
    <div>
      <t.OptBox>
        <t.OptWrapper>수량</t.OptWrapper>
        <t.CountWrapper>
          <CountButton qty={qty} setQty={setQty} />
          {props.price * qty && (props.price * qty).toLocaleString()}원
        </t.CountWrapper>
      </t.OptBox>
      <t.Price>
        총 상품 금액({qty}개)
        <span>
          {props.price * qty && (props.price * qty).toLocaleString()}원
        </span>
      </t.Price>
    </div>
  );
};

export const ProdOptCnt = (props: PropsType) => {
  return (
    <div>
      {props.optionList.map((x, idx) => {
        return (
          <div key={x.id}>
            <t.OptBox>
              <t.OptWrapper>
                {x.colorSize.replace("null", "")}
                <t.IcX onClick={() => props.removeOption(x.id)} />
              </t.OptWrapper>
              <t.CountWrapper>
                <OptionCountButton
                  id={x.id}
                  changeOptionList={props.changeOptionList}
                  qty={x.qty}
                />
                {x.price * x.qty && (x.price * x.qty).toLocaleString()}원
              </t.CountWrapper>
            </t.OptBox>
          </div>
        );
      })}
    </div>
  );
};

export default ProdCnt;
