import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { columns, rows } from "./data";
const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header title={"Invoices"} subTitle={"List of Invoice Balances"} />
      <DataGrid
        checkboxSelection
        rows={rows}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  );
};

export default Invoices;
