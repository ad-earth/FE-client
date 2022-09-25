import { useState } from "react";

import { useProdInfo } from "../../../containers/detailPage/prodInfo/useProdInfo";
import * as t from "./prodImg.style";

const ProdImg = () => {
  const data = useProdInfo();
  const [url, setUrl] = useState("");

  return (
    <t.MainContainer>
      <t.MainImg imgUrl={url ? url : data.p_Thumbnail && data.p_Thumbnail[0]} />
      <t.SubImgWrapper>
        {data.p_Thumbnail &&
          data.p_Thumbnail.map((item: string, index: number) => {
            return (
              <t.SubImg
                alt="상품 이미지"
                key={index}
                src={item}
                onMouseEnter={() => {
                  setUrl(data.p_Thumbnail[index]);
                }}
              />
            );
          })}
      </t.SubImgWrapper>
    </t.MainContainer>
  );
};

export default ProdImg;
