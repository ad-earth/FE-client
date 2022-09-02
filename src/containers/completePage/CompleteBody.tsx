import styled from 'styled-components'
import { MainButton } from '../../elements/Buttons'

const CompleteBody = () => {
  return (
    <>
      <BodyDiv>
        <CellL style={{ gridColumn: '1/2', gridRow: '1' }}>입금계좌 안내</CellL>
        <CellR style={{ gridColumn: '2/2', gridRow: '1' }}>
          <Text>지구은행</Text>
          <Text>12309812</Text>
          <Text>(주)광고지구</Text>
          <Text style={{ color: '#00913a', fontWeight: 'bold' }}>36,900원</Text>
        </CellR>

        <CellL style={{ gridColumn: '1/2', gridRow: '2' }}>입금 기간</CellL>
        <CellR style={{ gridColumn: '2/2', gridRow: '2' }}>
          2022-09-22 22:55까지
        </CellR>

        <CellL style={{ gridColumn: '1/2', gridRow: '3' }}>주문 번호</CellL>
        <CellR style={{ gridColumn: '2/2', gridRow: '3' }}>2022090106414</CellR>

        <CellL style={{ gridColumn: '1/2', gridRow: '4' }}>배송지</CellL>
        <CellR style={{ gridColumn: '2/2', gridRow: '4' }}>
          <Text>이효리</Text>
          <Text style={{ color: '#7a7a7a' }}>010-1111-1234</Text>
          <Text>
            서울특별시 동작구 상도동 성대로1길 16 줄 넘어가기 되는지 봅니다{' '}
          </Text>
          <Text style={{ color: '#7a7a7a' }}>(40123)</Text>
        </CellR>

        <CellL style={{ gridColumn: '1/2', gridRow: '5' }}>배송 방법</CellL>
        <CellR style={{ gridColumn: '2/2', gridRow: '5' }}>택배</CellR>
      </BodyDiv>
      <BtnDiv>
        <MainButton padding="12px 0">홈으로</MainButton>
      </BtnDiv>
    </>
  )
}

export default CompleteBody

const BodyDiv = styled.div`
  display: grid;
  flex-direction: column;
  background-color: #fff;
  width: 420px;
  grid-template-columns: 33% 67%;
  grid-template-rows: repeat(5, minmax(50px, auto));
  margin-top: 30px;
`
const LineDiv = styled.div`
  width: 100%;
  border-width: 0 0 1px;
  border-style: solid;
  border-color: rgba(33, 33, 33, 0.15);
  padding: 5px 0 25px;
`

const CellL = styled.div`
  font-size: 14px;
  vertical-align: top;
  padding: 16px 0 12px 24px;
  font-weight: normal;
  color: #7a7a7a;
  border-width: 0 0 1px;
  border-style: solid;
  border-color: rgba(33, 33, 33, 0.15);
`

const CellR = styled.div`
  font-size: 14px;
  vertical-align: top;
  padding: 16px 24px 14px 12px;
  font-weight: normal;
  color: #212121;
  align-self: start;
  white-space: pre-wrap;
  border-width: 0 0 1px;
  border-style: solid;
  border-color: rgba(33, 33, 33, 0.15);
`
const Text = styled.div`
  font-size: 14px;
  color: #20252b;
  padding: 1px 0 1px;
`
const BtnDiv = styled.div`
  background-color: #fff;
  width: 420px;
  margin-bottom: 140px;
`
