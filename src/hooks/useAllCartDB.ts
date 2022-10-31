import { openDB } from "idb";

export const useAllCartDB = async () => {
  let store;
  const db = await openDB("cart", 1, {
    upgrade(db) {
      store = db.createObjectStore("cart", {
        keyPath: "id",
        autoIncrement: true,
      });
    },
  });
  store = db.transaction("cart", "readonly").objectStore("cart");
  return store.getAll();
};
