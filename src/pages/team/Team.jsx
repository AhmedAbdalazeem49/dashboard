import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const columns = [
    { field: "id", headerName: "ID", align: "center", headerAlign: "center" },
    {
      field: "name",
      headerName: "Title",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              padding: "5px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              marginTop: "10px",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                fontSize="small"
                sx={{ color: "white" }}
              />
            )}
            {access === "User" && (
              <LockOpenOutlined fontSize="small" sx={{ color: "white" }} />
            )}
            {access === "Manager" && (
              <SecurityOutlined fontSize="small" sx={{ color: "white" }} />
            )}
            <Typography
              sx={{
                fontSize: "13px",
                color: "white",
              }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header  title={"Team"} subTitle={"Managing the Team Members"}/>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};

export default Team;
