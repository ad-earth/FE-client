import * as t from "./description.style";
import DeliveryInfo from "../deliveryInfo/DeliveryInfo";
import { PropsType } from "./description.type";

const Description = (props: PropsType) => {
  function createMarkup() {
    return { __html: props.content };
  }
  return (
    <t.MainContainer>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
      <DeliveryInfo />
    </t.MainContainer>
  );
};

export default Description;
