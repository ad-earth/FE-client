import * as t from "./mission.style";
import MissionBox from "../../../components/mainPage/missionBox/MissionBox";

const Mission = () => {
  return (
    <t.Background>
      <t.MissionWrapper>
        <span>JIGUSHOP MISSION</span>
        <t.BoxWrapper>
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
        </t.BoxWrapper>
        <t.Date>*2022년 2월 기준</t.Date>
      </t.MissionWrapper>
    </t.Background>
  );
};

export default Mission;
