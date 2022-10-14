import * as t from "./OptionModal.style";
import { theme } from "../../../style/theme";
import { useEffect, useState } from "react";

import { CountButton, MainButton } from "../../../elements/Buttons";
import Modal from "../Modal";
import { ColorHoverIcon } from "../../../elements/ColorIcons";
import { useGetOption } from "./useGetOption";
export interface ModalType {
  isOpen?: boolean;
  handleClose: () => void;
  prodNo: string;
  option?: Array<
    [string | null, string | null, number | null, number | null, number | null]
  > | null;
}

type ProductType = {
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Cost: number;
  p_Discount: number;
  p_Option: Array<
    [string | null, string | null, number | null, number | null, number | null]
  >;
};

const OptionModal = (props: ModalType) => {
  const [drop, setDrop] = useState(false);
  const [product, setProduct] = useState<ProductType>();
  const optionData = useGetOption(props.prodNo);

  useEffect(() => {
    if (optionData) {
      setProduct(optionData.product);
    }
  }, [optionData]);

  useEffect(() => {
    if (props.option) {
      console.log(props.option[0]);
    }
  }, [props.option]);
  console.log(props.option);
  console.log(product);

  // 상품 가격 할인율 계산
  let price = product && product.p_Cost * (1 - product.p_Discount / 100);

  // 옵션 선택 시, props 전달용 옵션 리스트 생성
  const [optionList, setOptionList] = useState([]);
  const [optionId, setOptionId] = useState(0);

  // 옵션 리스트 추가
  function addOptionList(color: string, size: string, optionPrice: number) {
    let isOption = false;
    let qty = 0;
    optionList.map((option) => {
      if (option.colorSize === color + size) {
        isOption = true;
      }
    });
    if (isOption) {
      alert("이미 선택한 옵션입니다.");
    } else {
      const newOption = {
        id: optionId,
        color: color,
        size: size,
        colorSize: color + size,
        optionPrice: optionPrice,
        price: price + optionPrice,
        qty: qty,
      };
      setOptionList([...optionList, newOption]);
      setOptionId(optionId + 1);
    }
  }

  // 옵션 리스트 삭제
  function removeOption(targerId: number) {
    let newOptionList = optionList.filter((option) => option.id !== targerId);
    setOptionList(newOptionList);
  }

  // 상품 옵션 수량 수정
  function changeOptionList(newOptionId: number, qty: number) {
    let index = optionList.findIndex((option) => option.id === newOptionId);
    let newOptionList = [...optionList];
    newOptionList[index].qty = qty;
    setOptionList(newOptionList);
  }

  // 상품 총 가격 계산
  const [totalPrice, setTotalPrice] = useState(0);
  function getTotalPrice() {
    let sum = 0;
    optionList.map((option) => {
      sum += option.price * option.qty;
    });
    setTotalPrice(sum);
  }

  // 상품 총 수량 계산
  const [totalQty, setTotalQty] = useState(0);
  function getTotalQty() {
    let sum = 0;
    optionList.map((option) => {
      sum += option.qty;
    });
    setTotalQty(sum);
  }

  // 옵션 리스트 변경 반영
  useEffect(() => {
    getTotalPrice();
    getTotalQty();
  }, [optionList]);

  return (
    <>
      {props.isOpen && (
        <Modal handleClose={() => props.handleClose()} isOpen={props.isOpen}>
          <t.OptContainer>
            <t.OptHeader>
              옵션 변경
              <t.Close onClick={() => props.handleClose()} />
            </t.OptHeader>
            <t.OptContents>
              <t.ItemInfo>
                <img src={product && product.p_Thumbnail[0]} />
                <t.ItemDesc>
                  [{product && product.a_Brand}] {product && product.p_Name}
                  <span>{product && product.p_Cost}원</span>
                </t.ItemDesc>
              </t.ItemInfo>

              {/* 드롭다운 */}
              <t.DropDown>
                <p>{product && product.p_Name} *</p>
                <>
                  {product &&
                    product.p_Option.map((option, i: number) => (
                      <>
                        {option[0] !== null ? (
                          <t.ColorDiv key={i}>
                            {option[0]}
                            <ColorHoverIcon />
                          </t.ColorDiv>
                        ) : null}
                      </>
                    ))}

                  <>
                    <t.OptDrop drop={drop} onClick={() => setDrop(!drop)}>
                      {product && product.p_Name}(필수)
                      {drop ? <t.ArrowUp /> : <t.ArrowDown />}
                    </t.OptDrop>

                    {drop ? (
                      <>
                        {product &&
                          product.p_Option.map((option, i: number) => {
                            return (
                              <t.DropMenu
                                key={i}
                                onClick={() => {
                                  {
                                    option[4] != 0
                                      ? addOptionList(
                                          option[0],
                                          option[1],
                                          option[3]
                                        )
                                      : alert(
                                          "선택하신 상품은 재고가 없습니다."
                                        );
                                  }
                                  setDrop(!drop);
                                }}
                              >
                                {option[2]}
                              </t.DropMenu>
                            );
                          })}
                      </>
                    ) : null}
                  </>
                </>
              </t.DropDown>

              <t.SelectBox>
                <t.SelInfo>
                  <p>성인용(19cm)</p>
                  <t.CancelBtn />
                </t.SelInfo>
                <t.SelPrice>
                  <CountButton />
                  <p>2,800원</p>
                </t.SelPrice>
              </t.SelectBox>
              <t.Total>
                <div>
                  총 수량 <span>1</span>개
                </div>
                <p>2,800원</p>
              </t.Total>
            </t.OptContents>

            <t.OptBtn>
              <MainButton
                width={"49%"}
                fontWeight={"normal"}
                radius={"30px"}
                border={`0.5px solid ${theme.ls03}`}
                bgColor={theme.bg01}
                color={theme.fc14}
                hBorder={`0.5px solid ${theme.ls11}`}
                hBgColor={theme.bg01}
                onClick={() => props.handleClose()}
              >
                취소
              </MainButton>
              <MainButton width={"49%"} fontWeight={"normal"} radius={"30px"}>
                변경
              </MainButton>
            </t.OptBtn>
          </t.OptContainer>
        </Modal>
      )}
    </>
  );
};

export default OptionModal;
