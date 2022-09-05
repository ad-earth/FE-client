import styled from 'styled-components'
import { useEffect, useState } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import Modal from '../../components/modal/Modal'
import ProdCarousel from '../../components/detailPage/ProdCarousel'
import ProdImg from '../../components/detailPage/ProdImg'
import ProdName from '../../components/detailPage/ProdName'
import ProdDesc from '../../components/detailPage/ProdDesc'
import ProdOpt from '../../components/detailPage/ProdOpt'
import { theme } from '../../style/theme'
interface ModalType {
  isOpen: boolean
  handleClose: () => void
}
const ListModal = (props: ModalType) => {
  function close(e: React.MouseEvent) {
    e.preventDefault()
    props.handleClose()
  }

  const [viewport, setViewport] = useState(visualViewport.width)
  useEffect(() => {
    const resizeListener = () => {
      setViewport(visualViewport.width)
    }
    window.addEventListener('resize', resizeListener)
  })

  return (
    <>
      {props.isOpen && (
        <Modal handleClose={() => props.handleClose()} isOpen={props.isOpen}>
          <BtnDiv>
            <Xbtn sx={{ fontSize: '36px' }} onClick={close} />
            <ProdInfoContainer>
              {viewport <= 990 ? (
                <Max>
                  <ProdCarousel />
                </Max>
              ) : (
                <ProdImg />
              )}
              <InfoWrapper>
                <ProdName />
                <CaroDiv>
                  <ProdDesc />
                </CaroDiv>
                <ProdOpt />
              </InfoWrapper>
            </ProdInfoContainer>
          </BtnDiv>
        </Modal>
      )}
    </>
  )
}

export default ListModal

const Xbtn = styled(CloseIcon)({
  '&.MuiSvgIcon-root': {
    position: 'absolute',
    color: `${theme.fc05}`,
    fontSize: `${theme.fs26}`,
    top: 15,
    right: 15,
    cursor: 'pointer',
  },
})
const BtnDiv = styled.div`
  padding: 20px;
  position: relative;
  @media (max-width: 990px) {
    width: 620px;
    padding: 10px;
  }
`
const ProdInfoContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  @media (max-width: 990px) {
    width: 100%;
    padding: 0px;
    flex-direction: column;
    align-items: center;
  }
`
const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  box-sizing: border-box;
  @media (max-width: 990px) {
    padding: 0px;
    width: 98%;
    margin-top: 20px;
  }
  @media (min-width: 1200px) {
    width: 600px;
    padding: 0px;
    flex-direction: column;
    align-items: center;
  }
`
const CaroDiv = styled.div`
  @media (max-width: 990px) {
    display: none;
  }
`
const Max = styled.div`
  max-width: 80vw;
  @media (max-width: 990px) {
    max-width: 60vw;
  }
`
