import { useState } from "react";
import Alert from "@mui/material/Alert";

interface PropsType {
  isError: boolean;
  errorMessage: string;
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
          {props.errorMessage}
        </Alert>
      ) : null}
    </div>
  );
};

export default Error;
