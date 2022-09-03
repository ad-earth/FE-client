import styled from "styled-components";

import { theme } from "../../style/theme";

const SocialLinkList = () => {
  return (
    <Background>
      <MainContainer>
        {/* 링크나 메시지 필요*/}
        <Link>
          <img src="https://cdn.imweb.me/thumbnail/20220629/de27d3749e375.png" />
        </Link>
        <SmallLinkWrapper>
          <SmallLink
            onClick={() =>
              window.open("https://www.instagram.com/p/CO2NyoapBRY")
            }
          >
            <img src="https://cdn.imweb.me/thumbnail/20220303/b7aa3459058d0.png" />
          </SmallLink>
          {/* 링크나 메시지 필요*/}
          <SmallLink>
            <img src="https://cdn.imweb.me/thumbnail/20220622/37b2485c495d2.jpg" />
          </SmallLink>
        </SmallLinkWrapper>
      </MainContainer>
    </Background>
  );
};

export default SocialLinkList;

const Background = styled.div`
  width: 100%;
  padding: 4% 0;
  display: flex;
  align-items: center;
  background: ${theme.bg14};
`;
const MainContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 990px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
`;
const Link = styled.div`
  width: 47%;
  display: flex;
  overflow: hidden;
  border-radius: 20px;
  img {
    width: 100%;
    object-fit: contain;
    cursor: pointer;
  }
  @media (max-width: 990px) {
    width: 96%;
  }
`;
const SmallLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  gap: 40px;
  @media (max-width: 990px) {
    width: 96%;
    gap: 0px;
  }
`;
const SmallLink = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  border-radius: 20px;
  img {
    width: 100%;
    cursor: pointer;
  }
  @media (max-width: 990px) {
    margin-top: 3%;
  }
`;
