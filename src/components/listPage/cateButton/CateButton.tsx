import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as t from "./CateButton.style";

const CateButton = ({
  setPage,
  setSort,
}: {
  setPage: Dispatch<SetStateAction<number>>;
  setSort: Dispatch<SetStateAction<string>>;
}) => {
  const categoryList: string[] = [
    "전체",
    "욕실",
    "주방",
    "음료용품",
    "생활",
    "식품",
    "화장품",
    "문구",
  ];
  const navigate = useNavigate();
  const [active, setActive] = useState();

  const CateClick = (e: any) => {
    const category = e.target.value;
    navigate(`/list/${category}`);
    setPage(1);
    setSort(`like`);
    setActive(() => {
      return e.target.value;
    });
    console.log(category);
  };
  console.log(active);

  return (
    <>
      <t.BtnArea className="desktop">
        <t.BtnWrap>
          {categoryList.map((val, i) => {
            return (
              <t.CBtn
                key={i}
                value={val}
                onClick={CateClick}
                active={val === active ? true : false}
              >
                {val}
              </t.CBtn>
            );
          })}
        </t.BtnWrap>

        <t.BtnWrap className="mobile">
          {categoryList.map((val, i) => {
            return (
              <t.SmallCBtn key={i} value={val} onClick={CateClick}>
                {val}
              </t.SmallCBtn>
            );
          })}
          <t.LineArea />
        </t.BtnWrap>
      </t.BtnArea>
    </>
  );
};

export default CateButton;
