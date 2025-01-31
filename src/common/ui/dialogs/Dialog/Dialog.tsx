import { DialogTitle, Dialog as DialogMui, DialogProps, IconButton } from "@mui/material";
import { MdClose } from "react-icons/md";

type Props = DialogProps & {
  onClose: () => void;
  dialogTitle?: string;
  children?: React.ReactNode;
};

export const Dialog: React.FC<Props> = ({ onClose, dialogTitle, children, ...props }) => {
  return (
    <DialogMui
      sx={{
        "& .MuiDialog-paper": {
          width: "100%",
          maxWidth: 550,
          borderRadius: "25px",
        },
      }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "transparent",
          },
        },
        paper: {
          sx: { width: "100%" },
        },
      }}
      onClose={onClose}
      {...props}>
      <DialogTitle>{dialogTitle}</DialogTitle>

      {children}

      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 10,
          top: 10,
          color: "grey",
        }}>
        <MdClose />
      </IconButton>
    </DialogMui>
  );
};

export default Dialog;
