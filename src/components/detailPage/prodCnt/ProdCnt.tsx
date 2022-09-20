import * as t from "./prodCnt.style";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { CountButton, MainButton } from "../../../elements/Buttons";
import { theme } from "../../../style/theme";
import { PropsType } from "./prodCnt.type";

const ProdCnt = (props: PropsType) => {
  return (
    <div>
      {props.haveOptions ? null : (
        <t.OptBox>
          <t.OptWrapper>수량</t.OptWrapper>
          <t.CountWrapper>
            <CountButton />
            13,400원
          </t.CountWrapper>
        </t.OptBox>
      )}
      {props.option.map((x, idx) => {
        return (
          <div key={x.id}>
            {x.color !== "" ? (
              <t.OptBox>
                <t.OptWrapper>
                  {x.color && x.color}
                  <t.IcX />
                </t.OptWrapper>
                <t.CountWrapper>
                  <CountButton />
                  {props.price + x.price} 원
                </t.CountWrapper>
              </t.OptBox>
            ) : null}
          </div>
        );
      })}
      <t.Price>
        총 상품 금액(1개) <span>{props.price} 원</span>
      </t.Price>
      <t.BtnWrapper>
        <MainButton radius={"30px"}>구매하기</MainButton>
        <MainButton
          radius={"30px"}
          border={`0.5px solid ${theme.ls03}`}
          bgColor={theme.bg01}
          color={theme.fc09}
          hBorder={`0.5px solid ${theme.ls11}`}
          hBgColor={theme.bg01}
        >
          장바구니
        </MainButton>
        <MainButton
          radius={"30px"}
          border={`0.5px solid ${theme.ls03}`}
          bgColor={theme.bg01}
          color={theme.fc09}
          hBorder={`0.5px solid ${theme.ls11}`}
          hBgColor={theme.bg01}
        >
          {props.like ? (
            <Heart
              style={{
                color: theme.fc15,
                fill: theme.bg16,
                paddingRight: "4px",
              }}
            />
          ) : (
            <Heart style={{ color: theme.fc04, paddingRight: "4px" }} />
          )}

          {props.likeCnt}
        </MainButton>
      </t.BtnWrapper>
    </div>
  );
};

export default ProdCnt;
