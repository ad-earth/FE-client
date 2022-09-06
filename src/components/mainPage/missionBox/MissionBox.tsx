import * as t from "./missionBox.style";

interface PropsType {
  category: string;
  amount: string;
}

const MissionBox = (props: PropsType) => {
  return (
    <t.MainContainer>
      <t.Category>{props.category}</t.Category>
      <t.Amount>{props.amount}</t.Amount>
    </t.MainContainer>
  );
};

export default MissionBox;
