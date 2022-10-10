import { useNavigate } from "react-router-dom";
import * as t from "./CateButton.style";

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
  const CateClick = (e: any) => {
    const category = e.target.value;
    navigate(`/list/${category}`);
  };

  return (
    <>
      {}
      <t.BtnWrap className="desktop">
        {categoryList.map((val, i) => {
          return (
            <t.CBtn key={i} value={val} onClick={CateClick}>
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
    </>
  );
};

export default CateButton;
