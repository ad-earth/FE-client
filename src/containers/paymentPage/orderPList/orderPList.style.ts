import styled from "styled-components";
import { theme } from "../../../style/theme";

export const LPListArea = styled.div`
  margin-left: 16px;
  width: 470px;
  visibility: visible;
  float: left;
  display: flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  align-items: flex-start;
  @media (max-width: 990px) {
    display: flex;
    width: 95%;
    margin: 0 20px;
    align-items: center;
  }
  @media (max-width: 480px) {
    display: flex;
    width: 83%;
    margin-left: 15px;
    align-items: flex-start;
  }
`;
export const LTipOff = styled.div`
  width: 100%;
  display: flex;
  padding: 24px;
  margin-bottom: 16px;
  background-color: ${theme.bg01};
  flex-direction: column;
`;
export const LOrderInfoDiv = styled.div`
  font-size: ${theme.fs19};
  font-weight: bold;
  padding-bottom: 20px;
}
`;
///
export const RPayArea = styled.div`
  margin-left: 16px;
  width: 450px;
  visibility: visible;
  float: right;
  display: flex;
  -webkit-flex-direction: column;
  align-items: flex-end;
  @media (max-width: 990px) {
    display: flex;
    width: 120%;
    margin: 10 auto;
    align-items: flex-end;
  }
  @media (max-width: 480px) {
    display: flex;
    width: 105%;
    margin: 0px -11px 0px;
    align-items: center;
  }
`;
export const RTipOff = styled.div`
  width: 79%;
  display: flex;
  padding: 24px;
  margin-bottom: 16px;
  background-color: ${theme.bg01};
  flex-direction: column;
`;
export const RBtnDiv = styled.div`
  margin-top: 22px;
`;
export const ROrderInfoDiv = styled.div`
  font-size: ${theme.fs19};
  font-weight: bold;
  padding-bottom: 20px;
}
`;

export const PayArea = styled.div`
  margin: 0px auto;
  margin-bottom: 100px;
`;
