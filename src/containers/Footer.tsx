import styled from "styled-components";
import footLogo from "./../assets/logo/footLogo.png"

const Footer = () => {
  return (
    <FooterContainer>
      <FootInfoDiv>
        <SmallInfo>대표전화</SmallInfo>
        <BigInfo>☎︎ 02-123-4567</BigInfo>
        <SmallInfo><strong>운영시간</strong> 월-금 10시~18시 / <strong>점심시간</strong> 12시~13시</SmallInfo>
        <SmallInfo>* 배송 및 온라인 고객센터 : 주말, 공휴일 휴무</SmallInfo>
      </FootInfoDiv>
      <FootGrWrapper>
        <FootWrapper>
          <FootLogoDiv>
            <FootLogoImg src={footLogo}/>
          </FootLogoDiv>
          <FootTextDiv>
            <FootTopDiv>
              <TopTextSpan>이용약관 | 개인정보처리방침 | 도매 전용 B2B몰</TopTextSpan>
            </FootTopDiv>
            <FootBottomDiv>
              <BotTextSpan>• 회사명 : 주식회사 광고지구 | 대표자 : 광고지구</BotTextSpan>
              <BotTextSpan>• 주소 : 서울특별시 광고구 지구로 1길 23, 1층 | 이메일 : adEarth@jigushop.co.kr | 팩스 : 1234-1234-1234</BotTextSpan>
              <BotTextSpan>• 사업자등록번호 : 000-00-00000 | 통신판매업신고 : 제0000-서울00-0000</BotTextSpan>
              <BotTextSpan>• 개인정보보호책임자 : 광고지구 | 고객센터: 02-123-4567 | 호스팅 제공자 : (주)광고지구</BotTextSpan>
            </FootBottomDiv>
          </FootTextDiv>
        </FootWrapper>
      </FootGrWrapper>
    </FooterContainer>
  )
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
`
const FootInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 120px;
  margin: auto;
  padding: 40px 0;
`
const SmallInfo = styled.span`
  width: 100%;
  font-size: ${({theme}) => theme.fontSize.medium};
  font-weight: 400;
  color: ${({theme}) => theme.colors.gray1};
`
const BigInfo = styled.span`
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.gray1};
`

const FootGrWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({theme}) => theme.colors.green2};
`
const FootWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 80%;
  margin: auto;
  padding: 20px 0;
`
const FootLogoDiv = styled.div`
  width: 20%;
  margin: auto;
`
const FootLogoImg = styled.img`
  width: 100%;
  object-fit: contain;
`
const FootTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-left: 60px;
`
const FootTopDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
`
const TopTextSpan = styled.span`
  width: 100%;
  font-size: ${({theme}) => theme.fontSize.medium};
  font-weight: 600;
  color: #fff;
`
const FootBottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`
const BotTextSpan = styled.span`
  width: 100%;
  font-size: ${({theme}) => theme.fontSize.medium};
  font-weight: 400;
  color: #fff;
`
