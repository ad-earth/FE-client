import * as t from "./ScrollHeader.style";
import { Link, useNavigate } from "react-router-dom";
import { useScrHeaderVisible } from "./useScrollHeader";
import scrollLogo from "../../../assets/logo/scrollLogo.png";

const token = localStorage.getItem("token");

const ScrollHeader = () => {
  const { isHeaderVisible } = useScrHeaderVisible();
  const navigate = useNavigate();
  const handelLogOut = () => {
    localStorage.clear();
  };

  return (
    <>
      {!isHeaderVisible ? (
        <t.ScHeadContainer>
          <t.ScHeadWrapper>
            <t.LeftDiv onClick={() => navigate("/list")}>장보기</t.LeftDiv>
            <img src={scrollLogo} />
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
                      <t.CountBadge badgeContent={1}>
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
