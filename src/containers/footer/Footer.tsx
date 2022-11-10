import * as t from "./footer.style";
import footLogo from "./../../assets/logo/footLogo.png";

const Footer = () => {
  return (
    <t.FooterContainer>
      <t.FootInfo>
        <t.Contact>
          <span>대표전화</span>
          <p>☎︎ 02-123-4567</p>
        </t.Contact>
        <t.InfoTxt>
          <span>
            <strong>운영시간</strong> 월-금 10시~18시
          </span>
          <span>
            <strong>점심시간</strong> 12시~13시
          </span>
          <span>* 배송 및 온라인 고객센터 : 주말, 공휴일 휴무</span>
        </t.InfoTxt>
      </t.FootInfo>
      <t.FootGrWrapper>
        <t.FootWrapper>
          <img src={footLogo} />
          <t.FootText>
            <a href="https://adearth-admin.shop/">광고주 솔루션 바로가기</a>
            <t.SpanTxt>
              <span>• 회사명 : 주식회사 광고지구 | 대표자 : 광고지구</span>
              <span>
                • 주소 : 서울특별시 광고구 지구로 1길 23, 1층 | 이메일 :
                adEarth@jigushop.co.kr | 팩스 : 1234-1234-1234
              </span>
              <span>
                • 사업자등록번호 : 000-00-00000 | 통신판매업신고 :
                제0000-서울00-0000
              </span>
              <span>
                • 개인정보보호책임자 : 광고지구 | 고객센터: 02-123-4567 | 호스팅
                제공자 : (주)광고지구
              </span>
            </t.SpanTxt>
          </t.FootText>
        </t.FootWrapper>
      </t.FootGrWrapper>
    </t.FooterContainer>
  );
};

export default Footer;
