import * as t from "./PdtInfo.style";
import { openDB } from "idb";
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
const PdtInfo = () => {
  async function getCart() {
    const db = await openDB("cart", 1, {});
    let store = db.transaction("cart", "readonly").objectStore("cart");
    let getReq = store.get(1);
    const getData = () => {
      getReq.then((data) => console.log(data));
    };
    getData();
  }

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
