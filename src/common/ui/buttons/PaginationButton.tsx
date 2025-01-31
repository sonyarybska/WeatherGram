import { ButtonProps, Button } from "@mui/material";

type Props = ButtonProps & {
  visibility?: boolean;
};

export const PaginationButton: React.FC<Props> = ({ visibility = true, ...props }) => {
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
        visibility: visibility ? "visible" : "hidden",
      }}>
      Show More
    </Button>
  );
};

export default PaginationButton;
