import styled from 'styled-components'

export const CheckBtn = styled.input`
  width: 20px;
  height: 20px;
  margin: 0px 8px 0 0px;
  accent-color: ${({ theme }) => theme.bg16};
  border: 1px solid ${({ theme }) => theme.ls10};
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`
export const Text = styled.span`
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.fc13};
`
