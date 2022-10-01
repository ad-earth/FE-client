import { useNavigate, useParams } from "react-router-dom";

import * as t from "./history.style";

const History = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  return (
    <t.HistoryNav>
      <span
        onClick={() => {
          navigate(`/`);
        }}
      >
        Home &nbsp; &gt;
      </span>
      &nbsp;
      {category === "메인" ? (
        <span
          onClick={() => {
            navigate(`/`);
          }}
        >
          메인 &nbsp;
        </span>
      ) : (
        <span
          onClick={() => {
            navigate(`/list`);
          }}
        >
          장보기 &gt;
        </span>
      )}
      &nbsp;
      {category === "메인" ? null : (
        <div
          onClick={() => {
            navigate(category === "전체" ? `/list` : `/list/${category}`);
          }}
        >
          {category}
        </div>
      )}
    </t.HistoryNav>
  );
};

export default History;
