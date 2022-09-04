import styled from "styled-components";
import { theme } from "../../../style/theme";
import Modal from "../Modal";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
interface ModalType {
  isOpen?: boolean;
  handleClose: () => void;
}

const SchProdModal = (props: ModalType) => {
  return (
    <>
      {props.isOpen && (
        <Modal handleClose={() => props.handleClose()} isOpen={props.isOpen}>
          <SchContainer>
            <Close onClick={() => props.handleClose()} />
            <SchInput>
              <input type="text" placeholder="검색" />
              <SchIcon />
            </SchInput>
          </SchContainer>
        </Modal>
      )}
    </>
  );
};

export default SchProdModal;

const SchContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 400px;
`;
const Close = styled(CloseRoundedIcon)({
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs40}`,
    color: `${theme.ls16}`,
    position: "absolute",
    top: 15,
    right: 15,
    cursor: "pointer",
  },
});
const SchInput = styled.div`
  width: 60%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${theme.ls16};
  input {
    width: 90%;
    height: 100%;
    border: none;
    font-size: ${theme.fs24};
    :focus {
      outline: none;
      ::placeholder {
        color: transparent;
      }
    }
    ::placeholder {
      color: ${theme.fc15};
    }
  }
`;
const SchIcon = styled(SearchRoundedIcon)({
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs40}`,
    color: `${theme.fc15}`,
    cursor: "pointer",
  },
});
