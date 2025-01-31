import { Card as MuiCard, CardProps } from "@mui/material";

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <MuiCard
      sx={{
        width: "350px",
        borderRadius: "30px",
        padding: "20px",
        boxSizing: "border-box",
        position: "relative",
      }}
      {...props}>
      {children}
    </MuiCard>
  );
};

export default Card;
