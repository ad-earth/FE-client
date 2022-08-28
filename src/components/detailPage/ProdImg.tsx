import { useState } from "react";
import styled from "styled-components";

interface PropsType {
  imgUrl: string;
}
const ProdImg = () => {
  const [img, setImg] = useState([
    "/img/test1.jpeg",
    "/img/test2.jpeg",
    "/img/test3.jpeg",
  ]);
  const [url, setUrl] = useState("/img/test1.jpeg");
  return (
    <ImgContainer>
      <MainImg imgUrl={url} />
      <SubImgWrapper>
        {img.map((item, index) => {
          return (
            <SubImg
              key={index}
              src={item}
              onMouseEnter={() => {
                setUrl(img[index]);
              }}
            />
          );
        })}
      </SubImgWrapper>
    </ImgContainer>
  );
};

export default ProdImg;

const ImgContainer = styled.div`
  /* width: 585px; */
  width: 49%;
  /* height: 655px; */
`;
const MainImg = styled.div`
  width: calc(100%-15px);
  height: 588px;
  background-image: url(${(props: PropsType) => props.imgUrl});
  transition: background-image 0.5s ease-in-out;
  background-size: cover;
`;
const SubImgWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 3px;
`;
const SubImg = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;
