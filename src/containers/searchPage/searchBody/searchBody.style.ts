import styled from "styled-components";

export const CardArea = styled.div`
  max-width: 1220px;
  height: auto;
  padding: 0 12px 0 12px;
  margin: 0.1rem auto;
  & h3 {
    font-size: ${({ theme }) => theme.fs24};
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
`;
export const CardWrap = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(21%, auto));
  margin-left: 6px;
  gap: 0 0.1px;
  padding: 0;
  @media (max-width: 790px) {
    width: 100%;
    margin: 30px auto;
    grid-template-columns: repeat(2, 50%);
  }
`;
export const CardCp = styled.div`
  width: 100%;
  margin: 0 -6px 10px -6px;
  box-sizing: border-box;
  font-size: inherit;
`;
