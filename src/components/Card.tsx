import styled from "styled-components";

import { ColorIcon } from "../elements/ColorIcons";
import { theme } from "../style/theme";
import { DataType } from "../containers/listPage/CardList";

import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

const Card = (props: DataType) => {
  return (
    <>
      <CardCp>
        {props.type === "wish" ? (
          <WishCard>
            <CardImg src={props.p_Thumbnail} />
            <span>
              <HighlightOffRoundedIcon
                style={{ fill: "#fff", width: "25px" }}
              />
            </span>
          </WishCard>
        ) : (
          <>
            <CardImg src={props.p_Thumbnail} />
          </>
        )}

        <Div>
          {props.p_Color ? (
            <Div>
              <ColorIcon colorCode={props.p_Color} />
            </Div>
          ) : null}
          <CardTitle>
            [{props.p_Brand}] {props.p_Name}
          </CardTitle>
          <Cardprice>1,900원</Cardprice>
        </Div>
      </CardCp>
    </>
  );
};

export default Card;

const CardCp = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: inherit;
`;
const CardImg = styled.img`
  width: 100%;
  margin: 0 auto;
  cursor: pointer;
  background-color: grey;
  background-size: cover;
  & hover {
  }
`;
const Div = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 0.3rem;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
`;
const CardTitle = styled.div`
  text-transform: capitalize;
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
  color: #666666;
`;
const Cardprice = styled.div`
  font-size: ${theme.fontSize.small};
  color: ${theme.colors.green2};
`;

//위시리스트
const WishCard = styled.div`
  position: relative;
  filter: brightness(1);
  &:hover {
    & img {
      transition: 0.5s;
      filter: brightness(0.5);
    }
    & span {
      opacity: 1;
    }
  }
  & span {
    position: absolute;
    right: 10px;
    top: 8px;
    z-index: 99;
    opacity: 0;
    cursor: pointer;
  }
`;
