import { CardProps, CardContent as MuiCardContent } from "@mui/material";

export const CardContent: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <MuiCardContent
      sx={{
        width: "100%",
        paddingBottom: "120px",
      }}
      {...props}>
      {children}
    </MuiCardContent>
  );
};

export default CardContent;
