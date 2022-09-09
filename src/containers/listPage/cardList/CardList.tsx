import { useState } from 'react'
import * as t from './cardList.style'
import { useNavigate } from 'react-router-dom'
//pages//
import Card from '../../../components/card/Card'
import CardBadge from '../../../components/listPage/cardBadge/CardBadge'
import CardIcon from '../../../components/listPage/cardIcon/CardIcon'
import CateDrop from '../../../components/listPage/catDrop/CateDrop'
import { useCardList } from './useCardList'

const ListPage = () => {
  const navigate = useNavigate()
  const CardListData = useCardList()
  const [changePic, setChangePic] = useState(21)
  console.log(CardListData)

  return (
    <t.CardArea>
      <CateDrop />
      <t.CardWrap>
        {CardListData.map((val, i) => {
          return (
            <t.CardCp
              key={val.p_No}
              onClick={() => `/detail/${val.p_No}`}
              onMouseEnter={() => setChangePic(i)}
              onMouseLeave={() => setChangePic(21)}
            >
              {changePic === i ? (
                <Card
                  p_Thumbnail={val.p_Thumbnail}
                  a_Brand={val.a_Brand}
                  p_Name={val.p_Name}
                  p_Cost={val.p_Cost}
                  p_Sale={val.p_Sale}
                  p_Discount={val.p_Discount}
                  p_Option={val.p_Option}
                  p_New={val.p_New}
                  p_Best={val.p_Best}
                  p_Soldout={val.p_Soldout}
                />
              ) : (
                <Card
                  p_Thumbnail={val.p_Thumbnail}
                  a_Brand={val.a_Brand}
                  p_Name={val.p_Name}
                  p_Cost={val.p_Cost}
                  p_Sale={val.p_Sale}
                  p_Discount={val.p_Discount}
                  p_Option={val.p_Option}
                  p_New={val.p_New}
                  p_Best={val.p_Best}
                  p_Soldout={val.p_Soldout}
                />
              )}

              <CardBadge
                p_New={val.p_New}
                p_Best={val.p_Best}
                p_Soldout={val.p_Soldout}
              />
              <CardIcon p_Review={val.p_Review} p_Like={val.p_Like} />
            </t.CardCp>
          )
        })}
      </t.CardWrap>
    </t.CardArea>
  )
}

export default ListPage
