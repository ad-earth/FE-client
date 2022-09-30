import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as t from "./CateButton.style";

const CateButton = ({
  // c,
  // param,
  cate,
}: {
  // c: (e: any) => void;
  // param: string;
  cate: string;
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
  const [cateParams, setCateParams] = useState<string>();
  const CateClick = (e: any) => {
    setCateParams(e.target.value);
    console.log(cateParams);
    const category = e.target.value;
    navigate(`/list/${category}`);
  };

  return (
    <>
      <t.BtnArea>
        <t.BtnWrap className="desktop">
          {categoryList.map((val, i) => {
            return (
              <t.CBtn key={i} value={val} onClick={CateClick}>
                {val}
              </t.CBtn>
            );
          })}
        </t.BtnWrap>
      </t.BtnArea>
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
// {
//   categoryList.map((val, i) => {
//     return (
//       <t.CBtn key={i} value={cate} onClick={cateClick}>
//         {val}
//       </t.CBtn>
//     );
//   });
// }

// <t.BtnWrap className="desktop">
//   <t.CBtn value="전체" onClick={cateClick}>
//     전체
//   </t.CBtn>
//   <t.CBtn value="욕실" onClick={cateClick}>
//     욕실
//   </t.CBtn>
//   <t.CBtn value="주방" onClick={cateClick}>
//     주방
//   </t.CBtn>
//   <t.CBtn value="음료용품" onClick={cateClick}>
//     음료용품
//   </t.CBtn>
//   <t.CBtn value="생활" onClick={cateClick}>
//     생활
//   </t.CBtn>
//   <t.CBtn value="식품" onClick={cateClick}>
//     식품
//   </t.CBtn>
//   <t.CBtn value="화장품" onClick={cateClick}>
//     화장품
//   </t.CBtn>
//   <t.CBtn value="문구" onClick={cateClick}>
//     문구
//   </t.CBtn>
// </t.BtnWrap>;
