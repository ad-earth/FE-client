import { openDB } from "idb";
import { DetailResponseType } from "../../containers/detailPage/details/details.type";
import { OptionArrType } from "../types/types";

export const putCartDB = async (
  detailData: DetailResponseType,
  optionList: OptionArrType[],
  qty: number,
  totalOptionPrice: number,
  totalOptionQty: number,
  totalPrice: number
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
    totalPrice: totalOptionPrice !== 0 ? totalOptionPrice : totalPrice,
    totalQty: totalOptionQty !== 0 ? totalOptionQty : qty,
  });
};
