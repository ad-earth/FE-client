import { DataType, DbDataType } from "./pdInfo.type";
import * as t from "./pdtInfo.style";
// type dataType = data: DBType

const PdtInfo = (props: DbDataType) => {
  return (
    <>
      {props.data.map((val: DataType) => {
        return (
          <>
            {val.option.map((v) => {
              return (
                <t.ListArea key={val.id}>
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
            })}
          </>
        );
      })}
    </>
  );
};

export default PdtInfo;
