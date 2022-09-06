import styled from 'styled-components'
import CompleteBody from '../containers/completePage/completeBody/CompleteBody'
import CompleteTitle from '../containers/completePage/completeTitle/CompleteTitle'

const CompletePage: React.FC = () => {
  return (
    <>
      <Area>
        <CompleteTitle />
        <CompleteBody />
      </Area>
    </>
  )
}

export default CompletePage
const Area = styled.div`
  background-color: ${({ theme }) => theme.bg03};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
