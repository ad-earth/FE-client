import styled from "styled-components";

import { theme } from "../../../style/theme";

interface PropsType {
  category: string;
  amount: string;
}

const MissionBox = (props: PropsType) => {
  return (
    <MainContainer>
      <Category>{props.category}</Category>
      <Amount>{props.amount}</Amount>
    </MainContainer>
  );
};

export default MissionBox;

const MainContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.bg01};
  border-radius: 15px;
  gap: 8px;
  padding: 50px;
  color: ${theme.fc15};
  @media (max-width: 990px) {
    width: 97%;
    padding: 20px;
    gap: 0px;
  }
`;
const Category = styled.div`
  font-size: ${theme.fs18};
  font-weight: 600;
  @media (max-width: 990px) {
    font-size: ${theme.fs15};
    font-weight: 400;
  }
`;
const Amount = styled.div`
  font-size: ${theme.fs30};
  font-weight: 600;
  @media (max-width: 990px) {
    font-size: ${theme.fs26};
  }
`;
