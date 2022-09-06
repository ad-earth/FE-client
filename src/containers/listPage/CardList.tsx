import { useState } from 'react'
import styled from 'styled-components'
//pages//
import Card from '../../components/card/Card'
import CardBadge from '../../components/listPage/cardBadge/CardBadge'
import CardIcon from '../../components/listPage/cardIcon/CardIcon'
import CateDrop from '../../components/listPage/catDrop/CateDrop'
import { theme } from '../../style/theme'

export interface DataType {
  p_Thumbnail?: string
  p_Brand?: string
  p_Name?: string
  p_Price?: number
  p_Color?: string
  p_Review?: number
  p_Like?: number
  p_Ad?: boolean
  type?: 'wish'
}
const ListPage = () => {
  const [data, setData] = useState<DataType[]>([
    {
      p_Thumbnail: 'https://cdn.imweb.me/thumbnail/20210913/cb26c35cc2cf9.jpg',
      p_Brand: '러버랩',
      p_Name: '고무장갑 팔목라인',
      p_Price: 3000,
      p_Color: '#646464',
      p_Review: 20,
      p_Like: 15,
    },
    {
      p_Thumbnail: 'https://cdn.imweb.me/thumbnail/20220126/0257e05e8d43e.jpg',
      p_Brand: '러버랩 ',
      p_Name: '천연물방울수세미(3개입)',
      p_Price: 9900,
      p_Color: '그린',
      p_Review: 20,
      p_Like: 15,
    },
    {
      p_Thumbnail: 'https://cdn.imweb.me/thumbnail/20220512/affe613e637e8.jpg',
      p_Brand: '지구샵 ',
      p_Name: '주방비누 3개',
      p_Price: 11900,
      p_Color: '그린',
      p_Review: 6,
      p_Like: 3,
    },
    {
      p_Thumbnail: 'https://cdn.imweb.me/thumbnail/20220126/13643efcabbf2.jpg',
      p_Brand: '예고은 ',
      p_Name: '삼베수세미(3개입)',
      p_Price: 20000,
      p_Color: '그린',
      p_Review: 20,
      p_Like: 15,
    },
    {
      p_Thumbnail: 'https://cdn.imweb.me/thumbnail/20220126/13643efcabbf2.jpg',
      p_Brand: '예고은 ',
      p_Name: '삼베수세미(3개입)',
      p_Price: 20000,
      p_Color: '그린',
      p_Review: 20,
      p_Like: 15,
    },
    {
      p_Thumbnail: 'https://cdn.imweb.me/thumbnail/20220126/13643efcabbf2.jpg',
      p_Brand: '예고은 ',
      p_Name: '삼베수세미(3개입)',
      p_Price: 20000,
      p_Color: '그린',
      p_Review: 20,
      p_Like: 15,
    },
  ])

  return (
    <CardArea>
      <CateDrop />
      <CardWrap>
        {data.map((val, i) => {
          return (
            <>
              <CardCp>
                <Card
                  key={i}
                  p_Thumbnail={val.p_Thumbnail}
                  p_Brand={val.p_Brand}
                  p_Name={val.p_Name}
                  p_Price={val.p_Price}
                  p_Color={val.p_Color}
                />
                <CardBadge />
                <CardIcon p_Review={val.p_Review} p_Like={val.p_Like} />
              </CardCp>
            </>
          )
        })}
      </CardWrap>
    </CardArea>
  )
}

export default ListPage

const CardArea = styled.div`
  max-width: 1220px;
  height: auto;
  padding: 0 12px 0 12px;
  margin: 0.1rem auto;
  & h3 {
    font-size: ${theme.fs24};
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
`
const CardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(21%, auto));
  margin-left: 0px;
  gap: 0 0.1px;
  width: 100%;
  height: auto;
  padding: 0;
  @media (max-width: 790px) {
    width: 100%;
    margin: 30px auto;
    grid-template-columns: repeat(2, 50%);
  }
`
const CardCp = styled.div`
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
  font-size: inherit;
`
