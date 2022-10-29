import styled from "styled-components";

export const NavListBox = styled.ul`
  & li {
    width: 100%;
    margin-bottom: 12px;
  }
  & li a {
    color: ${({ theme }) => theme.fc14};
  }
`;
export const MobileNav = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.ls03};
  width: 33%;
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
