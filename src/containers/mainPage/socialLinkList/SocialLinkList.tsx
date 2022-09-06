import * as t from "./socialLinkList.style";

const SocialLinkList = () => {
  return (
    <t.Background>
      <t.MainContainer>
        {/* 링크나 메시지 필요*/}
        <t.Link>
          <img
            src="https://cdn.imweb.me/thumbnail/20220629/de27d3749e375.png"
            alt="식생활에서 하는 환경보호"
          />
        </t.Link>
        <t.SmallLinkWrapper>
          <t.SmallLink
            onClick={() =>
              window.open("https://www.instagram.com/p/CO2NyoapBRY")
            }
          >
            <img
              src="https://cdn.imweb.me/thumbnail/20220303/b7aa3459058d0.png"
              alt="뉴용지물"
            />
          </t.SmallLink>
          {/* 링크나 메시지 필요*/}
          <t.SmallLink>
            <img
              src="https://cdn.imweb.me/thumbnail/20220622/37b2485c495d2.jpg"
              alt="덜쓸궁리 비닐봉지"
            />
          </t.SmallLink>
        </t.SmallLinkWrapper>
      </t.MainContainer>
    </t.Background>
  );
};

export default SocialLinkList;
