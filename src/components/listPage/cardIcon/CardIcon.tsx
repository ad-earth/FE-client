import * as t from "./cardIcon.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CardIconType } from "./cardIcon.type";
import ListModal from "../../../containers/listPage/listModa/ListModal";
import { style } from "@mui/system";
import { theme } from "../../../style/theme";
import { fill } from "lodash";

const CardIcon = (props: CardIconType) => {
  const [infoIsOpen, setInfoIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const [isWishAdd, setIsWishAdd] = useState<boolean>(false);
  // const [wishCount, setWishCount] = useStaet(808);
  // const wishAddHandler = () => {
  //   setIsWishAdd(!isWishadd);
  // };
  // const UserLike = () => {
  //   for (const i in {props.userLike}) {
  //     console.log(i);
  //   }
  // };
  // console.log(props.userLike);
  console.log(props.pNo);

  return (
    <>
      <ListModal isOpen={infoIsOpen} handleClose={() => setInfoIsOpen(false)} />
      <t.CardCp>
        <t.IconDiv>
          <t.IconSpan>
            <t.MessageIcon
              onClick={() => navigate(`/detail/main/${props.pNo}`)}
            />
            <t.Count>{props.pReview}</t.Count>
          </t.IconSpan>
          <t.IconSpan>
            {props.userLike.includes(props.pNo) ? (
              <t.HeartIcon />
            ) : (
              <t.EmptyHeartIcon onClick={props.onClick} />
            )}
            <t.Count>{props.pLike}</t.Count>
          </t.IconSpan>
          <t.CartIcon
            onClick={() => {
              setInfoIsOpen(true);
            }}
          />
        </t.IconDiv>
      </t.CardCp>
    </>
  );
};

export default CardIcon;
