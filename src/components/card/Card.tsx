import * as t from "./card.style";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import { ColorIcon } from "../../elements/ColorIcons";
import { Badge } from "../../elements/Badge";
import { CardCompoType } from "./card.type";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

const Card = (props: CardCompoType) => {
  const [imgHover, setImgHover] = useState<Boolean>(false);
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { keyParams } = useParams<{ keyParams: string }>();

  return (
    <>
      <t.CardCp
        onClick={() =>
          navigate({
            pathname: `/detail/${props.pNo}`,
            search: `category=${category}&keword=${keyParams}`,
          })
        }
      >
        {props.type === "wish" ? (
          <t.WishCard>
            <t.CardImg
              onMouseEnter={() => setImgHover(true)}
              onMouseLeave={() => setImgHover(false)}
              src={
                imgHover && props.pThumbnail.length > 1
                  ? props.pThumbnail[1]
                  : props.pThumbnail[0]
              }
            />
            <span>
              <HighlightOffRoundedIcon
                style={{ fill: "#fff", width: "25px" }}
                onClick={props.heartClick}
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
                  src={
                    imgHover && props.pThumbnail.length > 1
                      ? props.pThumbnail[1]
                      : props.pThumbnail[0]
                  }
                />
                <Badge type={"ad"}>AD</Badge>
              </t.AdCardArea>
            ) : (
              <t.CardImg
                onMouseEnter={() => setImgHover(true)}
                onMouseLeave={() => setImgHover(false)}
                src={
                  imgHover && props.pThumbnail.length > 1
                    ? props.pThumbnail[1]
                    : props.pThumbnail[0]
                }
              />
            )}
          </>
        )}

        <t.Div>
          {props.pOption ? (
            <t.IconDiv>
              {props.pOption.map((v, i) => {
                return v[1] === null ? null : (
                  <t.Icon>
                    <ColorIcon colorCode={v[1]} />
                  </t.Icon>
                );
              })}
            </t.IconDiv>
          ) : null}

          <t.CardTitle>
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
