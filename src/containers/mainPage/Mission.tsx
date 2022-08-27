import styled from "styled-components";
import LinkIcon from "@mui/icons-material/Link";

import { MainButton } from "../../elements/Buttons";
import { theme } from "../../style/theme";

const Mission = () => {
  return (
    <>
      <MissionBg>
        <p>JIGUSHOP MISSION</p>
        <BoxWrapper>
          <MissionBox>
            우리가 줄인 플라스틱 제품
            <br />
            <span>44,664kg</span>
          </MissionBox>
          <MissionBox>
            우리가 순환한 자원의 양
            <br />
            <span>12,084개</span>
          </MissionBox>
          <MissionBox>
            사회, 환경적 활동 지원 금액
            <br />
            <span>17,647,760원</span>
          </MissionBox>
        </BoxWrapper>
      </MissionBg>
      <JiSok>
        <Contents>
          <img src="https://cdn.imweb.me/upload/S202001038f7af028ec26d/3731de8998869.png" />
          <p>
            하나뿐인 지구를 위한 지구샵의 고민
            <br />
            지구를 위한 택배서비스 "지속"런칭
          </p>
          <MainButton
            bgColor="#339999"
            hBgColor="#216b6b"
            radius="30px"
            onClick={() => window.open("http://www.jisok.co.kr/")}
          >
            <LinkIcon /> &nbsp; 더 알아보기
          </MainButton>
        </Contents>
        <Bg src="https://cdn.imweb.me/thumbnail/20220208/963fc319098ba.jpg" />
      </JiSok>
    </>
  );
};

export default Mission;

const MissionBg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${theme.colors.green2};
  margin-top: 50px;
  padding: 40px 0;
  p {
    color: #fff;
    font-size: 28px;
    font-weight: 600;
  }
`;
const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const MissionBox = styled.div`
  width: 340px;
  height: 185px;
  margin: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  color: ${theme.colors.green2};
  font-size: 18px;
  font-weight: 600;
  span {
    font-size: 33px;
  }
`;
const JiSok = styled.div`
  width: 100%;
  object-fit: contain;
  display: flex;
  justify-content: center;
  position: relative;
`;
const Contents = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  position: absolute;
  left: 100px;
  img {
    width: 120px;
  }
  p {
    font-size: 16px;
    color: #339999;
    margin-left: 50px;
    line-height: 1.6;
    white-space: nowrap;
  }
  button {
    font-size: 14px;
    margin-left: 30px;
    padding: 15px 30px;
  }
`;
const Bg = styled.img`
  min-height: 100%;
`;
