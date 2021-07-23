import React, { useRef, Fragment } from "react";
import {
  Grid,
  Dialog,
  Button,
  FormControl,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core/";

import EditIcon from "@material-ui/icons/Edit";
import ReactSelect from "./reactMaterialSelect";
import { makeStyles } from '@material-ui/core/styles';
import Textfield from "./textField";

import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  paperFullWidth: {
    overflowY: 'visible'
  },
  dialogContentRoot: {
    overflowY: 'visible'
  }
});

export default () => {
  const [open, setOpen] = React.useState(true);
  const [state, setState] = React.useState("");
  const [Type] = React.useState([
    { value: "1", label: "Regular Exam" },
    { value: "2", label: "Problem of the Week" }
  ]);

  const [difficulty] = React.useState([
    { value: "1", label: "Level 1" },
    { value: "2", label: "Level 2" },
    { value: "3", label: "Level 3" },
    { value: "4", label: "Level 4" },
    { value: "5", label: "Level 5" },
  ]);
  // const [ExmType] = React.useState([
  //   { value: "1", label: "Exam Type" },
  // ]);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleNext() {
    console.log("text field: ", state);
    console.log("open: ", open);
    setOpen(false);
    // this.props.showCreateExam(true);
    
    history.push("/createExam")
  }

  function handleClose() {
    setOpen(false);
  }
  const classes = useStyles();

  const history = useHistory();

  const valueRef_textfield = useRef('') //creating a refernce for TextField Component

  const handleTitle = (event) => {
    console.log(event.target.value);
    console.log("here.. ", valueRef_textfield.current.value) //on clicking button accesing current value of TextField and outputing it to console 
  }

  const handleTextvalue = event => {
    console.log("hi")
    const { value } = event.target;
    setState(value);
    console.log(state);
    console.log(value);
  };

  function handleLevel(value) {
    console.log(value);
  };

  return (
    <Fragment>
      <EditIcon title="Edit" onClick={handleClickOpen} className="micon" />
      <Dialog
        maxWidth={"sm"}
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{
          paperFullWidth: classes.paperFullWidth
        }}
      >
        <DialogTitle id="alert-dialog-title">
          Exam Settings
        </DialogTitle>

        <DialogContent
        classes={{
          root: classes.dialogContentRoot
        }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Textfield 
                label="Title of the Exam" 
                value={state}
                onChange={this.handleTextvalue}
                //onChange = {handleTitle}
                />
            </Grid>
          </Grid>
 
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl style={{ width: "100%" }}>
                <ReactSelect isMulti={false} options={Type} label="Exam Type"/>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl style={{ width: "100%" }}>
              <ReactSelect id="diff_level" isMulti={false} options={difficulty} label="Difficulty level" onChange={this.handleLevel}/>
              </FormControl>
            </Grid>
          </Grid> 
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button onClick={handleNext} variant="contained" to="/createExam">
            Next
          </Button>
        </DialogActions>

      </Dialog>
    </Fragment>
  );
};
