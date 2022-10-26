import styled from "styled-components";
import Alert from "@mui/material/Alert";

export const AlertIcon = styled(Alert)({
  "&.MuiSvgIcon-root": {
    position: "absolute",
    left: "50%",
    top: "0",
    transform: "translate(-50%, 0)",
    zIndex: "999",
  },
});
