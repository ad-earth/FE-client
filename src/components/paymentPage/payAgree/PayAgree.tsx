import { editAgree } from "../../../redux/reducer/payErrorSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import * as t from "./payAgree.style";

const PayAgree = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.payErrorSlice);

  const checkHandler = (checked: boolean) => {
    if (checked) {
      dispatch(editAgree(true));
    } else {
      dispatch(editAgree(false));
    }
  };
  return (
    <>
      <t.Item>
        <t.CheckBtn
          type="checkbox"
          checked={state.agree}
          onChange={(e) => {
            checkHandler(e.target.checked);
          }}
        />
        <t.Text>전체 동의</t.Text>
      </t.Item>
      <t.Item>
        <t.Text style={{ margin: "0 5px 0 3px" }}>└ </t.Text>
        <t.CheckBtn
          type="checkbox"
          checked={state.agree}
          onChange={(e) => {
            checkHandler(e.target.checked);
          }}
        />
        <t.Text>구매조건 확인 및 결제에 동의</t.Text>
      </t.Item>
    </>
  );
};

export default PayAgree;
