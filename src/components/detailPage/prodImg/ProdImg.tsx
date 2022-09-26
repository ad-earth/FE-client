import { useState } from "react";

import * as t from "./prodImg.style";
import { PropsType } from "./prodImg.type";

const ProdImg = (props: PropsType) => {
  const [url, setUrl] = useState("");

  return (
    <t.MainContainer>
      <t.MainImg imgUrl={url ? url : props.img && props.img[0]} />
      <t.SubImgWrapper>
        {props.img &&
          props.img.map((x, idx) => {
            return (
              <t.SubImg
                alt="상품 이미지"
                key={idx}
                src={x}
                onMouseEnter={() => {
                  setUrl(props.img[idx]);
                }}
              />
            );
          })}
      </t.SubImgWrapper>
    </t.MainContainer>
  );
};

export default ProdImg;
