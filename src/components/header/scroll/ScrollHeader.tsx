import * as t from "./scrollHeader.style";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useScrHeaderVisible } from "./useScrollHeader";
import { CartPayType } from "../../../shared/types/types";
import scrollLogo from "../../../assets/logo/scrollLogo.png";
import { getAllCartDB } from "../../../hooks/useAllCartDB";

const token = localStorage.getItem("token");

const ScrollHeader = () => {
  const { isHeaderVisible } = useScrHeaderVisible();
  const [cartData, setCartData] = useState<CartPayType[]>();
  const navigate = useNavigate();
  const handelLogOut = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const result = getAllCartDB();
    result.then((res) => {
      setCartData(res);
    });
  }, []);

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <>
      {!isHeaderVisible ? (
        <t.ScHeadContainer>
          <t.ScHeadWrapper>
            <t.LeftDiv onClick={() => navigate("/list/전체")}>장보기</t.LeftDiv>
            <img src={scrollLogo} onClick={goHome} />
            <t.RightDiv>
              {!token ? (
                <>
                  <Link to={"/login"}>
                    <span>로그인</span>
                  </Link>
                  <Link to={"/signup"}>
                    <span>회원가입</span>
                  </Link>
                  <t.ShopIcon />
                </>
              ) : (
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
                      <t.CountBadge badgeContent={cartData && cartData.length}>
                        <t.ShopIcon />
                      </t.CountBadge>
                    </Link>
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
