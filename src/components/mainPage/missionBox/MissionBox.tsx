import * as t from "./missionBox.style";
import { PropsType } from "./missionBox.type";

const MissionBox = (props: PropsType) => {
  return (
    <t.MainContainer>
      <t.Category>{props.category}</t.Category>
      <t.Amount>{props.amount}</t.Amount>
    </t.MainContainer>
  );
};

export default MissionBox;
