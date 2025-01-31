import { User } from "@common/types";
import { Grid2 as Grid } from "@mui/material";

import UserCard from "./UserCard";

type Props = {
  users: User[];
  isSaveBtnActive?: boolean;
};

const UserWrapper: React.FC<Props> = ({ users, isSaveBtnActive }) => {
  return (
    <Grid container spacing={4}>
      {users.map((value, index) => (
        <Grid
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          style={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
          }}
          key={value.id?.value || index}>
          <UserCard user={value} isSaveBtnActive={isSaveBtnActive} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserWrapper;
