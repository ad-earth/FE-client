import { DataType, DbDataType } from "./pdInfo.type";
import * as t from "./PdtInfo.style";
// type dataType = data: DBType

const PdtInfo = (props: DbDataType) => {
  console.log(props.data);
  // console.log(props.data.option);

  return (
    <>
      {props.data.map((val: DataType) => {
        return (
          <>
            {val.option.map((v) => {
              return (
                <>
                  <t.ListArea key={val.id}>
                    <t.PdArea>
                      <t.PdInfoDiv>
                        <t.ProductImg />
                        <t.ProductInfo>
                          <t.ProductName>
                            [{val.brand}] {val.name}
                          </t.ProductName>
                          <t.ProducOption>
                            {v[0]}
                            {v[1]}
                          </t.ProducOption>
                          <t.ProducPrice>1,000원 / 3 개</t.ProducPrice>
                        </t.ProductInfo>
                      </t.PdInfoDiv>
                    </t.PdArea>
                  </t.ListArea>
                </>
              );
            })}
          </>
        );
      })}
    </>
  );
};

export default PdtInfo;
