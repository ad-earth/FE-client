import { useQuery } from "react-query";

import { getSearch } from "../../../shared/apis/api";
import { CardType } from "../../../shared/types/types";

export type CardListType = {
  cnt: number;
  userLike: number[];
  adProducts: number[];
  products: string[];
  v: string[];
};
async function getAd() {
  const { data } = await getSearch();
  return data.adProducts;
}

export function useAdList() {
  console.log(getAd);
  const fallback: [] = [];
  const { data = fallback } = useQuery("ad", getAd);
  return data;
}

async function getCards() {
  const { data } = await getSearch();
  return data;
}

export function useSearchList() {
  console.log(getCards);
  const fallback: [] = [];
  const { data = fallback } = useQuery("cards", getCards);
  return data;
}
