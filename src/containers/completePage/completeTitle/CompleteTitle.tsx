import * as t from "./completeTitle.style";

const CompleteTitle = () => {
  const completeText = "아래 계좌정보로 입금해 주시면\n 결제 완료처리가 됩니다";
  return (
    <>
      <t.Div>
        <t.H1tag>주문완료</t.H1tag>
        <t.H6tag>{completeText}</t.H6tag>
      </t.Div>
    </>
  );
};

export default CompleteTitle;
