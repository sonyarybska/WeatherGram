import { CardActionsProps, CardActions as MuiCardActions } from "@mui/material";

export const CardActions: React.FC<CardActionsProps> = ({ children, ...props }) => {
  return (
    <MuiCardActions
      sx={{
        position: "absolute",
        flexDirection: "column",
        gap: 1,
        bottom: 20,
        left: 0,
        right: 0,
      }}
      {...props}
      disableSpacing={true}>
      {children}
    </MuiCardActions>
  );
};

export default CardActions;
