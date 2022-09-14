import * as t from "./Header.style";
import { useEffect, useState } from "react";

import { SearchBar } from "./../../elements/SearchBar";
import headLogo from "./../../assets/logo/headLogo.png";
import SchProdModal from "../../components/modal/schProdModal/SchProdModal";
import ScrollHeader from "../../components/header/scroll/ScrollHeader";
import MenuDrop from "../../elements/MenuDrop";
import useDropDown from "../../hooks/useDropDown";
import AsideHeader from "../../components/header/aside/AsideHeader";

let data: {
  id: number;
  cate: string;
  path: string;
}[] = [
  { id: 1, cate: "전체", path: "" },
  { id: 2, cate: "욕실", path: "" },
  { id: 3, cate: "주방", path: "" },
  { id: 4, cate: "음료용품", path: "" },
  { id: 5, cate: "생활", path: "" },
  { id: 6, cate: "식품", path: "" },
  { id: 7, cate: "화장품", path: "" },
  { id: 8, cate: "문구", path: "" },
];

const Header = () => {
  const [LoginState, setLoginState] = useState(false);
  const [viewport, setViewport] = useState(visualViewport.width);
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  const { isDropped, dropRef, handleRemove } = useDropDown();

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
      <AsideHeader
        isOpen={infoIsOpen}
        handleClose={() => setInfoIsOpen(false)}
      />
      <t.HeaderContainer>
        <t.HeaderWrapper>
          <t.LeftDiv>
            <img src={headLogo} />
            <p onClick={handleRemove} ref={dropRef}>
              장보기
            </p>
            <MenuDrop isDropped={isDropped} data={data} />
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
