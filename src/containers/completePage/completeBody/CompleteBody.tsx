import * as t from "./CompleteBody.style";
import { MainButton } from "../../../elements/Buttons";
import { useComplete } from "./useCompleteBody";
import { CompleteType } from "../completeBody/completeBody.type";

const CompleteBody = () => {
  const CompleteData: CompleteType = useComplete();
  console.log(CompleteData);

  return (
    <>
      {CompleteData && (
        <>
          <t.BodyDiv>
            <t.CellL style={{ gridColumn: "1/2", gridRow: "1" }}>
              입금계좌 안내
            </t.CellL>
            <t.CellR style={{ gridColumn: "2/2", gridRow: "1" }}>
              <t.Text>지구은행</t.Text>
              <t.Text>12309812</t.Text>
              <t.Text>(주)광고지구</t.Text>
              <t.Text style={{ color: "#00913a", fontWeight: "bold" }}>
                이거 뭐였지,,?
              </t.Text>
            </t.CellR>

            <t.CellL style={{ gridColumn: "1/2", gridRow: "2" }}>
              입금 기간
            </t.CellL>
            <t.CellR style={{ gridColumn: "2/2", gridRow: "2" }}>
              2022-09-22 22:55까지
            </t.CellR>

            <t.CellL style={{ gridColumn: "1/2", gridRow: "3" }}>
              주문 번호
            </t.CellL>
            <t.CellR style={{ gridColumn: "2/2", gridRow: "3" }}>
              {CompleteData.o_No}
            </t.CellR>

            <t.CellL style={{ gridColumn: "1/2", gridRow: "4" }}>
              배송지
            </t.CellL>
            <t.CellR style={{ gridColumn: "2/2", gridRow: "4" }}>
              <t.Text>{CompleteData.d_Name}</t.Text>
              <t.Text style={{ color: "#7a7a7a" }}>
                {CompleteData.d_Phone}
              </t.Text>
              <t.Text>
                {CompleteData.d_Address1}
                {CompleteData.d_Address2}
              </t.Text>
              <t.Text style={{ color: "#7a7a7a" }}>(40123)</t.Text>
            </t.CellR>

            <t.CellL style={{ gridColumn: "1/2", gridRow: "5" }}>
              배송 방법
            </t.CellL>
            <t.CellR style={{ gridColumn: "2/2", gridRow: "5" }}>택배</t.CellR>
          </t.BodyDiv>
          <t.BtnDiv>
            <MainButton padding="12px 0">홈으로</MainButton>
          </t.BtnDiv>
        </>
      )}
    </>
  );
};

export default CompleteBody;
