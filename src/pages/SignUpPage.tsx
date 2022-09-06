
import styled from "styled-components";
import { theme } from "../style/theme";
import { MainButton } from "../elements/Buttons";
import Profile from "../components/signUpPage/profile/Profile";
import SignUpForm from "../components/signUpPage/signUpForm/SignUpForm";
import AddressForm from "../components/signUpPage/addressForm/AddressForm";


const SignUpPage = () => {
  return (
    <SignUpContainer>
      <Profile />
      <FormWrapper>

        <SignUpForm />
        <AddressForm />
        <SubmitDiv>
          <MainButton radius="30px" fontSize={theme.fs14}>
            가입하기
          </MainButton>
        </SubmitDiv>
      </FormWrapper>
    </SignUpContainer>
  )
}
export default SignUpPage

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
const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;
const SubmitDiv = styled.div`
  width: 100%;
  margin-top: 30px;
`
