import styled from "styled-components";

const SocialLinkList = () => {
  return (
    <LinkBg>
      <ImgWrapper>
        <img src="https://cdn.imweb.me/thumbnail/20220629/de27d3749e375.png" />
      </ImgWrapper>
      <ImgWrapper>
        <img src="https://cdn.imweb.me/thumbnail/20220303/b7aa3459058d0.png" />
        <img src="https://cdn.imweb.me/thumbnail/20220622/37b2485c495d2.jpg" />
      </ImgWrapper>
    </LinkBg>
  );
};

export default SocialLinkList;

const LinkBg = styled.div`
  width: 100%;
  background: #ffffe9;
  display: flex;
`;
const ImgWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;
