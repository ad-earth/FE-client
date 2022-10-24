import { useState } from "react";
import Alert from "@mui/material/Alert";

interface PropsType {
  isError: boolean;
  children?: React.ReactNode;
}
const Error = (props: PropsType) => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      {props.isError && open ? (
        <Alert
          severity="error"
          onClose={() => setOpen(false)}
          style={{
            position: "absolute",
            left: "50%",
            top: "0",
            transform: "translate(-50%, 0)",
            zIndex: "999",
          }}
        >
          {props.children}
        </Alert>
      ) : null}
    </div>
  );
};

export default Error;
