import * as t from './CateButton.style'

const CateButton = () => {
  const categoryList: string[] = [
    '전체',
    '욕실',
    '주방',
    '음료용품',
    '생활',
    '식품',
    '화장품',
    '문구',
  ]

  return (
    <>
      <t.BtnArea>
        <t.BtnWrap className="desktop">
          {categoryList.map((val, i) => {
            return <t.CBtn key={i}>{val}</t.CBtn>
          })}
        </t.BtnWrap>
      </t.BtnArea>
      <t.BtnWrap className="mobile">
        {categoryList.map((val, i) => {
          return <t.SmallCBtn key={i}>{val}</t.SmallCBtn>
        })}
        <t.LineArea />
      </t.BtnWrap>
    </>
  )
}

export default CateButton
