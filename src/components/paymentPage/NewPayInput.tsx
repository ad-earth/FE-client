import styled from 'styled-components'
import { MainButton } from '../../elements/Buttons'
import { Input } from '../../elements/Input'
import { PayMethodSelect } from './PayMethod'

export const NewPayInput = () => {
  return (
    <DivArea>
      <InputDivArea style={{ margin: '20px 0 20px 0' }}>
        <Input
          color="#20252b"
          fontSize="14px"
          width="49%"
          holderName="수령인"
        />
        <Input
          color="#20252b"
          fontSize="14px"
          width="49%"
          holderName="연락처"
        />
      </InputDivArea>
      <InputDivArea style={{ width: '50%' }}>
        <Input
          color="#20252b"
          fontSize="14px"
          width="48%"
          holderName="우편번호"
        />
        <MainButton
          width="48%"
          fontSize="14px"
          bgColor="#F2F2F2"
          color="#20252b"
          hBgColor="F2F2F2"
        >
          주소찾기
        </MainButton>
      </InputDivArea>
      <InputDivArea>
        <Input color="#20252b" fontSize="14px" width="100%" holderName="주소" />
      </InputDivArea>
      <InputDivArea style={{ marginBottom: '10px' }}>
        <Input
          color="#20252b"
          fontSize="14px"
          width="100%"
          holderName="상세주소"
        />
      </InputDivArea>
      <PayMethodSelect />
    </DivArea>
  )
}

const DivArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const InputDivArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
`
