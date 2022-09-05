import styled from "styled-components";
import Product from "../order/Product";

const CancelListDetail = () => {
  return (
    <CancelListBox>
      <Title>취소 상품 선택</Title>

      {["1", "2"].map((data, i: number) => (
        <CancelList key={i}>
          <>
            <Checkbox type="checkbox" />
            <Product />
          </>
        </CancelList>
      ))}
    </CancelListBox>
  );
};

export default CancelListDetail;

const CancelListBox = styled.div`
  border: 1px solid ${({ theme }) => theme.rgba06};
  padding: 20px;
  @media (max-width: 990px) {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.rgba06};
  }
`;
const Title = styled.div`
  font-size: ${({ theme }) => theme.fs21};
  font-weight: 600;
  display: flex;
  margin-bottom: 24px;
`;
const CancelList = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
`;
const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: ${({ theme }) => theme.ls15};
  border: 1px solid ${({ theme }) => theme.ls10};
  margin-right: 10px;
`;
