import { useState } from "react";
import ReviewModal from "../../components/modal/reaviewModal/ReviewModal";

const Order = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      Order
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      <ReviewModal isOpen={true} handleClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Order;
