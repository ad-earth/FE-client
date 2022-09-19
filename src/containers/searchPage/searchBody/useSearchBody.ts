import { useQuery } from "react-query";
import { getSearch } from "../../../shared/apis/api";
//products
const getData = async () => {
  const { data } = await getSearch();
  return data.products;
};
export const useDataList = () => {
  const fallback: [] = [];
  const { data = fallback, status } = useQuery("products", getData);
  if (status === "error") {
    return "error";
  }
  return data;
};

//ad
const getAdData = async () => {
  const { data } = await getSearch();
  return data.adProducts;
};
export const useAdData = () => {
  const fallback: [] = [];
  const { data = fallback, status } = useQuery("addata", getAdData);
  if (status === "error") {
    return "error";
  }
  return data;
};

//cnt
const getNumData = async () => {
  const { data } = await getSearch();
  return data.cnt;
};
export const useNumData = () => {
  const { data, status } = useQuery("numdata", getNumData);
  if (status === "error") {
    return "error";
  }
  return data;
};
// export const useSearchData = () =>
//   useQueries([
//     {
//       queryKey: ["numdata", dataaa()],
//       queryFn: (dataaa = async () => {
//         const { data } = await getSearch();
//         return data.cnt;
//       }),
//     },
//     {
//       queryKey: ["products"],
//       queryFn: async () => {
//         const { data } = await getSearch();
//         return data.products;
//       },
//     },
//   ]);

// const data1 = async () => {
//   const { data } = await getSearch();
//   const dataProducts = data.products;
//   const fallback: [] = [];
//   const { getD = fallback, status } = useQuery("products", dataProducts);
//   if (status === "error") {
//     return "error";
//   }
// };

// async function getAd() {
//   const { data } = await getSearch();
//   return data.adProducts;
// }

// export function useAdList() {
//   console.log(getAd);
//   const fallback: [] = [];
//   const { data = fallback } = useQuery("ad", getAd);
//   return data;
// }

// async function getCards() {
//   const { data } = await getSearch();
//   return data;
// }

// export function useSearchList() {
//   const fallback: [] = [];
//   const { data = fallback } = useQuery("cards", getCards);
//   return data;
// }
