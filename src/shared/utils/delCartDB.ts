import { openDB } from "idb";

export const delCartDB = async (item: any) => {
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
  store.delete(item);
};
