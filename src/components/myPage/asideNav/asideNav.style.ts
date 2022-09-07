import styled from "styled-components";
// import { theme } from "../../../style/theme";

export const NavListBox = styled.ul`
  & li {
    width: 100%;
    margin-bottom: 12px;
  }
  & li a {
    color: ${({ theme }) => theme.fc14};
  }
  @media (max-width: 990px) {
    display: none;
  }
`;
export const Text = styled.span``;
