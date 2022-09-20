import { useEffect, useState } from "react";

import * as t from "./prodOpt.style";
import { PropsType } from "./prodOpt.type";
import ProdCnt from "../prodCnt/ProdCnt";

const ProdOpt = (props: PropsType) => {
  console.log(props);
  // 옵션 여부 체크
  const [haveOptions, setHaveOptions] = useState(false);
  useEffect(() => {
    if (props.option && props.option.length) {
      setHaveOptions(true);
    }
  }, [props]);
  console.log(haveOptions);

  // 옵션 선택 시, props 전달용 데이터
  const [option, setOption] = useState([]);
  const [optionId, setOptionId] = useState(1);

  const addOption = (color: string, size: string, price: number) => {
    for (let i = 0; i <= option.length; i++) {
      if (option[0] && color === option[i].color && size === option[i].size) {
        alert("이미 선택한 옵션입니다!");
        return;
      } else {
        const newOption = {
          id: optionId,
          color: color,
          size: size,
          price: price,
        };
        setOptionId(optionId + 1);
        setOption([newOption, ...option]);
      }
    }
  };

  // 옵션 드롭박스
  const [drop, setDrop] = useState(false);

  return (
    <t.MainContainer>
      {haveOptions ? (
        <>
          {" "}
          <t.Option>옵션</t.Option>
          <t.OptDropDown
            drop={drop}
            onClick={() => {
              setDrop(!drop);
            }}
          >
            옵션 (선택)
            {drop ? <t.IcToggleUp /> : <t.IcToggleDown />}
          </t.OptDropDown>
          {drop ? (
            <t.DropMenuWrapper>
              {props.option.map((x, idx) => {
                return (
                  <t.DropMenu
                    key={idx}
                    onClick={() => {
                      addOption(x[0], x[2], x[3]);
                      setDrop(!drop);
                    }}
                  >
                    {x[0]} {x[2] && `/${x[2]}`} <br />
                    <span>{`+ ${x[3]}원`}</span>
                  </t.DropMenu>
                );
              })}
            </t.DropMenuWrapper>
          ) : null}
        </>
      ) : null}
      <ProdCnt
        option={option}
        haveOptions={haveOptions}
        price={props.price}
        like={props.like}
        likeCnt={props.likeCnt}
      />
    </t.MainContainer>
  );
};

export default ProdOpt;
