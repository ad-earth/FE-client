import { useState } from "react";
import styled from "styled-components";

import { SearchBar } from "../elements/SearchBar";
import headLogo from "./../assets/logo/headLogo.png"

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';
interface PropsType {
  LoginState: boolean;
}

const Header = () => {
  const [LoginState, setLoginState] = useState(false);

  return (
  <HeaderContainer>
    <LeftDiv>
      <LogoDiv>
        <LogoImg src={headLogo}/>
      </LogoDiv>
      <CategorySpan>장보기</CategorySpan>
    </LeftDiv>
    <RightDiv>
      <SearchBar/>
      {LoginState? 
      (<>
        <LogInSpan>로그인</LogInSpan>
        <LogOutSpan>회원가입</LogOutSpan>
        <IconDiv>
          <ShopIcon sx={{ fontSize: 32 }}/>
        </IconDiv>
      </>):
      (<>
        <LogInSpan>로그아웃</LogInSpan>
        <IconDiv>
          <UserIcon sx={{ fontSize: 32, cursor: "pointer" }}/>
        </IconDiv>
        <IconDiv>
          <CountBadge badgeContent={1}>
            <ShopIcon sx={{ fontSize: 32, cursor: "pointer" }}/>
          </CountBadge>
        </IconDiv>
      </>)}
    </RightDiv>
  </HeaderContainer>
  )
};

export default Header;

const HeaderContainer = styled.div`
width:1200px;
margin: 0 auto;
display: flex;
height: 80px;
justify-content: space-between;
`
const LeftDiv = styled.div`
display: flex;
float: left;
`
const LogoDiv = styled.div`
width: 160px;
margin: auto 10px;
`
const LogoImg = styled.img`
width: 100%;
object-fit: contain;
`
const CategorySpan = styled.span`
font-size: ${({theme}) => theme.fontSize.medium};
color: ${({theme}) => theme.colors.green2};
margin: 30px 10px;
`
const RightDiv = styled.div`
display: flex;
flat: right;
`
const LogInSpan = styled.span`
font-size: ${({theme}) => theme.fontSize.medium};
color: ${({theme}) => theme.colors.green2};
margin: auto 10px;
`
const LogOutSpan = styled.span`
font-size: ${({theme}) => theme.fontSize.medium};
color: ${({theme}) => theme.colors.green2};
margin: auto 10px;
`
const IconDiv = styled.div`
margin: 22px 10px 0 0;
`
const CountBadge = styled(Badge)({
  "& .MuiBadge-badge": { 
    top: 30,
    color: "white",
    backgroundColor: "#646464",
    marginRight: "5px"
  }
});
const UserIcon = styled(PersonOutlineOutlinedIcon)({
  color: '#00913a',
})
const ShopIcon = styled(ShoppingBagOutlinedIcon)({
  color: '#00913a',
  })
