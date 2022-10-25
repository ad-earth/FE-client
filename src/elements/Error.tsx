import { useState } from "react";
import Alert from "@mui/material/Alert";
import { useAppSelector } from "../redux/store";

const Error = () => {
  const isError = useAppSelector((state) => state.errorSlice.isError);
  const errorMessage = useAppSelector((state) => state.errorSlice.errorMessage);
  const [open, setOpen] = useState(true);
  return (
    <div>
      {isError && open ? (
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
          {errorMessage}
        </Alert>
      ) : null}
    </div>
  );
};

export default Error;
