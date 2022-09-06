import * as t from './PayAgree.style'

const PayAgree = () => {
  return (
    <>
      <t.Item>
        <t.CheckBtn type="checkbox" />
        <t.Text>전체 동의</t.Text>
      </t.Item>
      <t.Item>
        <t.Text style={{ margin: '0 5px 0 3px' }}>└ </t.Text>
        <t.CheckBtn type="checkbox" />
        <t.Text>구매조건 확인 및 결제에 동의</t.Text>
      </t.Item>
    </>
  )
}

export default PayAgree
