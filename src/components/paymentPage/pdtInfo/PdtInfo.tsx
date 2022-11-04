import { useEffect } from "react";
import { setPayData } from "../../../redux/reducer/payPdtSlice";
import { useAppDispatch } from "../../../redux/store";
import { DataPropsType, OptionType } from "./pdInfo.type";
import * as t from "./pdtInfo.style";

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
                {val.option.map((v: OptionType, idx: number) => {
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
// <>
//   {prodNo ? (
//     <>
//       {data.map((val, i: number) => {
//         return (
//           <>
//             {val.option.map((v: OptionType, idx: number) => {
//               return (
//                 <t.ListArea key={idx}>
//                   <t.PdArea>
//                     <t.PdInfoDiv>
//                       <t.ProductImg src={val.thumbnail[0]} />
//                       <t.ProductInfo>
//                         <t.ProductName>
//                           [{val.brand}] {val.name}
//                         </t.ProductName>
//                         <t.ProducOption>
//                           {v.color}
//                           {v.size} - {v.qty}개
//                         </t.ProducOption>
//                         <t.ProducPrice>
//                           {v.price.toLocaleString("ko-KR")}원
//                         </t.ProducPrice>
//                       </t.ProductInfo>
//                     </t.PdInfoDiv>
//                   </t.PdArea>
//                 </t.ListArea>
//               );
//             })}
//           </>
//         );
//       })}
//     </>
//   ) : (
//     <>
//       {cartData.map((val, i: number) => {
//         return (
//           <>
//             {val.option.map((v: OptionType, idx: number) => {
//               return (
//                 <t.ListArea key={idx}>
//                   <t.PdArea>
//                     <t.PdInfoDiv>
//                       <t.ProductImg src={val.thumbnail[0]} />
//                       <t.ProductInfo>
//                         <t.ProductName>
//                           [{val.brand}] {val.name}
//                         </t.ProductName>
//                         <t.ProducOption>
//                           {v.color}
//                           {v.size} - {v.qty}개
//                         </t.ProducOption>
//                         <t.ProducPrice>
//                           {v.price.toLocaleString("ko-KR")}원
//                         </t.ProducPrice>
//                       </t.ProductInfo>
//                     </t.PdInfoDiv>
//                   </t.PdArea>
//                 </t.ListArea>
//               );
//             })}
//           </>
//         );
//       })}
//     </>
//   )}
// </>;
