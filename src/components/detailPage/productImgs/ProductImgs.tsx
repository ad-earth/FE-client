import { useState } from "react";

import * as t from "./productImgs.style";
import { PropsType } from "./productImgs.type";
import { useAppSelector } from "../../../redux/store";

const ProductImgs = (props: PropsType) => {
  const [url, setUrl] = useState<string>(null);
  const detailData = useAppSelector((state) => state.detailSlice.details);

  return (
    <t.MainContainer>
      <t.MainImg
        imgUrl={
          url
            ? url
            : detailData?.product.p_Thumbnail &&
              detailData?.product.p_Thumbnail[0]
        }
      />
      <t.SubImgWrapper>
        {detailData?.product.p_Thumbnail.map((img, idx) => {
          return (
            <t.SubImg
              alt="상품 이미지"
              key={idx}
              src={img}
              onMouseEnter={() => {
                setUrl(detailData?.product.p_Thumbnail[idx]);
              }}
            />
          );
        })}
      </t.SubImgWrapper>
    </t.MainContainer>
  );
};

export default ProductImgs;
