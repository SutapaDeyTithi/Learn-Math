import React, { Fragment } from "react";
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
    setOpen(false);
    // this.props.showCreateExam(true);
    history.push("/createExam")
  }

  function handleClose() {
    setOpen(false);
  }
  const classes = useStyles();

  const history = useHistory();

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
              <Textfield label="Title of the Exam"/>
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
              <ReactSelect isMulti={false} options={difficulty} label="Difficulty level"/>
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


// const mapStateToProps = (state) => {
//   return {
//       // isSignedIn: state.isSignedIn,
//       createExamWindow: state.createExamWindow
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//       // signin: (isSignedIn) => { dispatch({type: 'SIGN IN', isSignedIn: isSignedIn})},
//       showCreateExam: (createExamWindow) => {dispatch({type: 'SHOW CREATE EXAM', createExamWindow: createExamWindow})}
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (NavigationBar);