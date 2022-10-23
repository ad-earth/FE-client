import { useEffect } from "react";
import { setPayData } from "../../../redux/reducer/payPdtSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { DataType } from "./pdInfo.type";
import * as t from "./pdtInfo.style";

const PdtInfo = (props: DataType) => {
  console.log(props.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPayData(props.data));
  });
  const data = useAppSelector((state) => state.payPdtSlice.products);
  console.log("data: ", data);

  return (
    <>
      {props.data.map((val, i: number) => {
        return (
          <>
            {val.option.map(
              (
                v: [
                  string | null,
                  string | null,
                  number | null,
                  number,
                  number
                ],
                idx: number
              ) => {
                return (
                  <t.ListArea key={String(v[0])}>
                    <t.PdArea>
                      <t.PdInfoDiv>
                        <t.ProductImg src={val.thumbnail} />
                        <t.ProductInfo>
                          <t.ProductName>
                            [{val.brand}] {val.name}
                          </t.ProductName>
                          <t.ProducOption>
                            {v[0]}
                            {v[1]} - {v[3]}개
                          </t.ProducOption>
                          <t.ProducPrice>
                            {v[4].toLocaleString("ko-KR")}원
                          </t.ProducPrice>
                        </t.ProductInfo>
                      </t.PdInfoDiv>
                    </t.PdArea>
                  </t.ListArea>
                );
              }
            )}
          </>
        );
      })}
    </>
  );
};

export default PdtInfo;
