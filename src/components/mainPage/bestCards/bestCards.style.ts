import styled from "styled-components";

export const MainContainer = styled.div`
  width: 55%;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  row-gap: 30px;
  @media (max-width: 990px) {
    width: 100%;
    grid-template-columns: repeat(2, 50%);
    margin: 30px auto;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
`;
