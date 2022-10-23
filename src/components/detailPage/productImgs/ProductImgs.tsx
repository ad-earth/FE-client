import { useState } from "react";

import * as t from "./productImgs.style";
import { PropsType } from "./productImgs.type";

const ProductImgs = (props: PropsType) => {
  const [url, setUrl] = useState<string>(null);

  return (
    <t.MainContainer>
      <t.MainImg imgUrl={url ? url : props.imgs && props.imgs[0]} />
      <t.SubImgWrapper>
        {props.imgs &&
          props.imgs.map((img, idx) => {
            return (
              <t.SubImg
                alt="상품 이미지"
                key={idx}
                src={img}
                onMouseEnter={() => {
                  setUrl(props.imgs[idx]);
                }}
              />
            );
          })}
      </t.SubImgWrapper>
    </t.MainContainer>
  );
};

export default ProductImgs;
