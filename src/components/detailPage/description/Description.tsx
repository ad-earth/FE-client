import * as t from "./description.style";
import DeliveryInfo from "../deliveryInfo/DeliveryInfo";
import { useAppSelector } from "../../../redux/store";

const Description = () => {
  const detailData = useAppSelector((state) => state.detailSlice.details);
  function createMarkup() {
    return { __html: detailData?.product.p_Content };
  }
  return (
    <t.MainContainer>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
      <DeliveryInfo />
    </t.MainContainer>
  );
};

export default Description;
