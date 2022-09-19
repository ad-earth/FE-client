import * as t from "./card.style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { ColorIcon } from "../../elements/ColorIcons";
import { Badge } from "../../elements/Badge";
import { CardCompoType } from "./card.type";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

const Card = (props: CardCompoType) => {
  const [imgHover, setImgHover] = useState<Boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <t.CardCp>
        {props.type === "wish" ? (
          <t.WishCard>
            <t.CardImg
              onClick={() => navigate(`/detail/main/${props.p_No}`)}
              onMouseEnter={() => setImgHover(true)}
              onMouseLeave={() => setImgHover(false)}
              src={imgHover ? props.p_Thumbnail[1] : props.p_Thumbnail[0]}
            />
            <span>
              <HighlightOffRoundedIcon
                style={{ fill: "#fff", width: "25px" }}
              />
            </span>
          </t.WishCard>
        ) : (
          <>
            {props.type === "ad" ? (
              <t.AdCardArea>
                <t.AdCard
                  onClick={() => navigate(`/detail/main/${props.p_No}`)}
                  onMouseEnter={() => setImgHover(true)}
                  onMouseLeave={() => setImgHover(false)}
                  src={imgHover ? props.p_Thumbnail[1] : props.p_Thumbnail[0]}
                />
                <Badge type={"ad"}>AD</Badge>
              </t.AdCardArea>
            ) : (
              <t.CardImg
                onClick={() => navigate(`/detail/main/${props.p_No}`)}
                onMouseEnter={() => setImgHover(true)}
                onMouseLeave={() => setImgHover(false)}
                src={imgHover ? props.p_Thumbnail[1] : props.p_Thumbnail[0]}
              />
            )}
          </>
        )}

        <t.Div>
          {props.p_Option ? (
            <t.Div>
              <ColorIcon colorCode={props.p_Option} />
            </t.Div>
          ) : null}
          <t.CardTitle onClick={() => navigate(`/detail/main/${props.p_No}`)}>
            [{props.a_Brand}] {props.p_Name}
          </t.CardTitle>
          <t.Cardprice>{props.p_Cost.toLocaleString("ko-KR")}원</t.Cardprice>
        </t.Div>
      </t.CardCp>
    </>
  );
};

export default Card;
