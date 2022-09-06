import styled from "styled-components";

import DeliveryInfo from "../deliveryInfo/DeliveryInfo";

const ProdDetails = () => {
  return (
    <MainContainer>
      <img src="https://cdn.imweb.me/upload/S202001038f7af028ec26d/fe8e6f3fa1560.jpg" />
      <img src="https://cdn.imweb.me/upload/S202001038f7af028ec26d/8b581844a9989.jpg" />
      <img src="https://cdn.imweb.me/upload/S202001038f7af028ec26d/fcfcee950a7b8.jpg" />
      <img src="https://cdn.imweb.me/upload/S202001038f7af028ec26d/81372705c646b.jpg" />
      <DeliveryInfo />
    </MainContainer>
  );
};

export default ProdDetails;

const MainContainer = styled.div`
  width: 100%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
