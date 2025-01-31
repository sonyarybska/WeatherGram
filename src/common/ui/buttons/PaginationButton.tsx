import { ButtonProps, Button } from "@mui/material";

export const PaginationButton: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        width: "100%",

        fontWeight: 700,
        marginTop: "50px",
        color: "#F2F2F2",

        backgroundColor: "#808080",
        borderRadius: "20px",
        ":hover": {
          backgroundColor: "#D3D3D3",
        },
      }}>
      Show More
    </Button>
  );
};

export default PaginationButton;
