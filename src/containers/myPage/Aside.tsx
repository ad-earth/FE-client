import {
  AsideNavDesktop,
  AsideNavMobile,
} from "../../components/myPage/asideNav/AsideNav";
import styled from "styled-components";
import { useViewport } from "../../hooks/useViewport";

export const Aside = () => {
  //뷰포트 사이즈
  const viewport = useViewport();
  return (
    <Section>
      {viewport > 990 ? <AsideNavDesktop /> : <AsideNavMobile />}
    </Section>
  );
};

const Section = styled.div`
  width: 16%;
  padding: 0 12px;
  box-sizing: border-box;
  @media (max-width: 990px) {
    width: 100%;
    padding: 0;
  }
`;
