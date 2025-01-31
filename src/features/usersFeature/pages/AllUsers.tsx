/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { User } from "@common/types";
import { PaginationButton } from "@common/ui/buttons";
import { USER_API } from "@common/constants";
import { useLoader } from "@common/ui";

import UserWrapper from "../components/UserWrapper";

export const AllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [seed, setSeed] = useState<string | null>(localStorage.getItem("seed"));
  const { isShow, handleShow } = useLoader();

  useEffect(() => {
    handleShow();

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
      })
      .catch((error: AxiosError) => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, seed]);

  const handleNextPage = useCallback(() => setPage((prev) => prev + 1), []);

  return (
    <Stack mt={5}>
      <UserWrapper users={users} />
      <PaginationButton visibility={!isShow} onClick={handleNextPage} />
    </Stack>
  );
};

export default AllUsers;
