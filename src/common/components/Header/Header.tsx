import { AppBar, Toolbar, Typography } from "@mui/material";
import { BsCloudSun } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <AppBar sx={{ bgcolor: "#808080" }} position="fixed">
      <Toolbar>
        <BsCloudSun size={40} />
        <Typography variant="h1" ml={3}>
          WeatherGram
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
