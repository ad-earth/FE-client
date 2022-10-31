import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as t from "./cateButton.style";

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
  const [active, setActive] = useState<string>("");

  const CateClick = (e: React.FormEvent<HTMLButtonElement>) => {
    const category = e.currentTarget.value;
    navigate(`/list/${category}`);
    setPage(1);
    setSort(`recent`);
    setActive(e.currentTarget.value);
  };

  return (
    <>
      <t.BtnArea>
        <t.BtnWrap>
          {categoryList.map((val: string, i: number) => {
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
      </t.BtnArea>
      <t.SBtnArea>
        <t.BtnWrap>
          {categoryList.map((val: string, i: number) => {
            return (
              <t.SmallCBtn
                key={i}
                value={val}
                onClick={CateClick}
                active={val === active ? true : false}
              >
                {val}
              </t.SmallCBtn>
            );
          })}
          <t.LineArea />
        </t.BtnWrap>
      </t.SBtnArea>
    </>
  );
};

export default CateButton;
