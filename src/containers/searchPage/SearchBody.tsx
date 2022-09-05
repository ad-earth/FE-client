import styled from 'styled-components'
import { useState } from 'react'

import Card from '../../components/Card'
import CardIcon from '../../components/listPage/CardIcon'
import { DataType } from '../listPage/CardList'
import SearchCateDrop from '../../components/searchPage/SearchCateDrop'
import SearchNav from '../../components/searchPage/SearchNav'
import CardBadge from '../../components/listPage/CardBadge'

const SearchBody = () => {
  const [dummy, setDummy] = useState<DataType[]>([
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
      p_Review: 19,
      p_Like: 15,
    },
  ])
  return (
    <>
      <CardArea>
        <SearchNav />
        <SearchCateDrop />
        <CardWrap>
          {dummy.map((v, i) => {
            return (
              <>
                <CardCp>
                  <Card
                    key={i}
                    p_Thumbnail={v.p_Thumbnail}
                    p_Brand={v.p_Brand}
                    p_Name={v.p_Name}
                    p_Price={v.p_Price}
                    p_Color={v.p_Color}
                    p_Ad={true}
                  />
                  <CardBadge />
                  <div>
                    <CardIcon p_Review={v.p_Review} p_Like={v.p_Like} />
                  </div>
                </CardCp>
              </>
            )
          })}
        </CardWrap>
      </CardArea>
    </>
  )
}

export default SearchBody

const CardArea = styled.div`
  max-width: 1220px;
  height: auto;
  padding: 0 12px 0 12px;
  margin: 0.1rem auto;
  & h3 {
    font-size: ${({ theme }) => theme.fs24};
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
`
const CardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(21%, auto));
  margin-left: 6px;
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
  margin: 0 -6px 10px -6px;
  box-sizing: border-box;
  font-size: inherit;
`
