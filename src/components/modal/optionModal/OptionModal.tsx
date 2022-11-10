import * as t from "./optionModal.style";
import { theme } from "../../../style/theme";
import { useEffect, useState } from "react";
import { openDB } from "idb";

import { MainButton } from "../../../elements/buttons/Buttons";
import Modal from "../Modal";
import { ColorHoverIcon } from "../../../elements/colorIcons/ColorIcons";
import { useGetOption } from "./useGetOption";
// import ProdCnt, { ProdOptCnt } from "../../detailPage/prodCnt/ProdCnt";
export interface ModalType {
  isOpen?: boolean;
  handleClose: () => void;
  prodNo: string;
  option?: Array<
    [string | null, string | null, number | null, number | null, number | null]
  > | null;
  price: number;
  discount: number;
  kNo: number;
}

type ProductType = {
  a_Brand: string;
  p_No: number;
  keywordNo: number;
  p_Thumbnail: string[];
  p_Category: string;
  p_Name: string;
  p_Cost: number;
  p_Discount: number;
  p_Option: Array<
    [string | null, string | null, string | null, number | null, number | null]
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

  // 상품 가격 할인율 계산
  let price = product && product.p_Cost * (1 - product.p_Discount / 100);

  // 옵션 선택 시, props 전달용 옵션 리스트 생성
  const [optionList, setOptionList] = useState([]);

  // 이전 선택 옵션 리스트 생성
  useEffect(() => {
    if (props.option) {
      for (let i = 0; i < props.option.length; i++) {
        let price = props.price && props.price * (1 - props.discount / 100);
        let newOption = {
          id: Number(i),
          color: props.option[i][0],
          size: props.option[i][1],
          colorSize: props.option[i][0] + props.option[i][1],
          optionPrice: props.option[i][2],
          price: price + props.option[i][2],
          qty: props.option[i][3],
        };
        optionList.push(newOption);
      }
    }
  }, [props.option]);

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
        id: optionList.length,
        color: color,
        size: size,
        colorSize: color + size,
        optionPrice: optionPrice,
        price: price + optionPrice,
        qty: qty,
      };
      setOptionList([...optionList, newOption]);
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
  }, [optionList, props.option]);

  const handleUpdateOptList = async () => {
    let cartOptionList: (string | number)[][] = [];
    let cartOption: (string | number)[];
    optionList.map((option) => {
      if (!option.color && !option.size) {
        cartOptionList = [];
      } else {
        cartOption = [
          option.color,
          option.size,
          option.optionPrice,
          option.qty,
          (option.optionPrice + option.price) * option.qty,
        ];
        cartOptionList.push(cartOption);
      }
    });
    let store;
    const db = await openDB("cart", 1, {
      upgrade(db) {
        store = db.createObjectStore("cart", {
          keyPath: "id",
          autoIncrement: true,
        });
      },
    });
    store = db.transaction("cart", "readwrite").objectStore("cart");
    store.put({
      id: product.p_No,
      keywordNo: props.kNo,
      prodNo: product.p_No,
      thumbnail: product.p_Thumbnail[0],
      category: product.p_Category,
      brand: product.a_Brand,
      name: product.p_Name,
      price: product.p_Cost,
      discount: product.p_Discount,
      option: cartOptionList,
      totalPrice: totalPrice,
      totalCnt: totalQty,
    });
    window.location.reload();
  };

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
              <>
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
                    <t.ColorBox>
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
                    </t.ColorBox>

                    <>
                      <t.OptDrop drop={drop} onClick={() => setDrop(!drop)}>
                        {product && product.p_Name}(필수)
                        {drop ? <t.ArrowUp /> : <t.ArrowDown />}
                      </t.OptDrop>

                      {drop ? (
                        <t.DropMenuWrapper>
                          {product &&
                            product.p_Option.map((option, i) => (
                              <t.DropMenu
                                key={i}
                                onClick={() => {
                                  {
                                    option[4] != 0
                                      ? addOptionList(
                                          option[0],
                                          option[2],
                                          option[3]
                                        )
                                      : alert(
                                          "선택하신 상품은 재고가 없습니다."
                                        );
                                  }
                                  setDrop(!drop);
                                }}
                              >
                                <t.OptionWrapper>
                                  {option[0] && option[0]}{" "}
                                  {option[2] && option[2]}{" "}
                                  {option[4] === 0 ? "(품절)" : null}
                                </t.OptionWrapper>
                              </t.DropMenu>
                            ))}
                        </t.DropMenuWrapper>
                      ) : null}
                    </>
                  </>
                </t.DropDown>
                {
                  product && product.p_Option.length > 0 ? (
                    <>
                      {/* <ProdOptCnt
                      optionList={optionList}
                      changeOptionList={changeOptionList}
                      removeOption={removeOption}
                    /> */}
                      <t.Total>
                        <div>
                          총 수량 <span>{totalQty}</span>개
                        </div>
                        <p>{totalPrice && totalPrice.toLocaleString()}원</p>
                      </t.Total>
                    </>
                  ) : null
                  // <ProdCnt price={price} setTotalQty={setTotalQty} />
                }
              </>
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
              <MainButton
                width={"49%"}
                fontWeight={"normal"}
                radius={"30px"}
                onClick={handleUpdateOptList}
              >
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
