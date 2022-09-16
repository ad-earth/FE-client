import { useQuery } from "react-query";

import { getSearch } from "../../../shared/apis/api";
import { CardType } from "../../../shared/types/types";

async function getCards(): Promise<CardType[]> {
  const { data } = await getSearch();
  return data;
}

export function useSearchList(): CardType[] {
  console.log(useSearchList);

  const fallback: [] = [];
  const { data = fallback } = useQuery("all", getCards);
  return data;
}
