import { openDB } from "idb";
import { useAppSelector } from "../redux/store";

export const useDeletePayDB = async () => {
  const clear = useAppSelector((state) => state.payCheckSlice.clear);
  let store;
  const db = await openDB("payment", 1, {
    upgrade(db) {
      store = db.createObjectStore("payment", {
        keyPath: "id",
      });
    },
  });
  store = db.transaction("payment", "readwrite");
  const clearStore = store.objectStore("payment");
  if (clear === true) {
    await clearStore.clear();
  }
  return;
};
