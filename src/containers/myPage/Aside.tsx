import AsideNav from "../../components/myPage/AsideNav";
import styled from "styled-components";

const Aside = () => {
  return (
    <Section>
      <AsideNav />
    </Section>
  );
};

export default Aside;

const Section = styled.div`
  width: 16%;
  padding: 0 12px;
  box-sizing: border-box;

  @media (max-width: 990px) {
    display: none;
  }
`;
