import styled from "styled-components";

export const CancelListBox = styled.div`
  border: 1px solid ${({ theme }) => theme.rgba06};
  padding: 20px;
  @media (max-width: 990px) {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.rgba06};
  }
`;
export const Title = styled.div`
  font-size: ${({ theme }) => theme.fs21};
  font-weight: 600;
  display: flex;
  margin-bottom: 24px;
`;
export const CancelList = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
`;
export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: ${({ theme }) => theme.ls15};
  border: 1px solid ${({ theme }) => theme.ls10};
  margin-right: 10px;
`;
