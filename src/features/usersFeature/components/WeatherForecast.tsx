import WeatherIcon from "@common/components/WeatherIcon/WeatherIcon";
import { Weather } from "@common/types";
import { Stack, Typography, Table, TableBody, TableCell, TableRow, Box } from "@mui/material";
import { CiDroplet } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";

type Props = {
  weather?: Weather;
};

const WeatherForecast: React.FC<Props> = ({ weather }) => {
  if (!weather?.hourly || !weather?.current) {
    return <Typography variant="h6">Weather data is unavailable</Typography>;
  }

  const {
    time,
    temperature_2m,
    precipitation_probability,
    wind_speed_10m,
    relative_humidity_2m,
    weather_code,
  } = weather.hourly;

  const currentTime = Date.now();

  const hourlyWeather = time
    .map((t, index) => ({
      time: t,
      temperature: temperature_2m[index],
      precipitation: precipitation_probability[index],
      wind_speed_10m: wind_speed_10m[index],
      relative_humidity_2m: relative_humidity_2m[index],
      weather_code: weather_code[index],
    }))
    .filter(({ time }) => Date.parse(time) >= currentTime);

  const currentWeatherData = {
    time: "Now",
    temperature: weather.current.temperature_2m,
    precipitation: weather.current.precipitation,
    wind_speed_10m: weather.current.wind_speed_10m,
    relative_humidity_2m: weather.current.relative_humidity_2m,
    weather_code: weather.current.weather_code,
  };

  const allWeather = [currentWeatherData, ...hourlyWeather];

  return (
    <Box sx={{ overflow: "auto" }}>
      <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
        <Table>
          <TableBody>
            {allWeather.map(
              (
                {
                  time,
                  precipitation,
                  temperature,
                  relative_humidity_2m,
                  wind_speed_10m,
                  weather_code,
                },
                index
              ) => {
                const cells = [
                  {
                    icon: <IoTimeOutline size={20} />,
                    value: time === "Now" ? time : new Date(time).getHours(),
                  },
                  {
                    icon: <WeatherIcon code={weather_code} withTitle={false} size={20} />,
                    value: `${temperature}°C`,
                  },
                  { icon: <CiDroplet size={20} />, value: `${precipitation}%` },
                  { icon: <LuWind size={20} />, value: `${wind_speed_10m}%` },
                  { icon: <WiHumidity size={20} />, value: `${relative_humidity_2m}%` },
                ];

                return (
                  <TableRow key={index}>
                    {cells.map(({ icon, value }, i) => (
                      <TableCell key={i} sx={{ padding: { xs: "2px", sm: "8px", md: "16px" } }}>
                        <Stack direction="row" gap={1} alignItems="center">
                          {icon}
                          <Typography>{value}</Typography>
                        </Stack>
                      </TableCell>
                    ))}
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default WeatherForecast;
