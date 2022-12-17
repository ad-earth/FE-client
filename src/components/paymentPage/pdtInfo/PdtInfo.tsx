import * as t from "./pdtInfo.style";
import { useEffect } from "react";
import { DataPropsType } from "./pdInfo.type";
import { useAppDispatch } from "../../../redux/store";
import { setPayData } from "../../../redux/reducer/payPdtSlice";

const PdtInfo = ({ data }: { data: DataPropsType[] }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPayData(data));
  }, []);

  return (
    <>
      {data && (
        <>
          {data?.map((val, i: number) => {
            return (
              <>
                {val.option.length === 0 ? (
                  <>
                    <t.ListArea>
                      <t.PdArea>
                        <t.PdInfoDiv>
                          <t.ProductImg src={val?.thumbnail[0]} />
                          <t.ProductInfo>
                            <t.ProductName>
                              [{val?.brand}] {val?.name}
                            </t.ProductName>
                            <t.ProducOption>{val.totalQty}개</t.ProducOption>
                            <t.ProducPrice>
                              {val.totalPrice.toLocaleString("ko-KR")}원
                            </t.ProducPrice>
                          </t.ProductInfo>
                        </t.PdInfoDiv>
                      </t.PdArea>
                    </t.ListArea>
                  </>
                ) : (
                  <>
                    {val.option.map(
                      (
                        v: [
                          string | null,
                          string | null,
                          string | null,
                          number | null,
                          number,
                          number
                        ],
                        idx: number
                      ) => {
                        return (
                          <t.ListArea key={idx}>
                            <t.PdArea>
                              <t.PdInfoDiv>
                                <t.ProductImg src={val?.thumbnail[0]} />
                                <t.ProductInfo>
                                  <t.ProductName>
                                    [{val?.brand}] {val?.name}
                                  </t.ProductName>
                                  <t.ProducOption>
                                    {v[0]}
                                    {v[2]} - {v[4]}개
                                  </t.ProducOption>
                                  <t.ProducPrice>
                                    {v[5].toLocaleString("ko-KR")}원
                                  </t.ProducPrice>
                                </t.ProductInfo>
                              </t.PdInfoDiv>
                            </t.PdArea>
                          </t.ListArea>
                        );
                      }
                    )}
                  </>
                )}
              </>
            );
          })}
        </>
      )}
    </>
  );
};

export default PdtInfo;
