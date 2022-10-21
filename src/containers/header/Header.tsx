import * as t from "./Header.style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { openDB } from "idb";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setCartData } from "../../redux/reducer/cartSlice";
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
  { id: 1, cate: "전체", path: "/list/전체" },
  { id: 2, cate: "욕실", path: "/list/욕실" },
  { id: 3, cate: "주방", path: "/list/주방" },
  { id: 4, cate: "음료용품", path: "/list/음료용품" },
  { id: 5, cate: "생활", path: "/list/생활" },
  { id: 6, cate: "식품", path: "/list/식품" },
  { id: 7, cate: "화장품", path: "/list/화장품" },
  { id: 8, cate: "문구", path: "/list/문구" },
];

const token = localStorage.getItem("token");

const Header = () => {
  const [viewport, setViewport] = useState(visualViewport.width);
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  const { isDropped, dropRef, handleRemove } = useDropDown();
  const dispatch = useAppDispatch();
  const cartData = useAppSelector((state) => state.cartSlice.cartData);
  const handelLogOut = () => {
    localStorage.clear();
  };

  const goHome = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    const resizeListener = () => {
      setViewport(visualViewport.width);
    };
    window.addEventListener("resize", resizeListener);
  });

  // 장바구니 정보 가져오기
  const getCart = async () => {
    let store;
    const db = await openDB("cart", 1, {
      upgrade(db) {
        store = db.createObjectStore("cart", {
          keyPath: "id",
          autoIncrement: true,
        });
      },
    });
    store = db.transaction("cart", "readonly").objectStore("cart");
    const request = store.getAll();
    try {
      request.then((response) => {
        dispatch(setCartData(response));
      });
    } catch (err) {
      console.error(err);
    }
  };

  console.log("thumbnail:", cartData[0].thumbnail);
  useEffect(() => {
    if (token) {
      getCart();
    }
  }, []);

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
            <img src={headLogo} onClick={goHome} />
            <p onClick={handleRemove} ref={dropRef}>
              장보기
            </p>
            <MenuDrop isDropped={isDropped} data={data} />
          </t.LeftDiv>
          <t.RightDiv>
            <SearchBar />
            {!token ? (
              <>
                {viewport >= 990 ? (
                  <>
                    <Link to={"/login"}>
                      <span>로그인</span>
                    </Link>
                    <Link to={"/signup"}>
                      <span>회원가입</span>
                    </Link>

                    <t.ShopIcon
                      onClick={() => alert("로그인 먼저 해주세요!")}
                    />
                  </>
                ) : (
                  <>
                    <t.ShopIcon
                      onClick={() => alert("로그인 먼저 해주세요!")}
                    />
                    <t.SchIcon onClick={() => setSearchIsOpen(true)} />
                    <t.EtcIcon onClick={() => setInfoIsOpen(true)} />
                  </>
                )}
              </>
            ) : (
              <>
                {viewport >= 990 ? (
                  <>
                    <span
                      onClick={() => {
                        handelLogOut();
                        window.location.reload();
                      }}
                    >
                      로그아웃
                    </span>
                    <Link to={"/mypage"}>
                      <t.UserIcon />
                    </Link>
                    <div>
                      <Link to={"/cart"}>
                        <t.CountBadge
                          badgeContent={cartData ? cartData.length : ""}
                        >
                          <t.ShopIcon />
                        </t.CountBadge>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Link to={"/cart"}>
                        <t.CountBadge
                          badgeContent={cartData ? cartData.length : ""}
                        >
                          <t.ShopIcon />
                        </t.CountBadge>
                      </Link>
                    </div>
                    <Link to={"/mypage"}>
                      <t.UserIcon />
                    </Link>
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
