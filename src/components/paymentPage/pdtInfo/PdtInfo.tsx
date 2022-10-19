import { useEffect } from "react";
import {
  editABrand,
  editOPrice,
  editPCategory,
  editPCnt,
  editPCost,
  editPDiscount,
  editPSale,
  editPName,
  editPNo,
  editPOption,
  editPPrice,
  editPThumbnail,
  editKNo,
} from "../../../redux/reducer/paymentSlice";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../../redux/store";
import { DataType, DbDataType } from "./pdInfo.type";
import * as t from "./pdtInfo.style";

const PdtInfo = (props: DbDataType) => {
  console.log(props.data);
  const { aBrand } = useAppSelector((state: RootState) => state.paymentReducer);

  useEffect(() => {
    dispatch(editKNo(Number(props.data[0].keywordNo)));
    dispatch(editPNo(props.data[0].id));
    dispatch(editPThumbnail(props.data[0].thumbnail));
    dispatch(editPCategory(props.data[0].category));
    dispatch(editABrand(props.data[0].brand));
    dispatch(editPName(props.data[0].name));
    dispatch(editPCost(props.data[0].price));
    dispatch(editPDiscount(props.data[0].discount));
    dispatch(editPSale(props.data[0].discount === 0 ? false : true));
    dispatch(editPOption(props.data[0].option));
    dispatch(editPPrice(props.data[0].totalPrice));
    dispatch(editPCnt(props.data[0].totalCnt));
    dispatch(editOPrice(props.data[0].totalPrice));
  }, []);

  console.log(aBrand);

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
