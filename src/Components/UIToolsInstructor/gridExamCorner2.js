import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Card from "./card.js";
import Dropdown from "./dropdownComponent";
import AddQues from "./popupAddQues";
import Addrubrik from "./popupAddRubrik";


// import Button from "./button";
import {
  Dialog,
  Button,
  FormControl,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core/";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // alignSelf: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: 700,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '100vh',
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify='center'>
        <Grid item xs={9} >
          <Paper className={classes.paper}>
            <h3>Title of the Exam</h3>
          
            <Grid container spacing={1}>
            
                <Button variant="outlined" color="primary">
                  Upload
                </Button>
      
           
                <Button variant="outlined" color="primary">
                  Upload
                </Button>
     
          
                <Button variant="outlined" color="primary">
                  Upload
                </Button>
           
            </Grid>

          </Paper>
              {/* <Card /> */}
        </Grid>
      </Grid>
      </div>
    
  );
}
/*
  {/* <Grid item xs={3}>
        <Grid container justify="center" spacing={spacing}>
          {[0].map((value) => (
            <Grid key={value} item>
                {/* <Card /> *///}
                //{/* <Dropdown attribute="Question Type"/> */}
                //{/* <FormControl style={{ width: "100%" }}>
          //       <br/><br/><br/><br/>
          //       <AddQues />
          //       <br/>
          //       <Addrubrik />
          //       <br/>
          //       <Button variant="outlined" color="primary">
          //         Upload
          //       </Button>
          //       <br/>
          //       <Button variant="outlined" color="primary">
          //         Save
          //       </Button>
          //       <br/>
          //       <Button variant="outlined" color="primary">
          //         Cancel
          //       </Button>
          //       </FormControl>
          //   </Grid>
          // ))}
      //   </Grid>
      // </Grid> */}

   //   {/* <Grid item xs={12}>
        // <Paper className={classes.control}>
        //   <Grid container>
        //     <Grid item>
        //       <FormLabel>spacing</FormLabel>
        //       <RadioGroup
        //         name="spacing"
        //         aria-label="spacing"
        //         value={spacing.toString()}
        //         onChange={handleChange}
        //         row
        //       >
        //         {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
        //           <FormControlLabel
        //             key={value}
        //             value={value.toString()}
        //             control={<Radio />}
        //             label={value.toString()}
        //           />
        //         ))}
      //         </RadioGroup>
      //       </Grid>
      //     </Grid>
      //   </Paper>
      // </Grid> */}
   // {/* </Grid> */}
    //*/