import styled from "styled-components";
import { StyleType } from "./productImgs.type";

export const MainContainer = styled.div`
  width: 49%;
`;

export const MainImg = styled.div`
  width: 100%;
  height: 588px;
  background-image: url(${(props: StyleType) => props.imgUrl});
  background-size: cover;
  transition: background-image 0.5s ease-in-out;
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 550px;
    height: 550px;
  }
`;

export const SubImgWrapper = styled.div`
  display: flex;
  gap: 3px;
  margin-top: 10px;
`;

export const SubImg = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;
