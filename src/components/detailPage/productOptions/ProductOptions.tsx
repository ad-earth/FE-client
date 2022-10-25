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

  // 옵션 유무 체크
  const [haveOptions, setHaveOptions] = useState<boolean>(false);
  useEffect(() => {
    if (detailData?.product.p_Option.length > 1) {
      setHaveOptions(true);
    }
  }, [detailData.product.p_Option]);

  // 옵션 드롭다운
  const [drop, setDrop] = useState<boolean>(false);

  // 상품 가격 계산
  const price = useDiscount(
    detailData?.product.p_Cost,
    detailData?.product.p_Discount
  );

  // 선택한 옵션 리스트
  // const [optionList, setOptionList] = useState<OptionListType>([]);
  const [optionId, setOptionId] = useState<number>(0);

  // 옵션 리스트에 옵션 추가
  const handleOption = (color: string, size: string, extraCost: number) => {
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
            drop={drop}
            onClick={() => {
              setDrop(!drop);
            }}
          >
            옵션 선택
            {drop ? <t.IcToggleUp /> : <t.IcToggleDown />}
          </t.OptDropDown>
          {drop ? (
            <t.DropMenuWrapper>
              {detailData?.product.p_Option?.map((option, idx) => {
                return (
                  <t.DropMenu
                    key={idx}
                    onClick={() => {
                      {
                        option[4] != 0
                          ? handleOption(option[0], option[2], option[3])
                          : alert("선택하신 상품은 재고가 없습니다.");
                      }
                      setDrop(!drop);
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
