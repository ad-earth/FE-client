import styled from "styled-components";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

interface ModalType {
  drop?: boolean;
}

export const OptContainer = styled.div`
  width: 480px;
`;
export const OptHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 14px 20px;
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
  font-size: 16px;
`;
export const Close = styled(CloseRoundedIcon)({
  color: "#e5e7eb",
  position: "absolute",
  top: 15,
  right: 15,
});
export const OptContents = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const OptBtn = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px auto;
`;
export const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  img {
    width: 62px;
    height: 62px;
    object-fit: contain;
    margin-right: 20px;
  }
`;
export const ItemDesc = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;
  span {
    margin-top: 5px;
    color: #00913a;
  }
`;
export const DropDown = styled.div`
  position: relative;
  padding: 20px 0 30px 0;
  font-size: 12px;
  font-weight: bold;
  color: #212121;
  drop?: boolean;
`;
export const OptDrop = styled.div<ModalType>`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  color: #646464;
  font-size: 14px;
  font-weight: normal;
  padding: 8px 12px;
  box-sizing: border-box;
  border: ${(props) =>
    props.drop ? "0.5px solid #212121" : "0.5px solid #bbb"};
  cursor: pointer;
`;
export const DropMenu = styled.div`
  position: absolute;
  width: 100%;
  z-index: 5px;
  color: #646464;
  background: #fff;
  font-size: 14px;
  padding: 8px 12px;
  box-sizing: border-box;
  border-top: none;
  border-bottom: 0.5px solid #212121;
  border-left: 0.5px solid #212121;
  border-right: 0.5px solid #212121;
  cursor: pointer;
  span {
    font-weight: 600;
  }
  :hover {
    background: #f6f6f6;
  }
`;

export const SelectBox = styled.div`
  width: 100%;
  padding: 20px;
  color: #646464;
  font-size: 15px;
  box-sizing: border-box;
  background-color: rgba(100, 100, 100, 0.03);
`;
export const SelInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid #e5e5e5;
`;
export const SelPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  color: #212121;
`;
export const CancelBtn = styled(HighlightOffRoundedIcon)({
  color: "#bebebe",
});

export const Total = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 13px;
  color: #646464;
  span {
    color: #00913a;
  }
  p {
    color: #00913a;
    font-size: 18px;
  }
`;
