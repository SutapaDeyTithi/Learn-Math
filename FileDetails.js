import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";


import "../UIToolsInstructor/splitPane.css";
import { useParams, Link } from "react-router-dom";
import { database, revision } from "./moddatabase";
import  SideBar  from "./File_SideBar"

const drawerWidth = 240;

const urlparams = ["file+details", "content", "mark+distribution", "history"];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2%",
    display: "flex",
    // height: '100vh',
    // zIndex: -1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: "10%",
    fontSize: 25,
    marginLeft: "3%",
  },
  root1: {
    display: "flex",
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
    display: "flex",
    justifyContent: "center",
    marginLeft: "3%",
    marginTop: "1%",
  },
  gridroot: {
    flexGrow: 1,
  },
  paper: {
    height: 500,
    width: 500,
    backgroundColor: "#74a390",
  },
  divFile: {
    marginLeft: 37,
    marginTop: 150,
    display:"inline-block",
  },
}));

export default function Popup() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <SideBar/>
      <div className={classes.root1}>
        <h2 className={classes.headline}>File Details</h2>
      </div>
      <main className={classes.content}>{FileDetails(classes)}</main>
    </div>
  );
}

const GetID = () => {
  let { quesID } = useParams();
  const row = database.find((r) => r._id === parseInt(quesID));
  return row;
}

const FileDetails = (classes) => {
  const row = GetID();

  return (
    <Grid container className={classes.gridroot} spacing={10}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={10}>
          <Grid>
            <Paper className={classes.paper}>
              <div className={classes.divFile}>
                <span>
                  <h4>File Name:{row.File_Name}</h4>
                </span>
                <span>
                  <h4>File Type:{row.Type}</h4>
                </span>
                <span>
                  <h4>Last Modified:{row.Uploaded}</h4>
                </span>
                <span>
                  <h4>Created By:Not Checked</h4>
                </span>
                <span>
                  <h4>Status:Not Checked</h4>
                </span>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  /*return (
    <div>
      <span>
        <h4>File Name:{row.File_Name}</h4>
      </span>
      <span>
        <h4>File Type:{row.Type}</h4>
      </span>
      <span>
        <h4>Last Modified:{row.Uploaded}</h4>
      </span>
      <span>
        <h4>Created By:Not Checked</h4>
      </span>
      <span>
        <h4>Status:Not Checked</h4>
      </span>
    </div>
  );*/
}

