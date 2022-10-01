import styled from "styled-components";

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fs14};
  line-height: 20px;
  color: ${({ theme }) => theme.bg09};
  border: 1px solid ${({ theme }) => theme.rgba06};
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 40px;
  & p {
    padding-bottom: 10px;
  }
  & span {
    padding-top: 5px;
    color: ${({ theme }) => theme.fc19};
  }
  @media (max-width: 990px) {
    border: none;
    margin: 0;
  }
`;

