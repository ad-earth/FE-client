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
`;
