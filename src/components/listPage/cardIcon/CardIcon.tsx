import * as t from "./cardicon.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { ReactComponent as Message } from "../../../assets/icons/message-circle.svg";
import { ReactComponent as Cart } from "../../../assets/icons/shopping-cart.svg";

import { theme } from "../../../style/theme";
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
            <Message
              onClick={() => navigate(`/detail/main/${props.p_No}`)}
              style={{
                color: `${theme.bg09}`,
              }}
            />
            <t.Count>{props.p_Review}</t.Count>
          </t.IconSpan>
          <t.IconSpan>
            <Heart
              style={{
                color: `${theme.bg09}`,
                width: "20px",
              }}
            />
            <t.Count>{props.p_Like}</t.Count>
          </t.IconSpan>
          <Cart
            style={{
              cursor: "pointer",
              color: `${theme.bg09}`,
            }}
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
