import { useState } from "react";
import * as t from "./CardList.style";
//pages//
import Card from "../../../components/card/Card";
import CardBadge from "../../../components/listPage/cardBadge/CardBadge";
import CardIcon from "../../../components/listPage/cardIcon/CardIcon";
import CateDrop from "../../../components/listPage/catDrop/CateDrop";

export interface DataType {
  p_Thumbnail?: string;
  p_Brand?: string;
  p_Name?: string;
  p_Cost?: number;
  p_Discount?: number;
  p_Color?: string;
  p_Review?: number;
  p_Like?: number;
  p_Soldout?: boolean;
  p_Best?: boolean;
  p_New?: boolean;
  p_Sale?: boolean;
  p_Ad?: boolean;
  type?: "wish";
}
const ListPage = () => {
  const [data, setData] = useState<DataType[]>([
    {
      p_Thumbnail: "https://cdn.imweb.me/thumbnail/20210913/cb26c35cc2cf9.jpg",
      p_Brand: "러버랩",
      p_Name: "고무장갑 팔목라인",
      p_Cost: 3000,
      p_Color: "#646464",
      p_Review: 20,
      p_Like: 15,
    },
    {
      p_Thumbnail: "https://cdn.imweb.me/thumbnail/20220126/0257e05e8d43e.jpg",
      p_Brand: "러버랩 ",
      p_Name: "천연물방울수세미(3개입)",
      p_Cost: 9900,
      p_Color: "그린",
      p_Review: 20,
      p_Like: 15,
    },
    {
      p_Thumbnail: "https://cdn.imweb.me/thumbnail/20220512/affe613e637e8.jpg",
      p_Brand: "지구샵 ",
      p_Name: "주방비누 3개",
      p_Cost: 11900,
      p_Color: "그린",
      p_Review: 6,
      p_Like: 3,
    },
    {
      p_Thumbnail: "https://cdn.imweb.me/thumbnail/20220126/13643efcabbf2.jpg",
      p_Brand: "예고은 ",
      p_Name: "삼베수세미(3개입)",
      p_Cost: 20000,
      p_Color: "그린",
      p_Review: 20,
      p_Like: 15,
    },
    {
      p_Thumbnail: "https://cdn.imweb.me/thumbnail/20220126/13643efcabbf2.jpg",
      p_Brand: "예고은 ",
      p_Name: "삼베수세미(3개입)",
      p_Cost: 20000,
      p_Color: "그린",
      p_Review: 20,
      p_Like: 15,
    },
    {
      p_Thumbnail: "https://cdn.imweb.me/thumbnail/20220126/13643efcabbf2.jpg",
      p_Brand: "예고은 ",
      p_Name: "삼베수세미(3개입)",
      p_Cost: 20000,
      p_Color: "그린",
      p_Review: 20,
      p_Like: 15,
    },
  ]);

  return (
    <t.CardArea>
      <CateDrop />
      <t.CardWrap>
        {data.map((val, i) => {
          return (
            <>
              <t.CardCp>
                <Card
                  key={i}
                  p_Thumbnail={val.p_Thumbnail}
                  p_Brand={val.p_Brand}
                  p_Name={val.p_Name}
                  p_Cost={val.p_Cost}
                  p_Color={val.p_Color}
                />
                <CardBadge />
                <CardIcon p_Review={val.p_Review} p_Like={val.p_Like} />
              </t.CardCp>
            </>
          );
        })}
      </t.CardWrap>
    </t.CardArea>
  );
};

export default ListPage;
