import styled from "styled-components";

import { theme } from "../../style/theme";
import MissionBox from "../../components/mainPage/MissionBox";

const Mission = () => {
  return (
    <Background>
      <MissionWrapper>
        <span>JIGUSHOP MISSION</span>
        <BoxWrapper>
          <MissionBox
            category={"우리가 줄인 플라스틱 제품"}
            amount={"44,664kg"}
          />
          <MissionBox
            category={"우리가 순환한 자원의 양"}
            amount={"12,084개"}
          />
          <MissionBox
            category={"사회, 환경적 활동 지원 금액"}
            amount={"17,647,760원"}
          />
        </BoxWrapper>
        <Date>*2022년 2월 기준</Date>
      </MissionWrapper>
    </Background>
  );
};

export default Mission;

const Background = styled.div`
  width: 100%;
  padding: 4% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.bg16};
`;
const MissionWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.fc01};
  span {
    font-size: ${theme.fs28};
    font-weight: 700;
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 990px) {
    width: 97%;
    span {
      font-size: ${theme.fs20};
    }
  }
`;
const BoxWrapper = styled.div`
  width: 97%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 990px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
const Date = styled.div`
  width: 97%;
  text-align: right;
  font-size: ${theme.fs16};
  @media (min-width: 991px) and (max-width: 1200px) {
    font-size: ${theme.fs14};
  }
  @media (max-width: 990px) {
    font-size: ${theme.fs12};
  }
`;
