import { Box, Typography } from "@mui/material";
import {
  BsSun,
  BsCloud,
  BsCloudFog,
  BsCloudRain,
  BsSnow,
  BsCloudLightning,
  BsUmbrella,
  BsWind,
  BsCloudHail,
  BsCloudDrizzle,
  BsCloudSun,
  BsClouds,
} from "react-icons/bs";

type Props = {
  code: number | undefined;
  size: number;
  withTitle: boolean;
};

const weatherMap: {
  [key: number]: (size: number) => { icon: JSX.Element; title: string };
} = {
  0: (size) => ({ icon: <BsSun size={size} />, title: "Clear sky" }),
  1: (size) => ({ icon: <BsCloudSun size={size} />, title: "Mainly clear" }),
  2: (size) => ({ icon: <BsCloudSun size={size} />, title: "Partly cloudy" }),
  3: (size) => ({ icon: <BsClouds size={size} />, title: "Overcast" }),
  45: (size) => ({ icon: <BsCloudFog size={size} />, title: "Fog" }),
  48: (size) => ({
    icon: <BsWind size={size} />,
    title: "Depositing rime fog",
  }),
  51: (size) => ({
    icon: <BsCloudDrizzle size={size} />,
    title: "Drizzle: Light intensity",
  }),
  53: (size) => ({
    icon: <BsCloudDrizzle size={size} />,
    title: "Drizzle: Moderate intensity",
  }),
  55: (size) => ({
    icon: <BsCloudRain size={size} />,
    title: "Drizzle: Dense intensity",
  }),
  56: (size) => ({
    icon: <BsSnow size={size} />,
    title: "Freezing drizzle: Light intensity",
  }),
  57: (size) => ({
    icon: <BsSnow size={size} />,
    title: "Freezing drizzle: Dense intensity",
  }),
  61: (size) => ({
    icon: <BsCloudRain size={size} />,
    title: "Rain: Slight intensity",
  }),
  63: (size) => ({
    icon: <BsCloudRain size={size} />,
    title: "Rain: Moderate intensity",
  }),
  65: (size) => ({
    icon: <BsUmbrella size={size} />,
    title: "Rain: Heavy intensity",
  }),
  66: (size) => ({
    icon: <BsCloudHail size={size} />,
    title: "Freezing rain: Light intensity",
  }),
  67: (size) => ({
    icon: <BsCloudHail size={size} />,
    title: "Freezing rain: Heavy intensity",
  }),
  71: (size) => ({
    icon: <BsSnow size={size} />,
    title: "Snow fall: Slight intensity",
  }),
  73: (size) => ({
    icon: <BsSnow size={size} />,
    title: "Snow fall: Moderate intensity",
  }),
  75: (size) => ({
    icon: <BsSnow size={size} />,
    title: "Snow fall: Heavy intensity",
  }),
  77: (size) => ({ icon: <BsSnow size={size} />, title: "Snow grains" }),
  80: (size) => ({
    icon: <BsCloudRain size={size} />,
    title: "Rain showers: Slight intensity",
  }),
  81: (size) => ({
    icon: <BsCloudRain size={size} />,
    title: "Rain showers: Moderate intensity",
  }),
  82: (size) => ({
    icon: <BsUmbrella size={size} />,
    title: "Rain showers: Violent intensity",
  }),
  85: (size) => ({
    icon: <BsSnow size={size} />,
    title: "Snow showers: Slight intensity",
  }),
  86: (size) => ({
    icon: <BsSnow size={size} />,
    title: "Snow showers: Heavy intensity",
  }),
  95: (size) => ({
    icon: <BsCloudLightning size={size} />,
    title: "Thunderstorm: Slight intensity",
  }),
  96: (size) => ({
    icon: <BsCloudLightning size={size} />,
    title: "Thunderstorm with slight hail",
  }),
  99: (size) => ({
    icon: <BsCloudLightning size={size} />,
    title: "Thunderstorm with heavy hail",
  }),
};

const WeatherIcon: React.FC<Props> = ({ code, size, withTitle }) => {
  const weather =
    code === undefined || !weatherMap[code]
      ? {
          icon: <BsCloud size={size} />,
          title: "Unknown weather condition",
        }
      : weatherMap[code](size);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      alignItems={withTitle ? "center" : "flex-start"}>
      {weather.icon}
      {withTitle && <Typography variant="h4">{weather.title}</Typography>}
    </Box>
  );
};

export default WeatherIcon;
