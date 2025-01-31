import axios from "axios";
import { Stack, Typography } from "@mui/material";
import { IoPartlySunnyOutline, IoSaveOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { User, Weather } from "@common/types";
import { Loader, useDialog } from "@common/ui";
import { useLoader } from "@common/hooks";
import WeatherIcon from "@common/components/WeatherIcon/WeatherIcon";
import { Card, CardActions, CardContent, CardHeader, CardMedia } from "@common/ui/cards";
import { ActionButton } from "@common/ui/buttons";
import { WEATHER_API } from "@common/constants";

import WeatherDialog from "./WeatherDialog";

type Props = {
  user: User;
  isSaveBtnActive?: boolean;
};

export const UserCard: React.FC<Props> = ({ user, isSaveBtnActive = true }) => {
  const { isLoaderActive, disableLoader } = useLoader();
  const { handleDialogOpen, handleDialogClose, isOpenDialog } = useDialog();

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [weather, setWeather] = useState<Weather | undefined>(undefined);

  useEffect(() => {
    axios
      .get(
        `${WEATHER_API}&latitude=${user.location.coordinates.latitude}` +
          `&longitude=${user.location.coordinates.longitude}`
      )
      .then((response) => {
        setWeather(response.data);
        disableLoader();
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
  }, [disableLoader, user]);

  const saveUser = (user: User) => {
    const savedUsers = localStorage.getItem("savedUsers");
    const parsedUsers: User[] = savedUsers ? JSON.parse(savedUsers) : [];

    if (!parsedUsers.some(({ id: { value } }) => value === user.id.value)) {
      localStorage.setItem("savedUsers", JSON.stringify([...parsedUsers, user]));
    }
  };

  const handleWeatherButtonClick = (user: User) => {
    setSelectedUser(user);
    handleDialogOpen();
  };

  if (isLoaderActive) return <Loader />;

  return (
    <Card>
      <CardHeader
        title={
          <>
            {user.name.title} {user.name.first} {user.name.last}
            <br />({user.gender})
          </>
        }
      />

      <CardContent>
        <Stack direction={"row"} alignItems={"center"} gap={5} mb={2}>
          <CardMedia alt="User image" src={user.picture.large} />
          <WeatherIcon size={40} code={weather?.current.weather_code} withTitle={false} />
        </Stack>

        <Stack gap={2}>
          <Typography variant="h6">
            {`${user.location.street.number},
             ${user.location.street.name}, 
             ${user.location.city}, ${user.location.state},
              ${user.location.postcode},
               ${user.location.country}`}
          </Typography>
          <Typography variant="overline">{user.email}</Typography>
          <Typography variant="h6">
            {`Current temperature: ${weather?.current.temperature_2m}
            ${weather?.current_units.temperature_2m}`}
          </Typography>
          <Typography variant="h6">
            {`Max temperature: ${weather?.daily.temperature_2m_max}
            ${weather?.daily_units.temperature_2m_max}`}
          </Typography>
          <Typography variant="h6">
            {`Min temperature: ${weather?.daily.temperature_2m_min}
            ${weather?.daily_units.temperature_2m_min}`}
          </Typography>
        </Stack>
      </CardContent>

      <CardActions>
        <ActionButton onClick={() => handleWeatherButtonClick(user)}>
          <IoPartlySunnyOutline />
          Weather
        </ActionButton>
        {isSaveBtnActive && (
          <ActionButton onClick={() => saveUser(user)}>
            <IoSaveOutline />
            Save
          </ActionButton>
        )}
      </CardActions>

      <WeatherDialog
        handleClose={handleDialogClose}
        isOpen={isOpenDialog}
        weather={weather}
        userLocation={user.location.city}
        latitude={selectedUser ? +selectedUser.location.coordinates.latitude : 0}
        longitude={selectedUser ? +selectedUser.location.coordinates.longitude : 0}
        userAvatar={user.picture.thumbnail}
        open={isOpenDialog && selectedUser?.id?.value === user.id?.value}
      />
    </Card>
  );
};

export default UserCard;
