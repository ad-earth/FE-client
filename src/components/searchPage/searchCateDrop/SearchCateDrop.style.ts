import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 88% 12%;
  margin: 20px 0 40px;
`
export const BtnArea = styled.div`
  margin: 0px 20px 25px;
`
export const DropBtn = styled.select`
  width: 80px;
  margin-left: 20px;
  font-size: ${({ theme }) => theme.fs15};
  color: ${({ theme }) => theme.fc09};
  outline-color: ${({ theme }) => theme.ls01};
  border: none;
  transition: box-shadow 0.4s ease;
  cursor: pointer;
`
export const Text = styled.div`
  margin-left: 20px;
  font-size: 15px;
  color: ${({ theme }) => theme.fc07};
`
