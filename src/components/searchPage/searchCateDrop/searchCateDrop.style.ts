import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 88% 12%;
  margin: 15px -6px 55px;
  @media (max-width: 480px) {
    margin-left: -12px;
  }
`;

export const Text = styled.div`
  margin-left: 20px;
  font-size: 15px;
  color: ${({ theme }) => theme.fc07};
`;
