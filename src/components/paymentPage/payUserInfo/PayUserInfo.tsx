import * as t from "./payUserInfo.style";
import { PayUserInfoType } from "./payUserInfo.type";
import { MainButton } from "../../../elements/buttons/Buttons";

const PayUserInfo = ({
  userInfo,
  BtnonClick,
}: {
  userInfo: PayUserInfoType;
  BtnonClick: () => void;
}) => {
  return (
    <>
      {userInfo && (
        <t.DivArea>
          <t.Div>
            <t.NameDiv>
              <span>{userInfo.u_Name}</span>
            </t.NameDiv>
            <t.PayText>{userInfo.u_Phone}</t.PayText>
          </t.Div>
          <t.ButtonBox>
            <MainButton
              color="#fff"
              hBgColor="#00913a"
              fontSize="13px"
              fontWeight="500"
              padding="6px 12px"
              radius="2px"
              width="50px"
              onClick={() => BtnonClick()}
            >
              수정
            </MainButton>
          </t.ButtonBox>
        </t.DivArea>
      )}
    </>
  );
};

export default PayUserInfo;
