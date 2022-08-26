import styled from "styled-components";

const SocialLinkList = () => {
  return (
    <LinkBg>
      <Link>
        <img src="https://cdn.imweb.me/thumbnail/20220629/de27d3749e375.png" />
      </Link>
      <LinkWrapper>
        <LinkS>
          <img src="https://cdn.imweb.me/thumbnail/20220303/b7aa3459058d0.png" />
        </LinkS>
        <LinkS>
          <img src="https://cdn.imweb.me/thumbnail/20220622/37b2485c495d2.jpg" />
        </LinkS>
      </LinkWrapper>
    </LinkBg>
  );
};

export default SocialLinkList;

const LinkBg = styled.div`
  width: 100%;
  background: #ffffe9;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 50px auto;
  padding: 50px 0;
`;
const Link = styled.div`
  display: flex;
  width: 40%;
  overflow: hidden;
  border-radius: 20px;
  img {
    width: 100%;
  }
`;
const LinkWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const LinkS = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
