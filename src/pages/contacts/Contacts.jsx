import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { columns, rows } from "./data";
const Contacts = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header
        title={"Contacts"}
        subTitle={"List of Contacts for Future Reference"}
      />
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  );
};

export default Contacts;
