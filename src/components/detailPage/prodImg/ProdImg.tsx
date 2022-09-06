import { useState } from "react";
import styled from "styled-components";

interface PropsType {
  imgUrl: string;
}
const ProdImg = () => {
  const [img, setImg] = useState([
    "https://cdn.imweb.me/thumbnail/20220816/ed7c65d28916d.jpg",
    "https://cdn.imweb.me/thumbnail/20220816/1ff8ce0d9cc08.jpg",
    "https://cdn.imweb.me/thumbnail/20220331/6a2e9b4face67.jpg",
  ]);
  const [url, setUrl] = useState(
    "https://cdn.imweb.me/thumbnail/20220816/ed7c65d28916d.jpg"
  );
  return (
    <MainContainer>
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
    </MainContainer>
  );
};

export default ProdImg;

const MainContainer = styled.div`
  width: 49%;
`;
const MainImg = styled.div`
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
