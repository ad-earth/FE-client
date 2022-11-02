import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editPagNo, editSort } from "../../../redux/reducer/listSlice";
import { useAppDispatch } from "../../../redux/store";

import * as t from "./cateButton.style";

const CateButton = () => {
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
  const dispatch = useAppDispatch();

  const CateClick = (e: React.FormEvent<HTMLButtonElement>) => {
    const category = e.currentTarget.value;
    navigate(`/list/${category}`);
    dispatch(editPagNo(1));
    dispatch(editSort("recent"));
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
