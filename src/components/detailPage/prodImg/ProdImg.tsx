import { useState } from "react";

import * as t from "./prodImg.style";

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
    <t.MainContainer>
      <t.MainImg imgUrl={url} />
      <t.SubImgWrapper>
        {img.map((item, index) => {
          return (
            <t.SubImg
              key={index}
              src={item}
              onMouseEnter={() => {
                setUrl(img[index]);
              }}
            />
          );
        })}
      </t.SubImgWrapper>
    </t.MainContainer>
  );
};

export default ProdImg;
