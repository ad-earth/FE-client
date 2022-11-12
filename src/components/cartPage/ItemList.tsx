import * as t from "./itemList.style";
import { theme } from "../../style/theme";
import { useEffect, useState, useCallback, useMemo } from "react";
import { SquareBadge } from "../../elements/badge/Badge";
import { MainButton } from "../../elements/buttons/Buttons";
import OptionModal from "../modal/optionModal/OptionModal";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setCheckedItems } from "../../redux/reducer/cartSlice";
import { useViewport } from "../../hooks/useViewport";
import { getAllCartDB } from "../../hooks/useAllCartDB";
import { CartType } from "../../shared/types/types";
import { OptionArrType } from "./../../../src/shared/types/types";
import { PropsType } from "./itemList.type";
import { setModalOpen } from "../../redux/reducer/optionSlice";

const ItemList = (props: PropsType) => {
  const viewport = useViewport();
  const dispatch = useAppDispatch();
  const [cartData, setCartData] = useState<CartType[]>();
  console.log("cartData: ", cartData);

  const [optionIsOpen, setOptionIsOpen] = useState<boolean>(false);
  const [productNo, setProductNo] = useState<number>(0);
  const [option, setOption] = useState([] || null);
  const [price, setPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [keywordNo, setKeywordNo] = useState<number>(0);
  const [checkedList, setCheckedList] = useState([]);

  const handleOption = (
    productNo: number,
    option: OptionArrType[],
    price: number,
    discount: number,
    keywordNo: number
  ) => {
    dispatch(setModalOpen(true));
    // setOptionIsOpen(true);
    setProductNo(productNo);
    setOption(option);
    setPrice(price);
    setDiscount(discount);
    setKeywordNo(keywordNo);
  };

  useEffect(() => {
    const result = getAllCartDB();
    result.then((res) => setCartData(res));
  }, []);

  // 개별 상품 선택 | 해제
  const handleCheck = useCallback(
    (checked: boolean, id: string) => {
      if (checked) {
        setCheckedList([...checkedList, Number(id)]);
      } else {
        setCheckedList(checkedList.filter((el) => el !== Number(id)));
      }
    },
    [checkedList]
  );

  // 전체 선택 | 해제
  const allCheckedItem = useMemo(() => {
    if (props.allChecked) {
      setCheckedList(cartData?.map((el) => el.id));
      return <t.CheckBox type="checkbox" defaultChecked={true} />;
    } else {
      setCheckedList([]);
      return <t.CheckBox type="checkbox" defaultChecked={false} />;
    }
  }, [props.allChecked]);

  // 선택상품 배열 저장
  useEffect(() => {
    if (checkedList) {
      dispatch(setCheckedItems(checkedList));
    }
  }, [checkedList]);

  return (
    <>
      <OptionModal
        isOpen={optionIsOpen}
        handleClose={() => setOptionIsOpen(false)}
        productNo={productNo}
        option={option}
        price={price}
        discount={discount}
        keywordNo={keywordNo}
      />
      {viewport <= 990 ? (
        <>
          {cartData?.map((val, i: number) => (
            <t.ItemWrapper>
              <t.SmallProdInfo key={i}>
                {props.allChecked ? (
                  <>{allCheckedItem}</>
                ) : (
                  <t.CheckBox
                    type="checkbox"
                    value={val?.id || ""}
                    onChange={(e) => {
                      handleCheck(
                        e.currentTarget.checked,
                        e.currentTarget.value
                      );
                    }}
                  />
                )}
                <t.SmallDiv>
                  <t.ProdInfo>
                    <t.InfoDiv>
                      <img src={val?.thumbnail[0]} />
                      <p>
                        [{val?.brand}] {val?.name}
                      </p>
                    </t.InfoDiv>
                    <t.Close2 />
                  </t.ProdInfo>
                  {val?.option.map((opt, i: number) => (
                    <t.OptDiv key={i}>
                      <div>
                        <SquareBadge />
                        <span>
                          {opt[0] ? opt[0] : ""} {opt[0] && opt[2] && "/"}
                          {opt[2] ? opt[2] : ""} - {opt[4]}개
                        </span>
                      </div>
                    </t.OptDiv>
                  ))}
                  <t.DetailInfo className="line">
                    <p>주문금액</p>
                    <p>{val?.totalPrice}원</p>
                  </t.DetailInfo>
                  <t.DetailInfo>
                    <span>상품금액(총 {val?.totalCnt}개)</span>
                    <span>{val?.totalPrice}원</span>
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
                      onClick={() =>
                        handleOption(
                          val?.productNo,
                          val?.option,
                          val?.price,
                          val?.discount,
                          val?.keywordNo
                        )
                      }
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
          {cartData?.map((val, i: number) => (
            <t.BigDiv>
              <t.ItemWrapper>
                <t.ProdInfo key={val.id}>
                  {props.allChecked ? (
                    <>{allCheckedItem}</>
                  ) : (
                    <t.CheckBox
                      type="checkbox"
                      value={val?.id || ""}
                      onChange={(e) => {
                        handleCheck(
                          e.currentTarget.checked,
                          e.currentTarget.value
                        );
                      }}
                    />
                  )}
                  <img src={val?.thumbnail[0]} />
                  <t.InfoDiv>
                    <p>
                      [{val?.brand}] {val?.name}
                    </p>
                    {val?.option.map((opt, i: number) => (
                      <t.OptDiv key={i}>
                        <div>
                          <SquareBadge />
                          <span>
                            {opt[0] ? opt[0] : ""} {opt[0] && opt[2] && "/"}
                            {opt[2] ? opt[2] : ""} - {opt[4]}개
                          </span>
                        </div>
                        <t.Close />
                      </t.OptDiv>
                    ))}
                  </t.InfoDiv>
                  <t.Close2 />
                </t.ProdInfo>
                <t.DetailInfo className="mid">
                  <span>{val?.totalCnt}</span>
                  <MainButton
                    width={"106px"}
                    fontWeight={"normal"}
                    radius={"30px"}
                    border={`0.5px solid ${theme.ls03}`}
                    bgColor={theme.bg01}
                    color={theme.fc14}
                    hBorder={`0.5px solid ${theme.ls03}`}
                    hBgColor={theme.bg01}
                    onClick={() =>
                      handleOption(
                        val?.productNo,
                        val?.option,
                        val?.price,
                        val?.discount,
                        val?.keywordNo
                      )
                    }
                  >
                    옵션 / 수량 변경
                  </MainButton>
                </t.DetailInfo>
                <t.DetailInfo className="mid">
                  <p>{val?.totalPrice}원</p>
                  <MainButton
                    width={"106px"}
                    fontWeight={"normal"}
                    radius={"30px"}
                    // onClick={() => handleBuy(val)}
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
