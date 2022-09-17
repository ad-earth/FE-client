import * as t from "./card.style";

import { ColorIcon } from "../../elements/ColorIcons";
import { Badge } from "../../elements/Badge";
import { CardCompoType } from "./card.type";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { useState } from "react";

const Card = (props: CardCompoType) => {
  const [imgHover, setImgHover] = useState<Boolean>(false);

  return (
    <>
      <t.CardCp>
        {props.type === "wish" ? (
          <t.WishCard>
            <t.CardImg
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
                  onMouseEnter={() => setImgHover(true)}
                  onMouseLeave={() => setImgHover(false)}
                  src={imgHover ? props.p_Thumbnail[1] : props.p_Thumbnail[0]}
                />
                <Badge type={"ad"}>AD</Badge>
              </t.AdCardArea>
            ) : (
              <t.CardImg
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
          <t.CardTitle>
            [{props.a_Brand}] {props.p_Name}
          </t.CardTitle>
          <t.Cardprice>{props.p_Cost.toLocaleString("ko-KR")}원</t.Cardprice>
        </t.Div>
      </t.CardCp>
    </>
  );
};

export default Card;
