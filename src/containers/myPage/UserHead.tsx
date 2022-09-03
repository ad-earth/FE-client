import styled from "styled-components";
import UserHeadInfo from "../../components/myPage/UserHeadInfo";

const UserHead = () => {
  return (
    <Section>
      <UserHeadInfo />
    </Section>
  );
};

export default UserHead;

const Section = styled.div`
  padding: 50px 45px 40px;
  margin-bottom: 70px;
  @media (max-width: 990px) {
    padding: 30px 15px;
    margin: 0 -15px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  }
`;
