import styled from "styled-components";
import { NotFoundBtn } from "../elements/buttons/Buttons";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <h1>404</h1>
      <h3>Not Found</h3>
      <p>
        페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다. <br />
        입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
      </p>
      <BtnBox>
        <NotFoundBtn type="back" text="이전화면" onClick={() => navigate(-1)} />
        <NotFoundBtn
          type="home"
          text="홈으로 가기"
          onClick={() => navigate("/home")}
        />
      </BtnBox>
    </Section>
  );
};

export default NotFound;

const Section = styled.section`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 70px 0;
  h1 {
    font-size: 200px;
    line-height: 200px;
    color: ${({ theme }) => theme.bg16};
  }
  h3 {
    font-size: 50px;
  }
  p {
    font-size: 20px;
    margin: 42px 0 62px 0;
  }
`;
const BtnBox = styled.div`
  width: 424px;
  display: flex;
  justify-content: space-between;
`;
