import { Box, Paper, Typography, useTheme } from "@mui/material";
import BarChart from "../bar/BarChart";
import Geo from "../geography/Geo";
import PieChart from "../pie/PieChart";
const ThirdRow = () => {
  const theme = useTheme();
  return (
    <Box mt={3} display={"flex"} flexWrap={"wrap"} gap={1.5}>
      <Paper
        sx={{
          width: "28%",
          minWidth: "400px",
          flexGrow: 1,
        }}
      >
        <Typography
          sx={{
            padding: "30px 30px 0 30px",
          }}
          variant="h6"
          fontWeight={"600"}
          color={theme.palette.secondary.main}
        >
          Campaign
        </Typography>
        <PieChart isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48.352 Revenue Generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper
        sx={{
          width: "33%",
          minWidth: "400px",
          flexGrow: 1,
        }}
      >
        <Typography
          sx={{
            padding: "30px 30px 0 30px",
          }}
          variant="h6"
          fontWeight={"600"}
          color={theme.palette.secondary.main}
        >
          Sales Quantity
        </Typography>
        <BarChart isDashboard={true} />
      </Paper>
      <Paper
        sx={{
          width: "33%",
          minWidth: "400px",
          flexGrow: 1,
        }}
      >
        <Typography
          sx={{
            padding: "30px 30px 0 30px",
          }}
          variant="h6"
          fontWeight={"600"}
          color={theme.palette.secondary.main}
        >
          Sales Quantity
        </Typography>
        <Geo isDashboard={true} />
      </Paper>
    </Box>
  );
};

export default ThirdRow;
