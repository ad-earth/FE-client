import { useState } from "react";
// component
import Modal from "../Modal";
import { MainButton } from "../../../elements/Buttons";
// style
import * as t from "./ReviewModalStyle";
// Icons
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

interface ModalType {
  isOpen?: boolean;
  handleClose: () => void;
}
export default function ReviewModal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <Modal handleClose={() => props.handleClose()} isOpen={props.isOpen}>
          <t.Base>
            <Header handleClose={() => props.handleClose()} />
            <Body />
            <Footer />
          </t.Base>
        </Modal>
      )}
    </>
  );
}

const Header = (props: ModalType) => {
  return (
    <t.Header>
      <t.Title>구매평 작성</t.Title>
      <t.CloseBtn onClick={() => props.handleClose()} />
    </t.Header>
  );
};

const Body = () => {
  return (
    <t.BodyFormContainer>
      <t.ProductInfo>
        <t.InfoImg src={"#"} alt="상품 이미지" />
        <t.InfoText>
          [브랜드] 상품명<span>[옵션] 옵션</span>
        </t.InfoText>
      </t.ProductInfo>
      <t.StarRating>
        <strong>상품은 어떠셨나요?</strong>
        <StarContent />
      </t.StarRating>
      <t.TextReview>
        <t.Textarea />
        <t.TextareaCount>0</t.TextareaCount>
      </t.TextReview>
      <t.GuideText>상품을 구매하신 분들이 작성한 리뷰입니다.</t.GuideText>
    </t.BodyFormContainer>
  );
};

const StarContent = () => {
  const [value, setValue] = useState<number | null>(5);

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#FF472D",
    },
    "& .MuiRating-iconHover": {
      color: "#FF472D",
    },
  });
  return (
    <StyledRating
      icon={<StarRoundedIcon fontSize="large" />}
      emptyIcon={<StarRoundedIcon fontSize="large" color="disabled" />}
      name="starIcon"
      size="large"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
};
const Footer = () => {
  return <MainButton padding="15px 30px">등록</MainButton>;
};
