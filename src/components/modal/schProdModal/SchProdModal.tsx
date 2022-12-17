import * as t from "./schProdModal.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalType } from "./schProdModal.type";
import Modal from "../Modal";

const SchProdModal = (props: ModalType) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>("");

  const handleSubmit = () => {
    navigate(`/search/${keyword}`);
    props.handleClose();
    setKeyword("");
  };

  return (
    <>
      {props.isOpen && (
        <Modal handleClose={() => props.handleClose()} isOpen={props.isOpen}>
          <t.SchContainer>
            <t.Close onClick={() => props.handleClose()} />
            <t.SchInput>
              <input
                type="text"
                placeholder="검색"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => {
                  e.key === "Enter" && handleSubmit();
                }}
              />
              <t.SchIcon />
            </t.SchInput>
          </t.SchContainer>
        </Modal>
      )}
    </>
  );
};

export default SchProdModal;
