import styled from 'styled-components'
import CompleteBody from '../containers/completePage/CompleteBody'
import CompleteTitle from '../containers/completePage/CompleteTitle'

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
  background-color: #f3f3f3;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
