import { useQuery } from "react-query";

import { getMain } from "../../../shared/apis/api";
import { CardType } from "../../../shared/types/types";

async function getBestCards(): Promise<CardType[]> {
  const { data } = await getMain();
  return data.Best;
}

export function useBestCards(): CardType[] {
  const fallback: [] = [];
  const { data = fallback } = useQuery("best", getBestCards);
  return data;
}
