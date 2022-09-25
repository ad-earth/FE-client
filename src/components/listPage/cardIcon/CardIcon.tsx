import * as t from "./cardIcon.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CardIconType } from "./cardIcon.type";
import ListModal from "../../../containers/listPage/listModa/ListModal";

const CardIcon = (props: CardIconType) => {
  const [infoIsOpen, setInfoIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

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
