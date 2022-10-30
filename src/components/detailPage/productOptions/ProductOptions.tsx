import { useEffect, useState } from "react";

import * as t from "./productOptions.style";
import { useDiscount } from "../productName/useDiscount";
import { addOption } from "./optionsHandler";
import ProductQty from "../productQty/ProductQty";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { setOptionData } from "../../../redux/reducer/optionSlice";

const ProductOptions = () => {
  const dispatch = useAppDispatch();
  const optionList = useAppSelector((state) => state.optionSlice.optionData);
  const detailData = useAppSelector((state) => state.detailSlice.details);

  const [haveOptions, setHaveOptions] = useState<boolean>(false);
  useEffect(() => {
    if (detailData?.product.p_Option.length > 1) {
      setHaveOptions(true);
    }
  }, [detailData.product.p_Option]);

  const [optionDropDown, setOptionDropDown] = useState<boolean>(false);

  const price = useDiscount(
    detailData?.product.p_Cost,
    detailData?.product.p_Discount
  );

  const [optionId, setOptionId] = useState<number>(0);

  const handleOptionList = (color: string, size: string, extraCost: number) => {
    const { newOption, newOptionId } = addOption(
      color,
      size,
      extraCost,
      price,
      optionList,
      optionId
    );
    dispatch(setOptionData([...optionList, newOption]));
    setOptionId(newOptionId);
  };

  return (
    <t.MainContainer>
      {haveOptions ? (
        <>
          <t.Option>옵션</t.Option>
          <t.OptDropDown
            drop={optionDropDown}
            onClick={() => {
              setOptionDropDown(!optionDropDown);
            }}
          >
            옵션 선택
            {optionDropDown ? <t.IcToggleUp /> : <t.IcToggleDown />}
          </t.OptDropDown>
          {optionDropDown ? (
            <t.DropMenuWrapper>
              {detailData?.product.p_Option?.map((option, idx) => {
                return (
                  <t.DropMenu
                    key={idx}
                    onClick={() => {
                      {
                        option[4] != 0
                          ? handleOptionList(option[0], option[2], option[3])
                          : alert("선택하신 상품은 재고가 없습니다.");
                      }
                      setOptionDropDown(!optionDropDown);
                    }}
                  >
                    <t.ColorOptionWrapper>
                      {option[1] && <t.ColorIcon colorCode={option[1]} />}
                      <t.OptionWrapper>
                        {option[0] && option[0]} {option[2] && option[2]}
                        {option[4] === 0 && "(품절)"}
                        <br />
                        <span>{`+ ${option[3]}원`}</span>
                      </t.OptionWrapper>
                    </t.ColorOptionWrapper>
                  </t.DropMenu>
                );
              })}
            </t.DropMenuWrapper>
          ) : null}
        </>
      ) : null}
      <ProductQty haveOptions={haveOptions} price={price} />
    </t.MainContainer>
  );
};

export default ProductOptions;
