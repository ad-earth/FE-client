import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
// component
import Modal from "../Modal";
import { MainButton } from "../../../elements/Buttons";
// style
import * as t from "./reviewModal.style";
// Icons
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import useReviewModal from "./useReviewModal";

interface ProductType {
  p_No: number;
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Option: Array<
    [string | null, string | null, number | null, number | null, number | null]
  >;
}
interface StateType {
  id: number;
  r_Content: string;
  r_Score: number | null;
}
// interface ModalType {
//   isOpen?: boolean;
//   handleClose: () => void;
//   product?: ProductType;
// }

export default function ReviewModal({
  handleClose,
  isOpen,
  product,
}: {
  handleClose: () => void;
  isOpen: boolean;
  product?: ProductType;
}) {
  const [state, setState] = useState<StateType>({
    id: 0,
    r_Content: "",
    r_Score: 5,
  });
  const [data, setData] = useState<ProductType | undefined>(product);
  useEffect(() => {
    if (product) {
      setData(product);
      setState({ ...state, id: product.p_No });
    } else {
      handleClose();
    }
  }, [product]);
  // textarea
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({ ...state, r_Content: event.target.value });
  };

  // useMutation hook
  const { mutate, isSuccess } = useReviewModal(state);
  //성공시 페이지 이동
  useEffect(() => {
    if (isSuccess) {
      alert("isSuccess");
      handleClose();
    }
  }, [isSuccess]);

  const ReviewClick = () => {
    mutate();
  };
  return (
    <>
      {(isOpen || data) && (
        <Modal handleClose={() => handleClose()} isOpen={isOpen}>
          <t.Base>
            <Header handleClose={() => handleClose()} />
            {data && (
              <>
                <t.BodyFormContainer>
                  <t.ProductInfo>
                    <t.InfoImg src={data.p_Thumbnail[0]} alt="상품 이미지" />
                    <t.InfoText>
                      [{data.a_Brand}] {data.p_Name}
                      <>
                        <t.ProducOptionBox>
                          <t.ProducOption>
                            [옵션]
                            {`${data.p_Option[0][1]}` &&
                              ` 사이즈 : ${data.p_Option[0][1]}
                              ${
                                data.p_Option[0][0] &&
                                ` / 색상 : ${data.p_Option[0][0]}`
                              } / ${data.p_Option[0][3]}개`}
                          </t.ProducOption>
                          {data.p_Option.length > 1 &&
                            `외 ${data.p_Option.length - 1} 개 `}
                        </t.ProducOptionBox>
                      </>
                    </t.InfoText>
                  </t.ProductInfo>
                  <t.StarRating>
                    <strong>상품은 어떠셨나요?</strong>
                    <StarContent starVal={state} setStarVal={setState} />
                  </t.StarRating>
                  <t.TextReview>
                    <t.Textarea onChange={textAreaChange} ref={textareaRef} />
                    <t.TextareaCount>{state.r_Content.length}</t.TextareaCount>
                  </t.TextReview>
                  <t.GuideText>
                    상품을 구매하신 분들이 작성한 리뷰입니다.
                  </t.GuideText>
                </t.BodyFormContainer>
              </>
            )}
            <t.BottonBox>
              <MainButton
                padding="15px 30px"
                onClick={() => {
                  ReviewClick();
                }}
              >
                등록
              </MainButton>
            </t.BottonBox>
          </t.Base>
        </Modal>
      )}
    </>
  );
}

const Header = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <t.Header>
      <t.Title>구매평 작성</t.Title>
      <t.CloseBtn onClick={() => handleClose()} />
    </t.Header>
  );
};

const StarContent = ({
  starVal,
  setStarVal,
}: {
  starVal: StateType;
  setStarVal: Dispatch<SetStateAction<StateType>>;
}) => {
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
      value={starVal.r_Score}
      onChange={(event, newValue) => {
        setStarVal({ ...starVal, r_Score: newValue === null ? 0 : newValue });
      }}
    />
  );
};
