import { styled, Tabs as TabsMui, TabsProps } from "@mui/material";

export const Tabs = styled((props: TabsProps) => (
  <TabsMui {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicator" /> }} />
))(() => ({
  "& .MuiTabs-indicator": {
    background: "#808080",
  },
}));
