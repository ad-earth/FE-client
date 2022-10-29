import { Dispatch, SetStateAction } from "react";
import { ReviewType } from "../reviewModal.type";

export interface PropsType {
  starVal: ReviewType;
  setStarVal: Dispatch<SetStateAction<ReviewType>>;
}
