import { Paper, PaperProps, styled } from "@mui/material";

export const PaperWrapper: React.FC<PaperProps> = styled((props: PaperProps) => (
  <Paper elevation={0} {...props} />
))(() => ({
  height: "100%",
  width: "100%",
  margin: "50px 0 0 10px",
  padding: "25px 35px",
  backgroundColor: "transparent",
}));
