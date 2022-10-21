import { useEffect } from "react";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../../redux/store";
import { DataType, DbDataType } from "./pdInfo.type";
import * as t from "./pdtInfo.style";

const PdtInfo = (props: DbDataType) => {
  console.log(props.data);

  const dispatch = useAppDispatch();
  return (
    <>
      {props.data.map((val: DataType, i: number) => {
        return (
          <>
            {val.option.map(
              (
                v: [
                  string | null,
                  string | null,
                  string | null,
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
