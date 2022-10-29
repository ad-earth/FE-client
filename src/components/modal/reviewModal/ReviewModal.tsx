import { useState, useRef } from "react";
import Modal from "../Modal";
import { MainButton } from "../../../elements/buttons/Buttons";
import * as t from "./reviewModal.style";
import useReviewModalQuery from "./useReviewModalQuery";
import { useAppSelector } from "../../../redux/store";
import { PropsType, ReviewType } from "./reviewModal.type";
import StarRate from "./starRate/StarRate";

export default function ReviewModal({ handleClose, isOpen }: PropsType) {
  const reviewData = useAppSelector((store) => store.reviewSlice.review);

  const [reviewState, setReviewState] = useState<ReviewType>({
    id: 0,
    r_Content: "",
    r_Score: 5,
  });
  // textarea
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewState({ ...reviewState, r_Content: event.target.value });
  };
  //hook
  const { mutate: addReview, isSuccess } = useReviewModalQuery(reviewState);
  if (isSuccess) {
    alert("리뷰등록이 완료되었습니다!");
    handleClose();
  }

  return (
    <>
      {isOpen && (
        <Modal handleClose={() => handleClose()} isOpen={isOpen}>
          <t.Base>
            <Header handleClose={() => handleClose()} />
            {reviewData.p_No && (
              <>
                <t.BodyFormContainer>
                  <t.ProductInfo>
                    <t.InfoImg
                      src={reviewData.p_Thumbnail[0]}
                      alt="상품 이미지"
                    />
                    <t.InfoText>
                      [{reviewData.a_Brand}] {reviewData.p_Name}
                      <>
                        <t.ProducOptionBox>
                          <t.ProducOption>
                            {`${
                              reviewData?.p_Option[0][0] !== null
                                ? reviewData?.p_Option[0][0]
                                : ""
                            }  `}
                            {`${
                              reviewData?.p_Option[0][1] !== null &&
                              reviewData?.p_Option[0][0] !== null
                                ? "/"
                                : ""
                            }`}
                            {`${
                              reviewData?.p_Option[0][1] !== null
                                ? reviewData?.p_Option[0][1]
                                : ""
                            }  `}
                            {` ${reviewData.p_Option[0][3]} 개`}
                          </t.ProducOption>
                          {reviewData?.p_Option.length > 1 &&
                            `  외 ${reviewData?.p_Option.length - 1} 개 `}
                        </t.ProducOptionBox>
                      </>
                    </t.InfoText>
                  </t.ProductInfo>
                  <t.StarRateBox>
                    <strong>상품은 어떠셨나요?</strong>
                    <StarRate
                      starVal={reviewState}
                      setStarVal={setReviewState}
                    />
                  </t.StarRateBox>
                  <t.TextReview>
                    <t.Textarea onChange={textAreaChange} ref={textareaRef} />
                    <t.TextareaCount>
                      {reviewState.r_Content.length}
                    </t.TextareaCount>
                  </t.TextReview>
                  <t.GuideText>
                    상품을 구매하신 분들이 작성한 리뷰입니다.
                  </t.GuideText>
                </t.BodyFormContainer>
              </>
            )}
            <t.BottonBox>
              <MainButton padding="15px 30px" onClick={() => addReview()}>
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
