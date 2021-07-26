import React from "react";
import clsx from "clsx";
import {  useTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/styles'
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";


import "../UIToolsInstructor/splitPane.css";
import { useParams, Link } from "react-router-dom";
import { database } from "./moddatabase";

const drawerWidth = 240;

const urlparams = ["file+details", "content", "mark+distribution", "history"];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2%",
    display: "flex",
    // height: '100vh',
    // zIndex: -1,
  },
  appBar: {
    color: "black",
    marginRight: "95.25%",
    boxShadow: "none",
    width: "5.6%",
    marginTop: "3.7rem",
    // width: theme.spacing(9) + 1,
    backgroundColor: "#ffffff",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarShift: {
    marginTop: "3.7rem",
    // marginLeft: drawerWidth,
    marginRight: "100%",
    width: "0%",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    marginTop: "3.7rem",
    display: "none",
  },
  drawer: {
    marginTop: "3.7rem",
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    // zIndex: -1,
    // height: '80vh',
  },
  drawerOpen: {
    marginTop: "3.7rem",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    marginTop: "3.7rem",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    //   color: '#fff59d',
    marginTop: "3%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: "10%",
    fontSize: 25,
    marginLeft: "3%",
  },
  root1: {
    flexGrow: 1,
    marginTop: "2.2%",
    marginLeft: "5.5%",
    backgroundColor: "#49675B",
    textAlign: "left",
    color: "white",
    width: "100%",
    height: 69,
    position: "fixed",
  },
  headline: {
    marginLeft: "3%",
    marginTop: "1%",
  },
}));

export default function SideBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
            style={{ marginLeft: 10 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["File Details", "Contents", "Mark Distribution"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <Link to={`/checkContent/${GetID()._id}/${urlparams[index]}`}>
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </Drawer>
    </React.Fragment>
  );
}

const GetID = () => {
  let { quesID } = useParams();
  const row = database.find((r) => r._id === parseInt(quesID));
  return row;
};