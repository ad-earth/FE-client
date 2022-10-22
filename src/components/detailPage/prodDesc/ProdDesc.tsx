import * as t from "./prodDesc.style";
import { PropsType } from "./prodDesc.type";

const ProdDesc = (props: PropsType) => {
  return (
    <t.MainContainer>
      <p>{props.desc}</p>
      <t.Description>
        <span>원산지</span>&ensp; 대한민국 <br />
        <span>브랜드</span>&ensp; {props.brand} <br />
        <span>배송비</span>&ensp; 전 품목 무료배송 <br />
      </t.Description>
    </t.MainContainer>
  );
};

export default ProdDesc;
