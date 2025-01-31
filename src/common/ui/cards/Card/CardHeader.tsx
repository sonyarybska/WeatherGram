import { CardHeader as MuiCardHeader, CardHeaderProps, Typography } from "@mui/material";

export const CardHeader: React.FC<CardHeaderProps> = ({ title, ...props }) => (
  <MuiCardHeader title={<Typography variant="h4">{title}</Typography>} {...props} />
);
