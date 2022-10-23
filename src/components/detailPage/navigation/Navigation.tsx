import { useNavigate, useParams } from "react-router-dom";

import * as t from "./navigation.style";

const Navigation = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  return (
    <t.HistoryNav>
      <span
        onClick={() => {
          navigate(`/`);
        }}
      >
        Home &nbsp;
      </span>
      &nbsp;
      {category === "undefined" || category === "메인" ? null : (
        <span
          onClick={() => {
            navigate(`/list/전체`);
          }}
        >
          &gt; 장보기
        </span>
      )}
      &nbsp;
      {category === "undefined" || category === "메인" ? null : (
        <div
          onClick={() => {
            navigate(category === "전체" ? `/list` : `/list/${category}`);
          }}
        >
          &gt;{category}
        </div>
      )}
    </t.HistoryNav>
  );
};

export default Navigation;
