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
              onClick={() => navigate(`/detail/main/${props.pNo}`)}
              onMouseEnter={() => setImgHover(true)}
              onMouseLeave={() => setImgHover(false)}
              src={imgHover ? props.pThumbnail[1] : props.pThumbnail[0]}
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
                  onClick={() => navigate(`/detail/main/${props.pNo}`)}
                  onMouseEnter={() => setImgHover(true)}
                  onMouseLeave={() => setImgHover(false)}
                  src={imgHover ? props.pThumbnail[1] : props.pThumbnail[0]}
                />
                <Badge type={"ad"}>AD</Badge>
              </t.AdCardArea>
            ) : (
              <t.CardImg
                onClick={() => navigate(`/detail/main/${props.pNo}`)}
                onMouseEnter={() => setImgHover(true)}
                onMouseLeave={() => setImgHover(false)}
                src={imgHover ? props.pThumbnail[1] : props.pThumbnail[0]}
              />
            )}
          </>
        )}

        <t.Div>
          {props.pOption ? (
            <t.Div>
              <ColorIcon colorCode={props.pOption} />
            </t.Div>
          ) : null}
          <t.CardTitle onClick={() => navigate(`/detail/main/${props.pNo}`)}>
            [{props.aBrand}] {props.pName}
          </t.CardTitle>

          {props.pSale === true ? (
            <t.PriceDiv>
              <t.CardPrice>
                {Math.floor(
                  (props.pCost / 100) * (100 - props.pDiscount)
                ).toLocaleString("ko-KR")}
                원
              </t.CardPrice>
              <t.OriginPrice>
                {props.pCost.toLocaleString("ko-KR")}원
              </t.OriginPrice>
            </t.PriceDiv>
          ) : (
            <t.CardPrice>{props.pCost.toLocaleString("ko-KR")}원</t.CardPrice>
          )}
        </t.Div>
      </t.CardCp>
    </>
  );
};

export default Card;
