import styled from "styled-components";

export const Display = styled.div`
  display: ${({ display }: { display: string }) => display};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
