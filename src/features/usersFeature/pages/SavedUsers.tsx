import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { User } from "@common/types";
import { PaginationButton } from "@common/ui/buttons";

import UserWrapper from "../components/UserWrapper";

export const SavedUsers = () => {
  const [users, setUsers] = useState<User[]>(
    localStorage.getItem("savedUsers") ? JSON.parse(localStorage.getItem("savedUsers")!) : []
  );

  const [visibleUsers, setVisibleUsers] = useState(16);

  useEffect(() => {
    const savedUsers = localStorage.getItem("savedUsers");
    const parsedUsers = savedUsers ? JSON.parse(savedUsers) : [];
    setUsers(parsedUsers);
  }, []);

  return (
    <Stack mt={5}>
      <UserWrapper users={users} isSaveBtnActive={false} />
      {visibleUsers < users?.length && (
        <PaginationButton onClick={() => setVisibleUsers((prev) => prev + 16)} />
      )}
    </Stack>
  );
};

export default SavedUsers;
