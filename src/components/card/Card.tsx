import * as t from "./card.style";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { CardCompoType } from "./card.type";
import { Badge } from "../../elements/badge/Badge";
import { ColorIcon } from "../../elements/colorIcons/ColorIcons";

const Card = (props: CardCompoType) => {
  const navigate = useNavigate();
  const [imgHover, setImgHover] = useState<Boolean>(false);
  const { category } = useParams<{ category: string }>();
  const { keyParams } = useParams<{ keyParams: string }>();
  //-- 컬러칩 중복제거
  let optionArr = [];
  for (let i in props.pOption) {
    optionArr.push(props.pOption[i][1]);
  }
  const optionColor = new Set(optionArr);
  const newColorCode = [...optionColor];

  return (
    <>
      <t.CardCp>
        {props.type === "wish" ? (
          <t.WishCard>
            <t.CardImg
              onClick={() =>
                navigate({
                  pathname: `/detail/${props.pNo}`,
                  search: `category=${category}&keyword=${keyParams}`,
                })
              }
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
                  onClick={() =>
                    navigate({
                      pathname: `/detail/${props.pNo}`,
                      search: `category=${category}&keyword=${keyParams}`,
                    })
                  }
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
                onClick={() =>
                  navigate({
                    pathname: `/detail/${props.pNo}`,
                    search: `category=${category}&keyword=null`,
                  })
                }
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
              {newColorCode.map((v) => {
                return v === null || v === "" ? null : (
                  <t.Icon>
                    <ColorIcon colorCode={v} />
                  </t.Icon>
                );
              })}
            </t.IconDiv>
          ) : null}

          <t.CardTitle
            onClick={() =>
              navigate({
                pathname: `/detail/${props.pNo}`,
                search: `category=${category}&keyword=${keyParams}`,
              })
            }
          >
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
