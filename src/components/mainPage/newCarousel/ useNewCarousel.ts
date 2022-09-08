import { useQuery } from "react-query";

import { getMain } from "../../../shared/apis/api";
import { NewType } from "./newCarousel.type";

async function getNewCarousel(): Promise<NewType[]> {
  const { data } = await getMain();
  return data.Best;
}

export function useNewCarousel(): NewType[] {
  const fallback: [] = [];
  const { data = fallback } = useQuery("new", getNewCarousel);
  return data;
}
