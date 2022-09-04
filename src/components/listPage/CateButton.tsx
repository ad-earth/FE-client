import styled from "styled-components";
import { theme } from "../../style/theme";

export const CateButton = () => {
  const categoryList = [
    "전체",
    "욕실",
    "주방",
    "음료용품",
    "생활",
    "식품",
    "화장품",
    "문구",
  ];

  return (
    <>
      <BtnArea>
        <BtnWrap>
          {categoryList.map((val, i) => {
            return <CBtn key={i}>{val}</CBtn>;
          })}
        </BtnWrap>
      </BtnArea>
      <LineArea>
        <Line />
      </LineArea>
    </>
  );
};

const BtnArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  min-width: 900px;
  height: auto;
  padding: 0 20px 0 20px;
  margin: 1.5rem auto;
`;
const BtnWrap = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  gap: 0.5rem;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0 10px;
`;
const CBtn = styled.button`
  width: 25%;
  padding: 0.4rem 0;
  border: 0.3px solid #dddddd;
  margin: -0 -1px -1px 0;
  vertical-align: middle;
  box-sizing: border-box;
  line-height: 25.6px;
  font-size: inherit;
  font-family: "Noto Sans KR", "sans-serif";
  background-color: ${theme.bg01};
  color: ${theme.fc09};
  :hover {
    background-color: ${theme.bg20};
    color: ${theme.fc21};
    transition: 0.3s;
    cursor: pointer;
  }
`;
const LineArea = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0 40px 0 40px;
`;
const Line = styled.hr`
  width: 100%;
  height: 1px;
  border-color: #fcfdff2e;
  max-width: 1180px;
  min-width: 900px;
  margin: 15px auto;
`;
