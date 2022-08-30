import { useState } from "react";
import * as t from "./HeaderStyle";

import { SearchBar } from "./../../elements/SearchBar";
import headLogo from "./../../assets/logo/headLogo.png";

interface PropsType {
  LoginState: boolean;
}

const Header = () => {
  const [LoginState, setLoginState] = useState(false);

  return (
    <t.HeaderContainer>
      <t.HeaderWrapper>
        <t.LeftDiv>
          <t.LogoDiv>
            <t.LogoImg src={headLogo} />
          </t.LogoDiv>
          <t.CategorySpan>장보기</t.CategorySpan>
        </t.LeftDiv>
        <t.RightDiv>
          <SearchBar />
          {LoginState ? (
            <>
              <t.LogInSpan>로그인</t.LogInSpan>
              <t.LogOutSpan>회원가입</t.LogOutSpan>
              <t.IconDiv>
                <t.ShopIcon sx={{ fontSize: 32 }} />
              </t.IconDiv>
            </>
          ) : (
            <>
              <t.LogInSpan>로그아웃</t.LogInSpan>
              <t.IconDiv>
                <t.UserIcon sx={{ fontSize: 32, cursor: "pointer" }} />
              </t.IconDiv>
              <t.IconDiv>
                <t.CountBadge badgeContent={1}>
                  <t.ShopIcon sx={{ fontSize: 32, cursor: "pointer" }} />
                </t.CountBadge>
              </t.IconDiv>
            </>
          )}
        </t.RightDiv>
      </t.HeaderWrapper>
    </t.HeaderContainer>
  );
};

export default Header;
