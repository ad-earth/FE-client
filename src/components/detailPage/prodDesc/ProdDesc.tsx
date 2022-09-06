import * as t from "./prodDesc.style";

const ProdDesc = () => {
  return (
    <t.MainContainer>
      <p>
        더 상쾌한 제로웨이스트 양치시간! 지구샵 스트롱 고체치약으로 시작해요:)
        <br />
        *틴케이스 별도 구매
      </p>
      <t.Description>
        <span>원산지</span>&ensp; 대한민국 <br />
        <span>브랜드</span>&ensp; 지구샵 <br />
        <span>배송비</span>&ensp; 전 품목 무료배송 <br />
      </t.Description>
    </t.MainContainer>
  );
};

export default ProdDesc;
