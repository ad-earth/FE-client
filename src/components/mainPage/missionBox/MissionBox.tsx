import * as t from "./missionBox.style";
import { PropsType } from "./missionBox.type";

const MissionBox = ({ category, amount }: PropsType) => {
  return (
    <t.MainContainer>
      <t.Category>{category}</t.Category>
      <t.Amount>{amount}</t.Amount>
    </t.MainContainer>
  );
};

export default MissionBox;
