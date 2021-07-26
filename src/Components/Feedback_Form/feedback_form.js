import React, { Component } from 'react';
import {  useTheme, lighten } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/styles'
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import Divider from "@material-ui/core/Divider";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";


const useStyles = makeStyles((theme) => ({
  body_root: {
    backgroundColor: theme.palette.background.paper,
    width: "96%",
    position: "relative",
    minHeight: "90vh",
    marginLeft: "2%",
    textAlign: "center",
    position: "relative",
    position: "initial",
    padding: 100,
  },
  card_root: {
    minWidth: 275,
    width: 1000,
    marginLeft: 70,
    marginTop: 20,
    backgroundColor: "#74a390",
    height: 500,
  },
  root: {
    width: 500,
    minWidth: 275,
    marginLeft: 250,
    marginTop: 50,
    alignContent: "center",
    backgroundColor: "#92e0a7",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  margin: {
    marginTop: 50,
  
    },
    button_root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export default function Form()
{
    const classes = useStyles();

    const [review_open, setReviewOpen] = React.useState(false);
    const [suggest_open, setSuggestOpen] = React.useState(false);
    const [report_open, setReportOpen] = React.useState(false);
    const [nav, setNav] = React.useState(3);
    const [quantity, setquantity] = React.useState(3);
    const [quality, setquality] = React.useState(3);
    const [overall, setoverall] = React.useState(3);

    const handleReviewOpen = () => {
      setReviewOpen(true);
    };

    const handleReviewClose = () => {
      setReviewOpen(false);
    };

    const handleSuggestOpen = () => {
      setSuggestOpen(true);
    };

    const handleSuggestClose = () => {
      setSuggestOpen(false);
    };

    const handleReportOpen = () => {
      setReportOpen(true);
    };

    const handleReportClose = () => {
      setReportOpen(false);
    };


    
    const reviewDialogue = () => {
        return (
          <Dialog
            open={review_open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleReviewClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title" textAlign="center">
              Leave a review
            </DialogTitle>
            <Divider />
            <DialogContent>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">
                  How do you feel about our website navigation?
                </Typography>
                <Rating
                  name="customized-empty"
                  
                  value={nav}
                  precision={0.5}
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            onClick={(event, newValue) => {
                      console.log("Navigation");
                    //setNav(event.target.value);
                    //console.log("nav ", nav);
                  }}
                />
              </Box>

              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">
                  What do you think about our content quantity?
                </Typography>
                <Rating
                  name="customized-empty"
                  
                  value={quantity}
                  precision={0.5}
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            onClick={(event, newValue) => {
                      console.log("Quantity")
                    //setquantity(event.target.value);
                    //console.log("quan ", quantity);
                  }}
                />
              </Box>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">
                  What do you think about our content quality?
                </Typography>
                <Rating
                  name="customized-empty"
                  
                  value={quality}
                  precision={0.5}
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            onClick={(event, newValue) => {
                      console.log("Quality");
                    //setquality(event.target.value);
                    //console.log("qual ", quality);
                  }}
                />
              </Box>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">
                  Rate Your Overall Satisfaction with our website!
                </Typography>
                <Rating
                  name="customized-empty"
                  
                  value={overall}
                  precision={0.5}
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            onClick={(event, newValue) => {
                      console.log("Overall");
                    //setoverall(newValue);
                    //console.log("overall ", overall);
                  }}
                />
              </Box>
              <Typography component="legend">
                Do you want anything to add (optional)?
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  multiline
                  maxRows={4}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleReviewClose}
                color="primary"
                variant="contained"
              >
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        );
    }

    const suggestDialogue = () => {
        return (
          <Dialog
            open={suggest_open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleSuggestClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title" textAlign="center">
              Leave a Suggestion
            </DialogTitle>
            <Divider />
            <DialogContent>
              
              <Typography component="legend">
                Please tell us how we can improve!
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  multiline
                  maxRows={4}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleSuggestClose}
                color="primary"
                variant="contained"
              >
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        );
    }


    const reportDialogue = () => {
      return (
        <Dialog
          open={report_open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleReportClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title" textAlign="center">
            Report
          </DialogTitle>
          <Divider />
          <DialogContent>
            <Typography component="legend">
              Please state the level, tutorial name, topic name, subtopic name
              of the tutorial you have found offensive (if any).
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                variant="outlined"
                multiline
                maxRows={4}
              />
            </form>
            <br />
            <Typography component="legend">
              Please state the level, problem name, topic name, subtopic name,
              category name of the practice problem you have found offensive (if
              any).
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                variant="outlined"
                multiline
                maxRows={4}
              />
            </form>
            <br />
            <Typography component="legend">
              Please state the level, problem name, topic name, subtopic name,
              category name of the test problem you have found offensive (if
              any).
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                variant="outlined"
                multiline
                maxRows={4}
              />
            </form>
            <br />
            <Typography component="legend">
              Please state the level and user name of the person you have found offensive (if
              any).
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                variant="outlined"
                multiline
                maxRows={4}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleReportClose}
              color="primary"
              variant="contained"
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      );
    };

    return (
      <div className={classes.body_root}>
        <Card className={classes.card_root} variant="outlined">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2">
                <b>WE VALUE YOUR FEEDBACK</b>
              </Typography>
              <Typography variant="body2" component="p">
                <br />
                We would love to hear your thoughts, suggestions, concerns or
                problems with anything so we can improve!
              </Typography>
            </CardContent>
          </Card>

          <Grid container>
            <Grid item xs={7}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Name *"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Email *"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailRoundedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Typography style={{ marginTop: 30, marginRight: 50 }}>
            * Required Fields
          </Typography>
          <Divider style={{ marginTop: 30 }} />
          <Typography variant="h5" style={{ marginTop: 15 }}>
            Feedback Type
          </Typography>

          <Grid container style={{ marginTop: 10 }}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button_root}
                onClick={handleReviewOpen}
              >
                Review
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button_root}
                onClick={handleSuggestOpen}
              >
                Suggest
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button_root}
                onClick={handleReportOpen}
              >
                Report
              </Button>
            </Grid>
          </Grid>
        </Card>
        {reviewDialogue()}
        {suggestDialogue()}
        {reportDialogue()}
      </div>
    );
}