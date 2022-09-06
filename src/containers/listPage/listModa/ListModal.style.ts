import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close'
import { theme } from '../../../style/theme'

export const Xbtn = styled(CloseIcon)({
  '&.MuiSvgIcon-root': {
    position: 'absolute',
    color: `${theme.fc05}`,
    fontSize: `${theme.fs26}`,
    top: 15,
    right: 15,
    cursor: 'pointer',
  },
})
export const BtnDiv = styled.div`
  padding: 20px;
  position: relative;
  @media (max-width: 990px) {
    width: 500px;
    padding: 10px;
  }
  @media (min-width: 1101px) {
    width: 1150px;
    padding: 10px;
  }
`
export const ProdInfoContainer = styled.div`
  width: 1150px;
  margin: 30px auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  @media (max-width: 990px) {
    width: 80%;
    padding: 0px;
    flex-direction: column;
    align-items: center;
  }
`
export const InfoWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  box-sizing: border-box;
  @media (max-width: 990px) {
    padding: 0px;
    width: 100%;
    margin-top: 20px;
  }
  @media (min-width: 991px) {
    width: 600px;
    margin-top: 20px;
    font-size: 12px;
  }
`
export const CaroDiv = styled.div`
  @media (max-width: 990px) {
    display: none;
  }
`
export const Max = styled.div`
  max-width: 80vw;
  @media (max-width: 990px) {
    max-width: 30vw;
  }
`
