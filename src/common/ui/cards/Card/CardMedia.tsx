import { CardMediaProps, CardMedia as MuiCardMedia } from "@mui/material";

type Props = CardMediaProps & {
  alt?: string;
};

export const CardMedia: React.FC<Props> = ({ ...props }) => {
  return (
    <MuiCardMedia
      sx={{
        width: { xs: 80, sm: 100, md: 120 },
        height: { xs: 80, sm: 100, md: 120 },
      }}
      component="img"
      {...props}
    />
  );
};

export default CardMedia;
