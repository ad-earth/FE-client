import { openDB } from "idb";
import { DetailResponseType } from "../../containers/detailPage/details/details.type";
import { OptionListType } from "../types/types";

export const putPaymentDB = async (
  detailData: DetailResponseType,
  optionList: OptionListType,
  qty: number,
  totalPrice: number,
  totalQty: number
) => {
  let store;
  const db = await openDB("payment", 1, {
    upgrade(db) {
      store = db.createObjectStore("payment", {
        keyPath: "id",
        autoIncrement: true,
      });
    },
  });
  store = db.transaction("payment", "readwrite").objectStore("payment");
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
