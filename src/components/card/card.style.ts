import styled from "styled-components";
import { theme } from "../../style/theme";

export const CardCp = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: inherit;
`;
export const CardImg = styled.img`
  width: 100%;
  margin: 0 auto;
  cursor: pointer;
  background-color: grey;
  background-size: cover;
  & hover {
  }
`;
export const Div = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 0.3rem;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
`;
export const CardTitle = styled.div`
  text-transform: capitalize;
  margin-bottom: 0.3rem;
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.fc11};
  cursor: pointer;
`;

export const PriceDiv = styled.div`
  display: flex;
  width: auto;
  box-sizing: border-box;
  font-size: inherit;
`;

export const CardPrice = styled.div`
  font-size: ${theme.fs13};
  color: ${theme.fc15};
  display: flex;
`;

export const OriginPrice = styled.div`
  font-size: ${theme.fs13};
  color: ${theme.fc05};
  display: flex;
  text-decoration-line: line-through;
  margin-left: 6px;
`;

export const AdCard = styled.img`
  width: 100%;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.fc11};
  background-color: ${({ theme }) => theme.bg12};
  background-size: cover;
  cursor: pointer;
  & hover {
  }
`;
export const AdCardArea = styled.div`
  position: relative;
  div {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

//위시리스트
export const WishCard = styled.div`
  position: relative;
  filter: brightness(1);
  &:hover {
    & img {
      transition: 0.5s;
      filter: brightness(0.5);
    }
    & span {
      opacity: 1;
    }
  }
  & span {
    position: absolute;
    right: 10px;
    top: 8px;
    z-index: 99;
    opacity: 0;
    cursor: pointer;
  }
`;

// export const IconHeart = styled(Heart)`
//   color: ${({ theme }) => theme.bg09};
//   width: "20px";
// `;
