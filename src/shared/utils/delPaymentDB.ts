import { openDB } from "idb";

export const delPaymentDB = async (item: any) => {
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
  store.delete(item);
};
