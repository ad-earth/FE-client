import * as t from "./prodName.style";

import { Badge } from "../../../elements/Badge";

const ProdName = () => {
  return (
    <t.MainContainer>
      <t.NameWrapper>
        <t.Name>[지구샵] 스트롱고체치약 (쿨민트향) 150정입</t.Name>
        <Badge type={"best"}>BEST</Badge>
      </t.NameWrapper>
      <t.Price>13,400원</t.Price>
      <t.Line />
    </t.MainContainer>
  );
};

export default ProdName;
