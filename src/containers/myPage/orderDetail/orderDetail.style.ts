import styled from "styled-components";
export const Section = styled.div`
  @media (max-width: 990px) {
    margin: 0 -15px;
  }
`;
export const Title = styled.div`
  font-size: ${({ theme }) => theme.fs21};
  font-weight: 600;
  display: flex;
  margin-bottom: 24px;
  @media (max-width: 990px) {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.rgba02};
    margin: 0;
    padding: 0 20px 20px;
  }
  & span {
    width: 30px;
    height: 30px;
    display: inline-block;
    position: relative;
    margin-right: 12px;
    overflow: hidden;
    cursor: pointer;
    :before {
      content: "";
      width: 14px;
      height: 14px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      margin-top: 2px;
      border-top: 1px solid ${({ theme }) => theme.ls13};
      border-left: 1px solid ${({ theme }) => theme.ls13};
    }
  }
`;
