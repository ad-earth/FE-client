import { ReviewType } from "../../../shared/types/types";

export interface ReviewResponseType {
  p_review: number;
  reviews: ReviewType[];
}
