import { useParams } from "react-router-dom";

import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { theme } from "../../../style/theme";
import { MainButton } from "../../../elements/Buttons";
import * as t from "./prodBtns.style";
import { PropsType } from "./prodBtns.type";
import { useGetLike, useProdLike } from "./useProdLike";

const ProdBtns = (props: PropsType) => {
  const updateProdLike = useProdLike();
  const { prodNo } = useParams();
  const data = useGetLike(prodNo);
  return (
    <div>
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
          onClick={() => updateProdLike(props.prodNo)}
        >
          {data && data.userLike ? (
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
          {data.product && data.product.p_Like}
        </MainButton>
      </t.BtnWrapper>
    </div>
  );
};

export default ProdBtns;
