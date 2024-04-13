import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import TopBar from "./components/TobBar";
import Bar from "./pages/bar/Bar";
import Calender from "./pages/calender/Calender";
import Contacts from "./pages/contacts/Contacts";
import Dashboard from "./pages/dashboard/Dashboard";
import Faq from "./pages/faq/Faq";
import Form from "./pages/form/Form";
import Geography from "./pages/geography/Geography";
import Invoices from "./pages/invoices/Invoices";
import Line from "./pages/line/Line";
import Pie from "./pages/pie/Pie";
import Team from "./pages/team/Team";
import getDesignTokens from "./Theme";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") || "dark"
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          setMode={setMode}
        />

        <SideBar open={open} handleDrawerClose={handleDrawerClose} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/line" element={<Line />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
