import styled from "styled-components";

import { theme } from "../../style/theme";

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
  background: #fff;
  border-radius: 15px;
  gap: 8px;
  padding: 50px;
  color: ${theme.colors.green2};
  @media (max-width: 990px) {
    width: 97%;
    padding: 20px;
    gap: 0px;
  }
`;
const Category = styled.div`
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 990px) {
    font-size: 15px;
    font-weight: 400;
  }
`;
const Amount = styled.div`
  font-size: 30px;
  font-weight: 600;
  @media (max-width: 990px) {
    font-size: 26px;
  }
`;
