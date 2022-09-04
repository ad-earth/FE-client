import styled from "styled-components";

import { theme } from "../../style/theme";

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
  font-size: ${theme.fs15};
  color: ${theme.fc09};
  cursor: pointer;
  span {
    color: ${theme.fc04};
  }
`;
