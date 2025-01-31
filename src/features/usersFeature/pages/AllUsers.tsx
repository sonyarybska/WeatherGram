import axios, { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { useLoader } from "@common/hooks";
import { User } from "@common/types";
import { Loader } from "@common/ui";
import { PaginationButton } from "@common/ui/buttons";
import { USER_API } from "@common/constants";

import UserWrapper from "../components/UserWrapper";

export const AllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [seed, setSeed] = useState<string | null>(localStorage.getItem("seed"));

  const { isLoaderActive, disableLoader } = useLoader();

  useEffect(() => {
    axios
      .get(
        `${USER_API}&page=${page}&${seed ? `seed=${seed}` : ""}` +
          `&inc=gender,name,nat,location,email,id,picture`
      )
      .then((response) => {
        if (!localStorage.getItem("seed")) {
          localStorage.setItem("seed", response.data.info.seed);
          setSeed(localStorage.getItem("seed"));
        }

        setUsers([...users, ...response.data.results]);
        disableLoader();
      })
      .catch((error: AxiosError) => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, disableLoader, seed]);

  const handleNextPage = useCallback(() => setPage((prev) => prev + 1), []);
  if (isLoaderActive) return <Loader />;

  return (
    <Stack mt={5}>
      <UserWrapper users={users} />
      <PaginationButton onClick={handleNextPage} />
    </Stack>
  );
};

export default AllUsers;
