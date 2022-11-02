import { openDB } from "idb";
import { DetailResponseType } from "../../containers/detailPage/details/details.type";
import { OptionListType } from "../types/types";
import { CartResponseType } from "../../../src/shared/types/types";

export const putCartDB = async (
  detailData: DetailResponseType,
  optionData: OptionListType,
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
    option: optionData,
    totalPrice: totalPrice,
    totalQty: totalQty !== 0 ? totalQty : qty,
  });
};

export const putAllCartDB = async (data: CartResponseType) => {
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
  try {
    for (let i = 0; i < data.cartList.length; i++) {
      store.put({
        id: data.cartList[i].p_No,
        keywordNo: data.cartList[i].k_No,
        productNo: data.cartList[i].p_No,
        thumbnail: data.cartList[i].p_Thumbnail,
        category: data.cartList[i].p_Category,
        brand: data.cartList[i].a_Brand,
        name: data.cartList[i].p_Name,
        price: data.cartList[i].p_Cost,
        discount: data.cartList[i].p_Discount,
        option: data.cartList[i].p_Option,
        totalPrice: data.cartList[i].p_Price,
        totalQty: data.cartList[i].p_Cnt,
      });
    }
  } catch (err) {
    console.log("err: ", err);
  }
};
