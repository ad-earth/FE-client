import React from "react";
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
  background: gray;
`;
