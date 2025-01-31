import { ButtonProps, Button } from "@mui/material";

export const ActionButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        width: "80%",
        gap: 1,
        color: "#F2F2F2",
        fontWeight: 300,
        backgroundColor: "#808080",
        borderRadius: "20px",
        ":hover": {
          backgroundColor: "#D3D3D3",
          color: "#000000",
        },
      }}>
      {children}
    </Button>
  );
};

export default ActionButton;
