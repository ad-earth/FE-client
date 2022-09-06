import styled from 'styled-components'

export const LineDiv = styled.div`
  width: 97%;
  display: flex;
  padding-bottom: 15px;
  margin: 0px auto;
  border-width: 0 0 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.rgba04};
  & span {
    font-size: ${({ theme }) => theme.fs15};
    color: ${({ theme }) => theme.fc09};
  }
`
