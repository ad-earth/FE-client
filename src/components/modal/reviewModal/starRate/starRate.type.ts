import { Dispatch, SetStateAction } from "react";
import { StateType } from "../reviewModal.type";

export interface PropsType {
  starVal: StateType;
  setStarVal: Dispatch<SetStateAction<StateType>>;
}
