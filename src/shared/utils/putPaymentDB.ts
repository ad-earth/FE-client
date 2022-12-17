import { openDB } from "idb";
import { DetailResponseType } from "../../containers/detailPage/details/details.type";
import { CartPayType, OptionArrType } from "../types/types";

export const putPaymentDB = async (
  detailData: DetailResponseType,
  optionList: OptionArrType[],
  qty: number,
  totalOptionPrice: number,
  totalOptionQty: number,
  totalPrice: number
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
    totalPrice: totalOptionPrice !== 0 ? totalOptionPrice : totalPrice,
    totalQty: totalOptionQty !== 0 ? totalOptionQty : qty,
  });
};

export const putAllPaymentDB = async (data: CartPayType[]) => {
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
  try {
    for (let i = 0; i < data.length; i++) {
      store.put({
        id: data[i].id,
        keywordNo: data[i].keywordNo,
        productNo: data[i].productNo,
        thumbnail: data[i].thumbnail,
        category: data[i].category,
        brand: data[i].brand,
        name: data[i].name,
        price: data[i].price,
        discount: data[i].discount,
        option: data[i].option,
        totalPrice: data[i].totalPrice,
        totalQty: data[i].totalQty,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
