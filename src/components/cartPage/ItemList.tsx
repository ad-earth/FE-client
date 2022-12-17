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
import { CartPayType } from "../../shared/types/types";
import { OptionArrType } from "./../../../src/shared/types/types";
import { PropsType } from "./itemList.type";
import { setModalOpen, setReplace } from "../../redux/reducer/optionSlice";
import { putAllPaymentDB } from "../../shared/utils/putPaymentDB";
import { useNavigate } from "react-router-dom";

const ItemList = (props: PropsType) => {
  const viewport = useViewport();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const replace = useAppSelector((state) => state.optionSlice.replace);
  const [cartData, setCartData] = useState<CartPayType[]>();
  const [productNo, setProductNo] = useState<number>(0);
  const [option, setOption] = useState([] || null);
  const [checkedList, setCheckedList] = useState([]);

  const handleOption = (productNo: number, option: OptionArrType[]) => {
    dispatch(setModalOpen(true));
    setProductNo(productNo);
    setOption(option);
  };

  useEffect(() => {
    const result = getAllCartDB();
    result.then((res) => setCartData(res));
  }, []);

  useEffect(() => {
    if (replace) {
      const result = getAllCartDB();
      result.then((res) => setCartData(res));
      dispatch(setReplace(false));
    }
  }, [replace]);

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

  const handleBuy = (val: CartPayType) => {
    putAllPaymentDB([val]);
    navigate("/payment");
  };

  return (
    <>
      <OptionModal productNo={productNo} option={option} />
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
                    <span>상품금액(총 {val?.totalQty}개)</span>
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
                      onClick={() => handleOption(val?.productNo, val?.option)}
                    >
                      옵션 / 수량 변경
                    </MainButton>
                    <MainButton
                      width={"49%"}
                      fontWeight={"normal"}
                      radius={"30px"}
                      onClick={() => handleBuy(val)}
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
                  <span>{val?.totalQty}</span>
                  <MainButton
                    width={"106px"}
                    fontWeight={"normal"}
                    radius={"30px"}
                    border={`0.5px solid ${theme.ls03}`}
                    bgColor={theme.bg01}
                    color={theme.fc14}
                    hBorder={`0.5px solid ${theme.ls03}`}
                    hBgColor={theme.bg01}
                    onClick={() => handleOption(val?.productNo, val?.option)}
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
                    onClick={() => handleBuy(val)}
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
