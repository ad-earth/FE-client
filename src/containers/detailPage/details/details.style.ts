import styled from "styled-components";

export const ProdInfoContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 990px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }
`;

export const InfoWrapper = styled.div`
  width: 41%;
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  box-sizing: border-box;
  @media (max-width: 990px) {
    width: 98%;
    margin-top: 20px;
    padding: 0px;
  }
`;
