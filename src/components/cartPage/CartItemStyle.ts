import styled from "styled-components";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export const CartDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1.5px solid rgba(100, 100, 100, 0.15);
  border-bottom: 0.5px solid rgba(100, 100, 100, 0.15);
  margin-bottom: 20px;
`;
export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
  color: rgba(100, 100, 100, 0.6);
  font-size: 14px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.15);
`;
export const ProdInfo = styled.div`
  width: 63%;
  display: flex;
  flex-direction: row;
`;
export const CheckBox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #00913a;
  border: 1px solid rgba(100, 100, 100, 0.6);
  margin-right: 20px;
`;
export const TopInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  &.mid {
    width: 19%;
  }
  &.small {
    width: 15%;
  }
`;
export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
  font-size: 15px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.15);
`;
export const ProdImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-right: 20px;
`;
export const InfoDiv = styled.div`
  font-size: 15px;
  color: #646464;
  p {
    margin-bottom: 15px;
  }
`;
export const Close = styled(CloseRoundedIcon)({
  color: "#e5e7eb",
});
export const OptDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(100, 100, 100, 0.03);
  color: #646464;
  padding: 8px 12px 8px 10px;
  width: 440px;
  max-width: 440px;
  div {
    display: flex;
    flex-direction: row;
  }
  span {
    margin-left: 5px;
    font-size: 13px;
  }
`;
export const DetailInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #646464;
  span {
    margin: 10px 0;
    font-size: 15px;
  }
  p {
    margin: 6px 0;
    font-size: 20px;
    font-weight: bold;
  }
  &.mid {
    width: 19%;
  }
  &.small {
    width: 15%;
  }
`;
