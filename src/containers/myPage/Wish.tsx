import React, { useState } from "react";
import WishCard from "../../components/myPage/WishCard";
import styled from "styled-components";

const Wish = () => {
  const [state, setState] = useState(null);
  return (
    <Section>
      <OrderListBox>
        <Title>
          위시리스트 <span>5</span>
        </Title>
        <CardContent>
          {state === null && <DataNull>위시리스트가 없습니다.</DataNull>}
          {["1", "2", "3", "4", "5"].map((data, i: number) => (
            <List key={i}>
              <WishCard />
            </List>
          ))}
        </CardContent>
      </OrderListBox>
    </Section>
  );
};

export default Wish;

const Section = styled.div``;
const OrderListBox = styled.div``;
const Title = styled.div`
  font-size: 21px;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin: 10px 0;
  & span {
    background-color: #646464;
    border-color: #646464;
    padding: 0;
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align: center;
    color: #fff;
    border-radius: 100%;
    font-size: 11px;
    line-height: 20px;
    margin-left: 10px;
  }
`;
const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;
const List = styled.div`
  max-width: 25%;
`;
const DataNull = styled.div`
  width: 100%;
  text-align: center;
  padding: 70px;
  box-sizing: border-box;
  color: #999999;
  size: 15px;
`;
