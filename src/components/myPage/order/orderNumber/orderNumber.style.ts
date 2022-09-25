import styled from "styled-components";

export const OrderNumberBox = styled.div`
  line-height: 15px;
  font-size: ${({ theme }) => theme.fs15};
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  @media (max-width: 990px) {
    flex-direction: row-reverse;
    padding: 12px 15px;
  }
`;

export const OrderNumberInfo = styled.div`
  color: ${({ theme }) => theme.fc12};
  display: flex;
  & span {
    color: ${({ theme }) => theme.fc21};
    padding-left: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  & .link {
    display: flex;
  }
`;
export const Label = styled.p`
  @media (max-width: 990px) {
    display: none;
  }
`;
export const ArrowIcon = styled.button`
  width: 15px;
  height: 15px;
  border: 1px solid ${({ theme }) => theme.ls15};
  border-radius: 50%;
  background: none;
  position: relative;
  left: 4px;

  :after {
    content: "";
    width: 5px;
    height: 5px;
    position: absolute;
    top: 4px;
    left: 43%;
    border-left: 1px solid ${({ theme }) => theme.ls15};
    border-top: 1px solid ${({ theme }) => theme.ls15};
    transform: translateX(-50%) rotate(130deg);
  }
`;
export const OrderDate = styled.div`
  color: ${({ theme }) => theme.fc08};
  display: flex;
  & span {
    padding-left: 4px;
    @media (max-width: 990px) {
      font-weight: 700;
      color: ${({ theme }) => theme.fc12};
    }
  }
`;
