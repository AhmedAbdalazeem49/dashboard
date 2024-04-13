import Bar from "@mui/icons-material/BarChartOutlined";
import Calender from "@mui/icons-material/CalendarMonthOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Contacts from "@mui/icons-material/ContactsOutlined";
import Team from "@mui/icons-material/GroupOutlined";
import Home from "@mui/icons-material/HomeOutlined";
import Geography from "@mui/icons-material/LanguageOutlined";
import MailIcon from "@mui/icons-material/Mail";
import Pie from "@mui/icons-material/PieChartOutlineOutlined";
import FAQ from "@mui/icons-material/QuizOutlined";
import ProfileForm from "@mui/icons-material/ThreePOutlined";
import Line from "@mui/icons-material/TimelineOutlined";
import { Avatar, styled, Typography, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const listItemsOne = [
  { text: "Dashboard", icon: <Home />, path: "/" },
  { text: "Manage Team", icon: <Team />, path: "/team" },
  { text: "Contacts Information", icon: <Contacts />, path: "/contacts" },
  { text: "Invoices Balances", icon: <MailIcon />, path: "/invoices" },
];
const listItemsTwo = [
  { text: "Profile Form", icon: <ProfileForm />, path: "/form" },
  { text: "Calender", icon: <Calender />, path: "/calender" },
  { text: "FAQ", icon: <FAQ />, path: "/faq" },
];
const listItemsThree = [
  { text: "Bar Chart", icon: <Bar />, path: "/bar" },
  { text: "Pie Chart", icon: <Pie />, path: "/pie" },
  { text: "Line Chart", icon: <Line />, path: "/line" },
  { text: "Geography Chart", icon: <Geography />, path: "/geography" },
];

export const SideBar = ({ handleDrawerClose, open }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        sx={{
          mx: "auto",
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          my: 1,
          border: "2px solid grey",
          transition: "0.25s",
        }}
        alt="User Avatar"
        src={
          " https://www.shutterstock.com/image-photo/happy-african-american-young-businessman-600nw-1470743381.jpg"
        }
      />
      <Typography
        align="center"
        sx={{
          fontSize: open ? 17 : 0,
          transition: "0.25s",
        }}
      >
        Ahmed Abdalazeem
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? 15 : 0,
          transition: "0.25s",
          color: theme.palette.info.main,
        }}
      >
        Admin
      </Typography>
      <Divider />
      <List>
        {listItemsOne.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                display: "flex",
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === item.path
                    ? theme.palette.mode === "dark"
                      ? grey[800]
                      : grey[300]
                    : "",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {listItemsTwo.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                display: "flex",
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === item.path
                    ? theme.palette.mode === "dark"
                      ? grey[800]
                      : grey[300]
                    : "",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {listItemsThree.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                display: "flex",
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === item.path
                    ? theme.palette.mode === "dark"
                      ? grey[800]
                      : grey[300]
                    : "",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
