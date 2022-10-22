import styled from "styled-components";
import { theme } from "../../../style/theme";

import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { ReactComponent as Message } from "../../../assets/icons/message-circle.svg";
import { ReactComponent as Cart } from "../../../assets/icons/shopping-cart.svg";

export const CardCp = styled.div`
  width: 100%;
  margin-bottom: 10px;
  margin: -10px 0 25px 0;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: inherit;
`;
export const Count = styled.span`
  font-size: ${theme.fs13};
  color: ${theme.bg09};
`;
export const IconSpan = styled.span`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 0 !important;
  gap: 5px;
`;
export const IconDiv = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  margin-top: 0.75em;
  text-align: center;
`;
export const EmptyHeartIcon = styled(Heart)`
  color: ${(props) => props.theme.bg09};
  width: 20px;
  cursor: pointer;
`;
export const HeartIcon = styled(Heart)`
  fill: ${(props) => props.theme.bg16};
  color: ${(props) => props.theme.bg16};
  width: 20px;
  cursor: pointer;
`;
export const MessageIcon = styled(Message)`
  color: ${(props) => props.theme.bg09};
  width: 20px;
  cursor: pointer;
`;
export const CartIcon = styled(Cart)`
  color: ${(props) => props.theme.bg09};
  width: 20px;
  cursor: pointer;
`;
