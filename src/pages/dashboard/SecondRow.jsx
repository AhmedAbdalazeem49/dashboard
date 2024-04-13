import { DownloadOutlined } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Line from "../line/Line";
import LineChart from "../line/LineChart";
import { Transactions } from "./data";

const SecondRow = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={3}>
      <Paper sx={{ maxWidth: "900px", flexGrow: 1, minWidth: "400px" }}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
              fontWeight={"bold"}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59.342.49
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <LineChart isDashboard={true} />
      </Paper>
      <Box
        sx={{
          maxHeight: "360px",
          flexGrow: 1,
          minWidth: "250px",
          overflow: "auto",
        }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
        {Transactions.map((item) => {
          return (
            <Paper
              sx={{
                mt: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              key={item.txId}
            >
              <Box p={1.2}>
                <Typography variant="body1" fontWeight={"600"}>
                  {item.user}
                </Typography>
                <Typography variant="body2">{item.txId}</Typography>
              </Box>
              <Typography variant="body1">{item.date}</Typography>
              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                {item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default SecondRow;
