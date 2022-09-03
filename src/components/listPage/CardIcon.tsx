import styled from "styled-components";

import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as Message } from "../../assets/icons/message-circle.svg";
import { ReactComponent as Cart } from "../../assets/icons/shopping-cart.svg";

import { theme } from "../../style/theme";
import { DataType } from "../../containers/listPage/CardList";
import ListModal from "../../containers/listPage/ListModal";
import { useState } from "react";

const CardIcon = (props: DataType) => {
  const [infoIsOpen, setInfoIsOpen] = useState<boolean>(false);
  return (
    <>
      <ListModal isOpen={infoIsOpen} handleClose={() => setInfoIsOpen(false)} />
      <CardCp>
        <IconDiv>
          <IconSpan>
            <Message
              style={{
                color: `${theme.bg09}`,
              }}
            />
            <Count>{props.p_Review}</Count>
          </IconSpan>
          <IconSpan>
            <Heart
              style={{
                color: `${theme.bg09}`,
                width: "20px",
              }}
            />
            <Count>{props.p_Like}</Count>
          </IconSpan>
          <Cart
            style={{
              color: `${theme.bg09}`,
              cursor: "pointer",
            }}
            onClick={() => {
              setInfoIsOpen(true);
            }}
          />
        </IconDiv>
      </CardCp>
    </>
  );
};

export default CardIcon;

const CardCp = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: inherit;
  margin: -10px 0 25px 0;
`;
const Count = styled.span`
  font-size: ${theme.fs13};
  color: ${theme.bg09};
`;
const IconSpan = styled.span`
  cursor: pointer;
  display: inline-flex !important;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  gap: 5px;
  margin: 0 !important;
`;
const IconDiv = styled.div`
  display: inline-flex;
  gap: 10px;
  margin-top: 0.75em !important;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
`;
