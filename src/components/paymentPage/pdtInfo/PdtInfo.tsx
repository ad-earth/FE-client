import * as t from "./PdtInfo.style";
// type dataType = data: DBType
interface DBType {
  id: number;
  keywordNo: string;
  prodNo: number;
  thumbnail: string;
  category: string;
  brand: string;
  name: string;
  price: number;
  discount: number;
  option: [string | null, string | null, string | null, number, number][];
  totalPrice: number;
  totalCnt: number;
}
const PdtInfo = ({ data }: { data: Array }) => {
  return (
    <>
      <t.ListArea>
        <t.PdArea>
          <t.PdInfoDiv>
            <t.ProductImg />
            <t.ProductInfo>
              <t.ProductName>[지구샵] 스트롱 고체치약(쿨민트향)</t.ProductName>
              <t.ProducOption>틴케이스 - 1개</t.ProducOption>
              <t.ProducPrice>1,000원 / 3 개</t.ProducPrice>
            </t.ProductInfo>
          </t.PdInfoDiv>
        </t.PdArea>
      </t.ListArea>
    </>
  );
};

export default PdtInfo;
function usestate(arg0: undefined[]): [any, any] {
  throw new Error("Function not implemented.");
}
