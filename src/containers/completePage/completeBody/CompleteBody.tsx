import * as t from "./completeBody.style";
import { MainButton } from "../../../elements/Buttons";
import { useComplete } from "./useCompleteBody";
import { CompleteType } from "../completeBody/completeBody.type";
import { useNavigate } from "react-router-dom";

const CompleteBody = () => {
  const navigate = useNavigate();
  const CompleteData: CompleteType = useComplete();
  const date = new Date();

  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + (date.getDate() + 1)).slice(-2);
  const dateStr = year + "-" + month + "-" + day;

  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const timeStr = hours + ":" + minutes;

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
                {CompleteData.o_Price.toLocaleString("ko-KR")}원
              </t.Text>
            </t.CellR>

            <t.CellL style={{ gridColumn: "1/2", gridRow: "2" }}>
              입금 기간
            </t.CellL>
            <t.CellR style={{ gridColumn: "2/2", gridRow: "2" }}>
              {dateStr}
              &nbsp;
              {timeStr}까지
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
            <MainButton padding="12px 0" onClick={() => navigate("/")}>
              홈으로
            </MainButton>
          </t.BtnDiv>
        </>
      )}
    </>
  );
};

export default CompleteBody;
