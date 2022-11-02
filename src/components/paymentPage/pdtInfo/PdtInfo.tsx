import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { setPayData } from "../../../redux/reducer/payPdtSlice";
import { useAppDispatch } from "../../../redux/store";
import { DataPropsType, OptionType } from "./pdInfo.type";
import * as t from "./pdtInfo.style";

const PdtInfo = ({
  dtData,
  cartData,
}: {
  dtData: DataPropsType[];
  cartData: DataPropsType[];
}) => {
  const dispatch = useAppDispatch();
  const { prodNo } = useParams();

  useEffect(() => {
    dispatch(setPayData(dtData));
    // dispatch(setPayData(cartData));
  }, []);

  return (
    <>
      {prodNo ? (
        <>
          {dtData.map((val, i: number) => {
            return (
              <>
                {val.option.map((v: OptionType, idx: number) => {
                  return (
                    <t.ListArea key={idx}>
                      <t.PdArea>
                        <t.PdInfoDiv>
                          <t.ProductImg src={val.thumbnail[0]} />
                          <t.ProductInfo>
                            <t.ProductName>
                              [{val.brand}] {val.name}
                            </t.ProductName>
                            <t.ProducOption>
                              {v.color}
                              {v.size} - {v.qty}개
                            </t.ProducOption>
                            <t.ProducPrice>
                              {v.price.toLocaleString("ko-KR")}원
                            </t.ProducPrice>
                          </t.ProductInfo>
                        </t.PdInfoDiv>
                      </t.PdArea>
                    </t.ListArea>
                  );
                })}
              </>
            );
          })}
        </>
      ) : (
        <>
          {cartData.map((val, i: number) => {
            return (
              <>
                {val.option.map((v: OptionType, idx: number) => {
                  return (
                    <t.ListArea key={idx}>
                      <t.PdArea>
                        <t.PdInfoDiv>
                          <t.ProductImg src={val.thumbnail[0]} />
                          <t.ProductInfo>
                            <t.ProductName>
                              [{val.brand}] {val.name}
                            </t.ProductName>
                            <t.ProducOption>
                              {v.color}
                              {v.size} - {v.qty}개
                            </t.ProducOption>
                            <t.ProducPrice>
                              {v.price.toLocaleString("ko-KR")}원
                            </t.ProducPrice>
                          </t.ProductInfo>
                        </t.PdInfoDiv>
                      </t.PdArea>
                    </t.ListArea>
                  );
                })}
              </>
            );
          })}
        </>
      )}
    </>
  );
};

export default PdtInfo;
