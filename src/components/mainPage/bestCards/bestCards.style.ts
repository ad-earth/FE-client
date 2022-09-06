import styled from "styled-components";

export const MainContainer = styled.div`
  width: 55%;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  row-gap: 30px;
  @media (max-width: 990px) {
    width: 100%;
    margin: 30px auto;
    grid-template-columns: repeat(2, 50%);
  }
`;
export const CardWrapper = styled.div`
  width: 100%;
`;
