import styled from "styled-components";

const History = () => {
  return (
    <HistoryNav>
      <span>Home &nbsp; &gt; </span>&nbsp;<span>장보기 &nbsp;&gt;</span>
      &nbsp;<div>식품</div>
    </HistoryNav>
  );
};

export default History;

const HistoryNav = styled.div`
  width: 1200px;
  height: 30px;
  display: flex;
  align-items: center;
  margin: 10px auto;
  padding: 13px 15px;
  box-sizing: border-box;
  font-size: 15px;
  color: #646464;
  cursor: pointer;
  span {
    color: #bbb;
  }
`;
