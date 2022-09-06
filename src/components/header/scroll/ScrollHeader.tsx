import * as t from "./ScrollHeader.style";
import { useState } from "react";
import { useScrHeaderVisible } from "./useScrollHeader";

import scrollLogo from "../../../assets/logo/scrollLogo.png";

const ScrollHeader = () => {
  const [loginState, setLoginState] = useState(false);
  const { isHeaderVisible } = useScrHeaderVisible();

  return (
    <>
      {!isHeaderVisible ? (
        <t.ScHeadContainer>
          <t.ScHeadWrapper>
            <t.LeftDiv>장보기</t.LeftDiv>
            <img src={scrollLogo} />
            <t.RightDiv>
              {loginState ? (
                <>
                  <span>로그인</span>
                  <span>회원가입</span>
                  <t.ShopIcon />
                </>
              ) : (
                <>
                  <span>로그아웃</span>
                  <t.UserIcon />
                  <div>
                    <t.CountBadge badgeContent={1}>
                      <t.ShopIcon />
                    </t.CountBadge>
                  </div>
                </>
              )}
            </t.RightDiv>
          </t.ScHeadWrapper>
        </t.ScHeadContainer>
      ) : null}
    </>
  );
};

export default ScrollHeader;
