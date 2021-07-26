import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SendIcon from "@material-ui/icons/Send";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import ErrorIcon from "@material-ui/icons/Error";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Button from "@material-ui/core/Button";



import "../UIToolsInstructor/splitPane.css";
import { useParams, Link } from "react-router-dom";
import { database } from "./moddatabase";
import SideBar from "./File_SideBar";
import { AppBar, Typography } from "@material-ui/core";

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
    width: 700,
    backgroundColor: "#74a390",
  },
  divFile: {
    marginLeft: 37,
    marginTop: 150,
    display: "inline-block",
  },
  button: {
    marginLeft: 10,
    marginTop: 50,
    display: "inline-block",
    fontSize: 100,
  },
}));

export default function FileContent() {
  const classes = useStyles();
  const theme = useTheme();
  const row = GetID();
  var string = ["Title:", "Question:", "Breakpoints:", "Answer:", "Explanation:"];
  var title = "Title:";
  var question = "Question:";
  var breakpoints = "Breakpoints:";
  var answer = "Answer:";
  var explanation = "Explanation:";

  const [remark, setRemark] = React.useState([
    "Title:",
    "Question:",
    "Breakpoints:",
    "Answer:",
    "Explanation:",
  ]);
    
    //this one's for title, question, bp, answer, explanation
  const [open_list, setOpen] = useState(
    Array(5).fill(false)
    );

    const [open_list_error, setOpenE] = useState(Array(5).fill(false));
    const [open_list_ok, setOpenO] = useState(Array(5).fill(false));
    const [open_list_reject, setOpenR] = useState(Array(5).fill(false));

    const details = [row.File_Name, row.Text, row.Breakpoint_title, row.Answer, row.Explanation, row.Figure];

    const headline = ["Title", "Question", "Breakpoints", "Answer", "Explanation"];
    
    const handleClick = (idx) => {
        let op_list = [...open_list];
        op_list[idx] = !op_list[idx];
      setOpen(op_list);
    };

    const handleErrorClick = (idx) => {
        let op_list = [...open_list_error];
        op_list[idx] = !op_list[idx];

        let op_list_ok = [...open_list_ok];
        op_list_ok[idx] = false;

        let op_list_reject = [...open_list_reject];
      op_list_reject[idx] = false;

      var string = [...remark]
      
      if (op_list[idx] === true) {
        string[idx] = headline[idx] + ":Reviewed";
      }
      else if (op_list[idx] === false) {
        string[idx] = headline[idx];
      }
      setRemark(string);

      console.log(string);
        setOpenE(op_list);
        setOpenO(op_list_ok);
        setOpenR(op_list_reject);
    }

    const handleOKClick = (idx) => {
        let op_list = [...open_list_ok];
        op_list[idx] = !op_list[idx];
        
        let op_list_reject = [...open_list_reject];
        op_list_reject[idx] = false;

        let op_list_error = [...open_list_error];
      op_list_error[idx] = false;

      var string = [...remark];
      if (op_list[idx] === true) {
        string[idx] = headline[idx] + ":accepted";
      } else if (op_list[idx] === false) {
        string[idx] = headline[idx];
      }

      setRemark(string)

      console.log(string);

        setOpenO(op_list);
        setOpenE(op_list_error);
        setOpenR(op_list_reject);
    };

    const handleRejectedClick = (idx) => {
      let op_list = [...open_list_reject];
        op_list[idx] = !op_list[idx];
        
        let op_list_ok = [...open_list_ok];
        op_list_ok[idx] = false;

        let op_list_error = [...open_list_error];
      op_list_error[idx] = false;

      var string = [...remark];
      
      if (op_list[idx] === true) {
        string[idx] = headline[idx] + ":rejected";
      } else if (op_list[idx] === false) {
        string[idx] = headline[idx];
      }

      setRemark(string);

      console.log(string);

        setOpenR(op_list);
        setOpenO(op_list_ok);
        setOpenE(op_list_error);
  };


  

  return (
    <div className={classes.root}>
      <SideBar />
      <div className={classes.root1}>
        <h2 className={classes.headline}>File Details</h2>
      </div>
      <main className={classes.content}>
        <Grid container className={classes.gridroot} spacing={10}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={10}>
              <Grid>
                {headline.map((_, index) => {
                  return (
                    <React.Fragment>
                      <AppBar
                        position="static"
                        style={{
                          flexGrow: 1,
                          height: 100,
                          width: 1000,
                          marginBottom: 70,
                          background: "#49675B",
                        }}
                      >
                        <ListItem
                          button
                          onClick={() => {
                            handleClick(index);
                          }}
                          style={{ flexGrow: 1, height: 100 }}
                        >
                          {open_list[index] ? (
                            <ExpandLess style={{ marginLeft: 10 }} />
                          ) : (
                            <ExpandMore style={{ marginLeft: 10 }} />
                          )}
                          <Typography variant="h5" style={{ marginLeft: 100 }}>
                            {headline[index]}
                            
                          </Typography>
                        </ListItem>
                      </AppBar>
                      <Collapse
                        in={open_list[index]}
                        timeout="auto"
                        unmountOnExit
                      >
                        {index === 1 && details[5] && (
                          <img src={details[5]} style={{ marginLeft: 100 }} />
                        )}
                        {index !== 2 && (
                          <Typography variant="h5" style={{ marginLeft: 100 }}>
                            {details[index]}
                          </Typography>
                        )}
                        {index === 2 && (
                          <ol style={{ marginLeft: 100 }}>
                            {details[index].map((d, index) => {
                              return (
                                <li key={index}>
                                  <Typography variant="h5">{d}</Typography>
                                </li>
                              );
                            })}
                          </ol>
                        )}

                        <BottomNavigation
                          style={{
                            width: 400,
                            backgroundColor: "#74a390",
                            marginTop: 50,
                            marginBottom: 50,
                            marginLeft: 600,
                          }}
                        >
                          <BottomNavigationAction
                            icon={
                              <Tooltip title="Accept">
                                <CheckCircleIcon
                                  onClick={() => {
                                    handleOKClick(index);
                                  }}
                                  style={{
                                    cursor: "pointer",
                                    marginBottom: 20,
                                  }}
                                />
                              </Tooltip>
                            }
                          />
                          <BottomNavigationAction
                            label="Favorites"
                            icon={
                              <Tooltip title="Reject">
                                <CancelIcon
                                  onClick={() => {
                                    handleRejectedClick(index);
                                  }}
                                  style={{
                                    cursor: "pointer",
                                    marginBottom: 5,
                                  }}
                                />
                              </Tooltip>
                            }
                          />
                          <BottomNavigationAction
                            label="Nearby"
                            icon={
                              <Tooltip title="Modify">
                                <ErrorIcon
                                  onClick={() => {
                                    handleErrorClick(index);
                                  }}
                                  style={{
                                    cursor: "pointer",
                                    marginBottom: 5,
                                  }}
                                />
                              </Tooltip>
                            }
                          />
                        </BottomNavigation>

                        {accepted(open_list_ok[index])}
                        {rejected(open_list_reject[index])}
                        {dialogue_box(open_list_error[index])}
                      </Collapse>
                    </React.Fragment>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

const GetID = () => {
  let { quesID } = useParams();
  const row = database.find((r) => r._id === parseInt(quesID));
  return row;
};


const breakpoints = (bp) => {
    bp.map((b) => {
        return (
            <li>b</li>
        );
    })
}

const dialogue_box = ( error) => {
    
    return (
      <Collapse in={error} timeout="auto" unmountOnExit>
        <Typography style={{marginLeft:600}}>Slight Modification</Typography>
        <form noValidate autoComplete="off" style={{ marginBottom: 70 ,marginLeft:600}}>
          <TextField
            id="standard-multiline-flexible"
            label="Remark"
            multiline
            rowsMax={4}
          />
        </form>
      </Collapse>
    );
}

const accepted = (ok) => {
    
  return (
    <Collapse in={ok} timeout="auto" unmountOnExit>
      <Typography style={{ marginBottom: 70, marginLeft: 600 }}>
        Accepted
      </Typography>
    </Collapse>
  );
};

const rejected = (reject) => {
    
  return (
    <Collapse in={reject} timeout="auto" unmountOnExit>
      <Typography style={{marginLeft:600}}>Rejected</Typography>
      <form
        noValidate
        autoComplete="off"
        style={{ marginBottom: 70, marginLeft: 600 }}
      >
        <TextField
          id="standard-multiline-flexible"
          label="Remark"
          multiline
          rowsMax={4}
        />
      </form>
    </Collapse>
  );
};

/*const FileDetails = (classes) => {
  const row = GetID();

  return (
    <Grid container className={classes.gridroot} spacing={10}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={10}>
          <Grid>
            <Paper className={classes.paper}>
               <ListItem button className={classes.button} onClick={() => { handleClick(0)}}>
                <ListItemText primary="Title" />
              </ListItem>
              <ListItem button style={{ marginLeft: 10 }}>
                <ListItemText primary="Question" />
              </ListItem>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};*/
