import StarRoundedIcon from "@mui/icons-material/StarRounded";
import * as t from "./starRate.style";
import { PropsType } from "./starRate.type";

const StarRate = ({ starVal, setStarVal }: PropsType) => {
  return (
    <t.RatingWrapper
      icon={<StarRoundedIcon fontSize="large" />}
      emptyIcon={<StarRoundedIcon fontSize="large" color="disabled" />}
      name="starIcon"
      size="large"
      value={starVal.r_Score}
      onChange={(event, newValue) =>
        setStarVal({ ...starVal, r_Score: newValue === null ? 0 : newValue })
      }
    />
  );
};

export default StarRate;
