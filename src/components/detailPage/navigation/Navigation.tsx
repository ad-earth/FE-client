import { useLocation, useNavigate } from "react-router-dom";
import QueryString from "qs";

import * as t from "./navigation.style";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const category = String(query.category);

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
      {category && (
        <span
          onClick={() => {
            navigate(`/list/전체`);
          }}
        >
          &gt; 장보기
        </span>
      )}
      &nbsp;
      {category && (
        <div
          onClick={() => {
            navigate(category === "전체" ? `/list` : `/list/${category}`);
          }}
        >
          &gt; {category}
        </div>
      )}
    </t.HistoryNav>
  );
};

export default Navigation;
