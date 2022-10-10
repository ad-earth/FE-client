import React from "react";
import { useEffect, useState, createContext } from "react";
import { openDB } from "idb";
import { CartDataType } from "./shared/types/contextTypes";

const token = localStorage.getItem("token");

export const UserContext = createContext<CartDataType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartData, setCartData] = useState([]);

  // 장바구니 정보 가져오기
  const getCart = async () => {
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
    const request = store.getAll();
    try {
      request.then((response) => {
        setCartData(response);
      });
    } catch (err) {
      console.error(err);
    }
  };

  console.log(cartData);

  useEffect(() => {
    if (token) {
      getCart();
    }
  }, []);

  return (
    <UserContext.Provider value={{ cartData }}>{children}</UserContext.Provider>
  );
};
