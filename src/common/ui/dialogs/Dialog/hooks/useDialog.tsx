import { useState } from "react";

type Return = {
  isOpenDialog: boolean;
  handleDialogOpen: () => void;
  handleDialogClose: () => void;
};

export const useDialog = (): Return => {
  const [isOpenDialog, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return {
    isOpenDialog,
    handleDialogOpen,
    handleDialogClose,
  };
};
