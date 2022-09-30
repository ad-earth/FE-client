import { useEffect, useState } from "react";

import * as t from "./prodOpt.style";
import { PropsType } from "./prodOpt.type";
import ProdCnt, { ProdOptCnt } from "../prodCnt/ProdCnt";
import ProdBtns from "../prodBtns/ProdBtns";

const ProdOpt = (props: PropsType) => {
  // 옵션 여부 체크
  const [haveOptions, setHaveOptions] = useState(false);
  useEffect(() => {
    if (props.option && props.option.length !== 0) {
      setHaveOptions(true);
    }
  }, [props.option]);
  // 상품 가격 할인율 계산
  let price = props.price * (1 - props.discount / 100);

  // 옵션 드롭박스 on & off
  const [drop, setDrop] = useState(false);

  // 옵션 선택 시, props 전달용 옵션 리스트 생성
  const [optionList, setOptionList] = useState([]);
  const [optionId, setOptionId] = useState(0);

  // 옵션 리스트 추가
  function addOptionList(color: string, size: string, optionPrice: number) {
    let isOption = false;
    let qty = 0;
    optionList.map((option) => {
      if (option.colorSize === color + size) {
        isOption = true;
      }
    });
    if (isOption) {
      alert("이미 선택한 옵션입니다.");
    } else {
      const newOption = {
        id: optionId,
        color: color,
        size: size,
        colorSize: color + size,
        optionPrice: optionPrice,
        price: price + optionPrice,
        qty: qty,
      };
      setOptionList([...optionList, newOption]);
      setOptionId(optionId + 1);
    }
  }

  // 옵션 리스트 삭제
  function removeOption(targerId: number) {
    let newOptionList = optionList.filter((option) => option.id !== targerId);
    setOptionList(newOptionList);
  }

  // 상품 옵션 수량 수정
  function changeOptionList(newOptionId: number, qty: number) {
    let index = optionList.findIndex((option) => option.id === newOptionId);
    let newOptionList = [...optionList];
    newOptionList[index].qty = qty;
    setOptionList(newOptionList);
  }
  // 상품 총 가격 계산
  const [totalPrice, setTotalPrice] = useState(0);
  function getTotalPrice() {
    let sum = 0;
    optionList.map((option) => {
      sum += option.price * option.qty;
    });
    setTotalPrice(sum);
  }
  // 상품 총 수량 계산
  const [totalQty, setTotalQty] = useState(0);
  function getTotalQty() {
    let sum = 0;
    optionList.map((option) => {
      sum += option.qty;
    });
    setTotalQty(sum);
  }
  // 옵션 리스트 변경 반영
  useEffect(() => {
    getTotalPrice();
    getTotalQty();
  }, [optionList]);

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
              {props.option.map((x, idx) => {
                return (
                  <t.DropMenu
                    key={idx}
                    onClick={() => {
                      {
                        x[4] != 0
                          ? addOptionList(x[0], x[2], x[3])
                          : alert("선택하신 상품은 재고가 없습니다.");
                      }
                      setDrop(!drop);
                    }}
                  >
                    <t.ColorOptionWrapper>
                      {x[1] === null ? null : (
                        <t.ColorIcon colorCode={x[1] && x[1]} />
                      )}
                      <t.OptionWrapper>
                        {x[0] && x[0]} {x[2] && x[2]}{" "}
                        {x[4] === 0 ? "(품절)" : null}
                        <br />
                        <span>{`+ ${x[3]}원`}</span>
                      </t.OptionWrapper>
                    </t.ColorOptionWrapper>
                  </t.DropMenu>
                );
              })}
            </t.DropMenuWrapper>
          ) : null}
        </>
      ) : null}
      {haveOptions ? (
        <>
          <ProdOptCnt
            optionList={optionList}
            changeOptionList={changeOptionList}
            removeOption={removeOption}
          />
          <t.Price>
            총 상품 금액({totalQty}개)
            <span>{totalPrice && totalPrice.toLocaleString()}원</span>
          </t.Price>
        </>
      ) : (
        <ProdCnt price={price} setTotalQty={setTotalQty} />
      )}
      <ProdBtns
        prodNo={props.prodNo}
        totalPrice={totalPrice}
        totalQty={totalQty}
        optionList={optionList}
      />
    </t.MainContainer>
  );
};

export default ProdOpt;
