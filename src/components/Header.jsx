import { Box, Typography, useTheme } from "@mui/material";
const Header = ({ title, subTitle, isDashboard = false }) => {
  const theme = useTheme();
  return (
    <Box mb={isDashboard ? 0 : 4}>
      <Typography
        variant="h5"
        color={theme.palette.info.light}
        fontWeight={"bold"}
      >
        {title}
      </Typography>
      <Typography variant="body1">{subTitle}</Typography>
    </Box>
  );
};

export default Header;
