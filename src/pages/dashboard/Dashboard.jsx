import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <div>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {" "}
        <Header
          title={"Dashboard"}
          subTitle={"Welcome to your Dashboard"}
          isDashboard={true}
        />
        <Box sx={{ textAlign: "right" }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>
      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </div>
  );
};

export default Dashboard;
