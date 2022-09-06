import { useState } from "react";

import * as t from "./prodContents.style";
import ProdComments from "../../../components/detailPage/prodComments/ProdComments";
import ProdDetails from "../../../components/detailPage/prodDetails/ProdDetails";

const ProdContents = () => {
  //상세정보 & 구매평 스위치
  const [contentsChange, setContentsChange] = useState(false);

  return (
    <t.MainContainer>
      <t.MenuWrapper>
        <t.Menu onClick={() => setContentsChange(false)}>상세정보</t.Menu>
        <t.Menu onClick={() => setContentsChange(true)} className="right">
          구매평 (3)
        </t.Menu>
      </t.MenuWrapper>
      <t.ContentsWrapper>
        {contentsChange ? <ProdComments /> : <ProdDetails />}
      </t.ContentsWrapper>
    </t.MainContainer>
  );
};

export default ProdContents;
