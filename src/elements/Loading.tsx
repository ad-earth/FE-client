import { useIsFetching } from "react-query";
import { FadeLoader } from "react-spinners";
import styled from "styled-components";
import { theme } from "../style/theme";

interface PropsType {
  display: string;
}
const Loading = () => {
  const isFetching = useIsFetching();
  const display = isFetching ? "inherit" : "none";

  return (
    <Display display={display}>
      <FadeLoader
        color={theme.fc15}
        height={15}
        width={5}
        radius={2}
        margin={2}
      ></FadeLoader>
    </Display>
  );
};

export default Loading;

const Display = styled.div`
  display: ${(props: PropsType) => props.display};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
