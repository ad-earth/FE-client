import { useEffect, useState } from "react";
import { usePaymentDB } from "../../../hooks/usePaymentDB";
import { setPayData } from "../../../redux/reducer/payPdtSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { OptionListType } from "../../../shared/types/types";
import { DataPropsType, DataType, OptionType } from "./pdInfo.type";
import * as t from "./pdtInfo.style";

const PdtInfo = ({ data }: { data: DataPropsType }) => {
  console.log(data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPayData(data));
  });

  let dtDataArr = [];
  dtDataArr.push(data);
  console.log(dtDataArr);

  console.log(data.option);

  return (
    <>
      {dtDataArr ? (
        <>
          <t.ListArea>
            <t.PdArea>
              <t.PdInfoDiv>
                <t.ProductImg src={data.thumbnail[0]} />
                {data.option.map((v: OptionType, idx: number) => {
                  return (
                    <t.ProductInfo>
                      <t.ProductName>
                        [{data.brand}] {data.name}
                      </t.ProductName>
                      <t.ProducOption>
                        {v.color} - {v.qty}개
                      </t.ProducOption>
                      <t.ProducPrice>
                        {v.price.toLocaleString("ko-KR")}원
                      </t.ProducPrice>
                    </t.ProductInfo>
                  );
                })}
              </t.PdInfoDiv>
            </t.PdArea>
          </t.ListArea>
        </>
      ) : (
        <t.ListArea>
          <t.PdArea>
            <t.PdInfoDiv>
              <t.ProductImg src={data.thumbnail[0]} />
              <t.ProductInfo>
                <t.ProductName>
                  [{data.brand}] {data.name}
                </t.ProductName>
                <t.ProducOption>
                  {/* {v[0]}
                    {v[1]} - {v[3]}개 */}
                </t.ProducOption>
                <t.ProducPrice>
                  {/* {v[4].toLocaleString("ko-KR")}원 */}
                </t.ProducPrice>
              </t.ProductInfo>
            </t.PdInfoDiv>
          </t.PdArea>
        </t.ListArea>
      )}
    </>
  );
};

export default PdtInfo;
