import styled from "styled-components";

import logInLogo from "./../assets/logo/logInLogo.jpeg";
import LoginForm from "../containers/loginPage/LoginForm";

const LogInPage = () => {
  return (
    <>
      <LogInContainer>
        <LogInLogo src={logInLogo} />
        <LoginForm />
      </LogInContainer>
    </>
  );
};
export default LogInPage;

const LogInContainer = styled.div`
  width: 1200px;
  margin: 90px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 990px) {
    width: 100%;
  }
`;
const LogInLogo = styled.img`
  width: 210px;
  object-fit: contain;
`;
