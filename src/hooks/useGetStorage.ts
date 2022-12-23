import { useState } from "react";

export const useGetLocalStorage = (key: string): boolean => {
  const [storageValue] = useState<string>(localStorage.getItem(key) ?? "");
  return storageValue?.length >= 0 ? true : false;
};
