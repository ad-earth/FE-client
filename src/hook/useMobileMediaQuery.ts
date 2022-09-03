import { useMediaQuery } from "react-responsive";

const useMobileMediaQuery = () => {
  const isMobile: boolean = useMediaQuery({ query: "(max-width:990px)" });
  return isMobile ? true : false;
};

export default useMobileMediaQuery;
