import { styled, Tab as TabMui, TabProps } from "@mui/material";

export const Tab = styled((props: TabProps) => <TabMui disableRipple {...props} />)(() => ({
  "&.MuiTab-root": {
    fontWeight: "700",
    fontSize: "20px",
    color: "#A8A8A8",
    textTransform: "none",
  },
  "&.Mui-selected": {
    color: "#808080",
  },
}));
