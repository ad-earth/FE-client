import styled from "styled-components";
import SignUpForm from "../containers/signupPage/SignUpForm";

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <SignUpForm />
    </SignUpContainer>
  );
};
export default SignUpPage;

const SignUpContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 40px auto;
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 990px) {
    width: 90%;
  }
`;
