import { openDB } from "idb";
import { DetailType } from "../../components/detailPage/buttons/buttons.type";
import { OptionListType } from "../../components/detailPage/productOptions/productOptions.type";

export const putCartDB = async (
  detailData: DetailType,
  optionList: OptionListType,
  qty: number,
  totalPrice: number,
  totalQty: number
) => {
  let store;
  const db = await openDB("cart", 1, {
    upgrade(db) {
      store = db.createObjectStore("cart", {
        keyPath: "id",
        autoIncrement: true,
      });
    },
  });
  store = db.transaction("cart", "readwrite").objectStore("cart");
  store.put({
    id: detailData?.product.p_No,
    keywordNo: detailData?.k_No,
    productNo: detailData?.product.p_No,
    thumbnail: detailData?.product.p_Thumbnail,
    category: detailData?.product.p_Category,
    brand: detailData?.product.a_Brand,
    name: detailData?.product.p_Name,
    price: detailData?.product.p_Cost,
    discount: detailData?.product.p_Discount,
    option: optionList,
    totalPrice: totalPrice,
    totalQty: totalQty !== 0 ? totalQty : qty,
  });
};
