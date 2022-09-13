import { useQuery } from "react-query";

import { getMain } from "../../../shared/apis/api";
import { CardType } from "../../../shared/types/types";

async function getNewCarousel(): Promise<CardType[]> {
  const { data } = await getMain();
  return data.New;
}

export function useNewCarousel(): CardType[] {
  const fallback: [] = [];
  const { data = fallback } = useQuery("new", getNewCarousel);
  return data;
}
