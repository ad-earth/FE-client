import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const DesktopNavBox = styled.ul`
  & li {
    width: 100%;
    margin-bottom: 12px;
  }
  & li a {
    color: ${({ theme }) => theme.fc14};
  }
`;
export const MobileNavBox = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.ls03};
  width: calc(100% / 3);
  float: left;
  a {
    width: 100%;
    float: left;
    text-align: center;
    line-height: 40px;
    background-color: ${({ theme }) => theme.bg01};
    color: ${({ theme }) => theme.fc14};
  }
`;

export const Nav = styled(NavLink)`
  border-bottom: 2px solid ${({ theme }) => theme.fc01};
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.fc15};
  }
`;
