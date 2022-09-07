import { useQuery } from "react-query";

import { getMain } from "../../../shared/apis/api";
import { BestType } from "./bestCards.type";

async function getBestCards(): Promise<BestType[]> {
  const { data } = await getMain();
  return data.Best;
}

export function useBestCards(): BestType[] {
  const fallback: [] = [];
  const { data = fallback } = useQuery("best", getBestCards);
  return data;
}
