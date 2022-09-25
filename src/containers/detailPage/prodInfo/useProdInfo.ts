import { useQuery } from "react-query";

import { getProdDetails } from "../../../shared/apis/api";

async function getProdInfo(p_No?: string, keyword?: string) {
  const { data } = await getProdDetails(p_No, keyword);
  return data;
}
export function useProdInfo(p_No?: string, keyword?: string) {
  const fallback: [] = [];
  const { data = fallback } = useQuery("info", () =>
    getProdInfo(p_No, keyword)
  );
  return data;
}
