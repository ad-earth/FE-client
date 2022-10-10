import * as t from "./itemList.style";
import { theme } from "../../style/theme";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context";
import { SquareBadge } from "../../elements/Badge";
import { MainButton } from "../../elements/Buttons";
import OptionModal from "../modal/optionModal/OptionModal";

const ItemList = () => {
  const [optionIsOpen, setOptionIsOpen] = useState(false);
  const [prodNo, setProdNo] = useState("");
  const [option, setOption] = useState([] || null);
  const [viewport, setViewport] = useState(visualViewport.width);
  const { cartData } = useContext(UserContext);

  useEffect(() => {
    const resizeListener = () => {
      setViewport(visualViewport.width);
    };
    window.addEventListener("resize", resizeListener);
  });

  const handleOption = (
    prodNo: string,
    option: (string | number)[][] | null
  ) => {
    setOptionIsOpen(true);
    setProdNo(prodNo);
    setOption(option);
  };

  return (
    <>
      <OptionModal
        isOpen={optionIsOpen}
        handleClose={() => setOptionIsOpen(false)}
        prodNo={prodNo}
        option={option}
      />
      {viewport <= 990 ? (
        <>
          {cartData.map((val, i: number) => (
            <t.ItemWrapper>
              <t.SmallProdInfo key={i}>
                <t.CheckBox type="checkbox" />
                <t.SmallDiv>
                  <t.ProdInfo>
                    <t.InfoDiv>
                      <img src={val.thumbnail[0]} />
                      <p>
                        [{val.brand}] {val.name}
                      </p>
                    </t.InfoDiv>
                    <t.Close2 />
                  </t.ProdInfo>
                  {val.option.map((opt, i: number) => (
                    <t.OptDiv key={val.id}>
                      <div>
                        <SquareBadge />
                        <span>
                          {opt[0] ? opt[0] : ""} {opt[0] && opt[1] && "/"}
                          {opt[1] ? opt[1] : ""} - {opt[3]}개
                        </span>
                      </div>
                    </t.OptDiv>
                  ))}
                  <t.DetailInfo className="line">
                    <p>주문금액</p>
                    <p>{val.totalPrice}원</p>
                  </t.DetailInfo>
                  <t.DetailInfo>
                    <span>상품금액(총 {val.totalCnt}개)</span>
                    <span>{val.totalPrice}원</span>
                  </t.DetailInfo>
                  <t.DetailInfo>
                    <span>배송비</span>
                    <span>무료</span>
                  </t.DetailInfo>
                  <t.DetailInfo>
                    <span>배송수단</span>
                    <span>택배</span>
                  </t.DetailInfo>
                  <t.BtnDiv>
                    <MainButton
                      width={"49%"}
                      fontWeight={"normal"}
                      radius={"30px"}
                      border={`0.5px solid ${theme.ls03}`}
                      bgColor={theme.bg01}
                      color={theme.fc14}
                      hBorder={`0.5px solid ${theme.ls03}`}
                      hBgColor={theme.bg01}
                      onClick={() => handleOption(val.prodNo, val.option)}
                    >
                      옵션 / 수량 변경
                    </MainButton>
                    <MainButton
                      width={"49%"}
                      fontWeight={"normal"}
                      radius={"30px"}
                    >
                      바로구매
                    </MainButton>
                  </t.BtnDiv>
                </t.SmallDiv>
              </t.SmallProdInfo>
            </t.ItemWrapper>
          ))}
        </>
      ) : (
        <>
          {cartData.map((val, i: number) => (
            <t.BigDiv>
              <t.ItemWrapper>
                <t.ProdInfo key={val.id}>
                  <t.CheckBox type="checkbox" />
                  <img src={val.thumbnail[0]} />
                  <t.InfoDiv>
                    <p>
                      [{val.brand}] {val.name}
                    </p>
                    {val.option.map((opt, i: number) => (
                      <t.OptDiv key={i}>
                        <div>
                          <SquareBadge />
                          <span>
                            {opt[0] ? opt[0] : ""} {opt[0] && opt[1] && "/"}
                            {opt[1] ? opt[1] : ""} - {opt[3]}개
                          </span>
                        </div>
                        <t.Close />
                      </t.OptDiv>
                    ))}
                  </t.InfoDiv>
                  <t.Close2 />
                </t.ProdInfo>
                <t.DetailInfo className="mid">
                  <span>{val.totalCnt}</span>
                  <MainButton
                    width={"106px"}
                    fontWeight={"normal"}
                    radius={"30px"}
                    border={`0.5px solid ${theme.ls03}`}
                    bgColor={theme.bg01}
                    color={theme.fc14}
                    hBorder={`0.5px solid ${theme.ls03}`}
                    hBgColor={theme.bg01}
                    onClick={() => handleOption(val.prodNo, val.option)}
                  >
                    옵션 / 수량 변경
                  </MainButton>
                </t.DetailInfo>
                <t.DetailInfo className="mid">
                  <p>{val.totalPrice}원</p>
                  <MainButton
                    width={"106px"}
                    fontWeight={"normal"}
                    radius={"30px"}
                  >
                    바로구매
                  </MainButton>
                </t.DetailInfo>
                <t.DetailInfo className="small">
                  <span>무료</span>
                </t.DetailInfo>
              </t.ItemWrapper>
            </t.BigDiv>
          ))}
        </>
      )}
    </>
  );
};

export default ItemList;
