import * as t from "./Header.style";
import { useEffect, useState } from "react";

import { SearchBar } from "./../../elements/SearchBar";
import headLogo from "./../../assets/logo/headLogo.png";
import SchProdModal from "../../components/modal/schProdModal/SchProdModal";
import ScrollHeader from "../../components/header/scroll/ScrollHeader";

const Header = () => {
  const [LoginState, setLoginState] = useState(false);
  const [viewport, setViewport] = useState(visualViewport.width);
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);
  const [infoIsOpen, setInfoIsOpen] = useState(false);

  useEffect(() => {
    const resizeListener = () => {
      setViewport(visualViewport.width);
    };
    window.addEventListener("resize", resizeListener);
  });

  return (
    <>
      <SchProdModal
        isOpen={searchIsOpen}
        handleClose={() => setSearchIsOpen(false)}
      />
      <t.HeaderContainer>
        <t.HeaderWrapper>
          <t.LeftDiv>
            <img src={headLogo} />
            <p>장보기</p>
          </t.LeftDiv>
          <t.RightDiv>
            <SearchBar />
            {LoginState ? (
              <>
                {viewport >= 990 ? (
                  <>
                    <span>로그인</span>
                    <span>회원가입</span>
                    <t.ShopIcon />
                  </>
                ) : (
                  <>
                    <t.ShopIcon />
                    <t.SchIcon onClick={() => setSearchIsOpen(true)} />
                    <t.EtcIcon onClick={() => setInfoIsOpen(true)} />
                  </>
                )}
              </>
            ) : (
              <>
                {viewport >= 990 ? (
                  <>
                    <span>로그아웃</span>
                    <t.UserIcon />
                    <div>
                      <t.CountBadge badgeContent={1}>
                        <t.ShopIcon />
                      </t.CountBadge>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <t.CountBadge badgeContent={1}>
                        <t.ShopIcon />
                      </t.CountBadge>
                    </div>
                    <t.UserIcon />
                    <t.SchIcon onClick={() => setSearchIsOpen(true)} />
                    <t.EtcIcon onClick={() => setInfoIsOpen(true)} />
                  </>
                )}
              </>
            )}
          </t.RightDiv>
        </t.HeaderWrapper>
      </t.HeaderContainer>
      <ScrollHeader />
    </>
  );
};

export default Header;
