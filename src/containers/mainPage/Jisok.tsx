import styled from "styled-components";

import { MainButton } from "../../elements/Buttons";

const Jisok = () => {
  return (
    <MainContainer>
      <Contents>
        <img src="https://cdn.imweb.me/upload/S202001038f7af028ec26d/3731de8998869.png" />
        <Text>
          하나뿐인 지구를 위한 지구샵의 고민
          <br />
          지구를 위한 택배서비스 "지속"런칭
        </Text>
        <MainButton
          bgColor="#339999"
          hBgColor="#216b6b"
          radius="30px"
          onClick={() => window.open("http://www.jisok.co.kr/")}
        >
          더 알아보기
        </MainButton>
      </Contents>
      <Background>
        <img src="https://cdn.imweb.me/thumbnail/20220208/963fc319098ba.jpg" />
      </Background>
    </MainContainer>
  );
};

export default Jisok;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Contents = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  margin: 20px auto;
  position: absolute;
  img {
    width: 120px;
  }
  button {
    font-size: 14px;
    margin-left: 30px;
    width: 178px;
    height: 48px;
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 990px) {
    width: 90%;
    img {
      width: 15%;
    }
    button {
      font-size: 1%;
      margin-left: 30px;
      width: 15%;
      height: 4%;
    }
  }
`;
const Text = styled.div`
  font-size: 16px;
  color: #339999;
  margin-left: 50px;
  @media (max-width: 1200px) {
    font-size: 0.5rem;
    white-space: nowrap;
  }
`;
const Background = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
