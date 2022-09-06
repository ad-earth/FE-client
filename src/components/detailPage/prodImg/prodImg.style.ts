import styled from "styled-components";

interface PropsType {
  imgUrl: string;
}

export const MainContainer = styled.div`
  width: 49%;
`;
export const MainImg = styled.div`
  width: 100%;
  height: 588px;
  background-image: url(${(props: PropsType) => props.imgUrl});
  transition: background-image 0.5s ease-in-out;
  background-size: cover;
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 550px;
    height: 550px;
  }
`;
export const SubImgWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 3px;
`;
export const SubImg = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;
