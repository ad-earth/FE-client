import { openDB } from "idb";

export const usePaymentDB = async (id: number) => {
  let store;
  const db = await openDB("payment", 1, {
    upgrade(db) {
      store = db.createObjectStore("payment", {
        keyPath: "id",
        autoIncrement: true,
      });
    },
  });
  store = db.transaction("payment", "readonly").objectStore("payment");
  return store.get(id);
};
