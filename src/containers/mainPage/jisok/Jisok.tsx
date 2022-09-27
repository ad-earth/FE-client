import { useEffect, useState } from "react";

import * as t from "./jisok.style";
import { MainButton } from "../../../elements/Buttons";
import { theme } from "../../../style/theme";

const Jisok = () => {
  //뷰포트 사이즈에 따라 배너 이미지 변경
  const [viewport, setViewport] = useState(visualViewport.width);
  useEffect(() => {
    const resizeListener = () => {
      setViewport(visualViewport.width);
    };
    window.addEventListener("resize", resizeListener);
  });
  return (
    <t.MainContainer>
      <t.Contents>
        <img
          src="https://cdn.imweb.me/upload/S202001038f7af028ec26d/3731de8998869.png"
          alt="지속 로고"
        />
        <t.Text>
          하나뿐인 지구를 위한 지구샵의 고민
          <br />
          지구를 위한 택배서비스 "지속"런칭
        </t.Text>
        {viewport <= 990 ? (
          <button onClick={() => window.open("http://www.jisok.co.kr/")}>
            더 알아보기
          </button>
        ) : (
          <MainButton
            bgColor={theme.bg18}
            hBgColor={theme.bg19}
            radius="30px"
            onClick={() => window.open("http://www.jisok.co.kr/")}
          >
            더 알아보기
          </MainButton>
        )}
      </t.Contents>
      <t.Background>
        <img
          src="https://cdn.imweb.me/thumbnail/20220208/963fc319098ba.jpg"
          alt="지속 배경 이미지"
        />
      </t.Background>
    </t.MainContainer>
  );
};

export default Jisok;
