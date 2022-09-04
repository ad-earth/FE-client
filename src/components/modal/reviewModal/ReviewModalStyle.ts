import styled from "styled-components";

export const Base = styled.div`
  width: 462px;
  color: ${({ theme }) => theme.colors.black};
`;
export const Header = styled.div`
  padding: 0 24px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
  text-align: center;
`;
export const Title = styled.span`
  font-size: ${({ theme }) => theme.fs16};
`;
export const CloseBtn = styled.div`
  position: absolute;
  right: 24px;
  top: 50%;
  width: 24px;
  height: 24px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.gray3};
  cursor: pointer;
  ::before {
    position: absolute;
    content: "";
    height: 24px;
    width: 1px;
    background-color: #333;
    transform: rotate(45deg);
  }
  ::after {
    position: absolute;
    content: "";
    height: 24px;
    width: 1px;
    background-color: #333;
    transform: rotate(-45deg);
  }
`;
export const BodyFormContainer = styled.form`
  padding: 24px;
`;
export const ProductInfo = styled.div`
  width: 100%;
  height: 70px;
  border: 1px solid #e5e5e5;
  display: flex;
`;
export const InfoImg = styled.img`
  width: 70px;
  height: 70px;
  background: red;
  margin-right: 16px;
`;
export const InfoText = styled.p`
  width: calc(100% - 86px);
  height: 70px;
  margin: 0;
  font-size: 15px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  & span {
    display: block;
    color: #757575;
    font-size: 13px;
  }
`;
export const StarRating = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & strong {
    display: inline-block;
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 18px;
  }
`;
export const TextReview = styled.div`
  margin-bottom: 25px;
  position: relative;
  width: 100%;
  height: 240px;
`;
export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  padding: 12px 12px 24px;
  box-sizing: border-box;
  border-radius: 4px;
  border: thin solid #e5e5e5;
  background: ${({ theme }) => theme.colors.gray4};
  :focus {
    outline: 1px solid ${({ theme }) => theme.ls16};
  }
`;
export const TextareaCount = styled.span`
  position: absolute;
  right: 3px;
  bottom: 1px;
  padding: 5px;
  background: #fff;
  border-radius: 5px;
  font-size: 13px;
`;
export const GuideText = styled.p`
  padding: 16px;
  border: 1px solid #e9e9ea;
  background: rgb(252, 252, 252);
  font-size: 12px;
  display: flex;
  margin: 0;
`;
