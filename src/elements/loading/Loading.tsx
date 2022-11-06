import * as t from "./loading.style";
import { theme } from "../../style/theme";
import { FadeLoader } from "react-spinners";
import { useIsFetching, useIsMutating } from "react-query";

const Loading = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const display = isFetching || isMutating ? "inherit" : "none";

  return (
    <t.Display display={display}>
      <FadeLoader
        color={theme.fc15}
        height={15}
        width={5}
        radius={2}
        margin={2}
      ></FadeLoader>
    </t.Display>
  );
};

export default Loading;
