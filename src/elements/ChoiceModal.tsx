import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { theme } from "../style/theme";

const ChoiceModal = (props: { open: boolean }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ color: `${theme.fc09}` }}
          >
            선택하신 상품을 장바구니에 담았습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{ color: `${theme.fc09}`, fontWeight: "bolder" }}
          >
            계속쇼핑
          </Button>
          <Button
            onClick={() => navigate("/cart")}
            style={{ color: `${theme.fc09}` }}
          >
            장바구니
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ChoiceModal;
