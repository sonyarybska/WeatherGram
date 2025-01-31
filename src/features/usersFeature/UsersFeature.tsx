import { Route, Routes, useNavigate } from "react-router-dom";
import { PaperWrapper, Tab, Tabs } from "@common/ui";
import { SetStateAction, SyntheticEvent, useState } from "react";
import { LoaderCtxProvider } from "@common/ui/loaders/Loader/LoaderCtx";
import { Stack } from "@mui/material";

import { AllUsers, SavedUsers } from "./pages";

export const UsersFeature = () => {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  const onChange = (_event: SyntheticEvent, newValue: SetStateAction<number>) => {
    setTab(newValue);
    if (newValue === 0) {
      navigate("/");
    } else if (newValue === 1) {
      navigate("/saved");
    }
  };

  return (
    <Stack sx={{ position: "relative", width: "100%" }}>
      <LoaderCtxProvider>
        <PaperWrapper>
          <Tabs value={tab} onChange={onChange}>
            <Tab label="Users" />
            <Tab label="Saved Users" />
          </Tabs>

          <Routes>
            <Route path="/" element={<AllUsers />} />
            <Route path="/saved" element={<SavedUsers />} />
          </Routes>
        </PaperWrapper>
      </LoaderCtxProvider>
    </Stack>
  );
};

export default UsersFeature;
