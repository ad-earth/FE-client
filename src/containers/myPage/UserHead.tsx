import styled from "styled-components";
import UserHeadInfo from "../../components/myPage/userHeadInfo/UserHeadInfo";

const UserHead = () => {
  return (
    <Section>
      <UserHeadInfo />
    </Section>
  );
};
export default UserHead;

const Section = styled.div`
  margin-bottom: 70px;
  padding: 50px 45px 40px;
  @media (max-width: 990px) {
    border-bottom: 1px solid ${({ theme }) => theme.rgba02};
    margin: 0 -15px 20px;
    padding: 30px 15px;
  }
`;
