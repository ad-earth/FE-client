import * as t from "./CartItemStyle";
import { SquareBadge } from "../../elements/Badge";
import { MainButton } from "../../elements/Buttons";

const ItemList = () => {
  return (
    <t.ItemWrapper>
      <t.ProdInfo>
        <t.CheckBox type="checkbox" />
        <t.ProdImg src="https://cdn.imweb.me/thumbnail/20220117/6a329ba1bf9e7.jpg"></t.ProdImg>
        <t.InfoDiv>
          <p>[지구샵] 대나무칫솔</p>
          <t.OptDiv>
            <div>
              <SquareBadge />
              <span>성인용(19cm)-1개</span>
            </div>
            <t.Close sx={{ fontSize: 18, cursor: "pointer" }} />
          </t.OptDiv>
        </t.InfoDiv>
        <t.Close sx={{ fontSize: 24, cursor: "pointer" }} />
      </t.ProdInfo>
      <t.DetailInfo className="mid">
        <span>1</span>
        <MainButton
          width={"106px"}
          fontWeight={"normal"}
          radius={"30px"}
          border={"0.5px solid #e5e7eb"}
          bgColor={"#fff"}
          color={"#212121"}
          hBorder={"0.5px solid #646464"}
          hBgColor={"#fff"}
        >
          옵션 / 수량 변경
        </MainButton>
      </t.DetailInfo>
      <t.DetailInfo className="mid">
        <p>2,800원</p>
        <MainButton width={"106px"} fontWeight={"normal"} radius={"30px"}>
          바로구매
        </MainButton>
      </t.DetailInfo>
      <t.DetailInfo className="small">
        <span>무료</span>
      </t.DetailInfo>
    </t.ItemWrapper>
  );
};

export default ItemList;
