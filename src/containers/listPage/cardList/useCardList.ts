import { RepeatOneSharp } from "@mui/icons-material";
import { url } from "inspector";
import { useQuery } from "react-query";
import { getList } from "../../../shared/apis/api";

const sort = {
  id: "인기순",
};
const pageNo = {};
const getData = async () => {
  const { data } = await getList(`sort=${sort}`, `page=${pageNo}`);
  return data;
};
export const useCardList = () => {
  const fallback: [] = [];
  const { data = fallback, status } = useQuery("card", getData);
  if (status === "error") {
    return "error";
  }
  return data;
};
