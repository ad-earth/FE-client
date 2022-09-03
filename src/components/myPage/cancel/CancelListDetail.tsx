import styled from "styled-components";
import Product from "../order/Product";
import { useState } from "react";

const CancelListDetail = () => {
  const [checked, setChecked] = useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
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
  border: 1px solid rgba(100, 100, 100, 0.1);
  padding: 20px;
  @media (max-width: 990px) {
    border: none;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }
`;
const Title = styled.div`
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 24px;
  display: flex;
`;
const CancelList = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
`;
const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #00913a;
  border: 1px solid #cfd6d9;
  margin-right: 10px;
`;
