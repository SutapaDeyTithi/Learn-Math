import React, { Component, useEffect } from "react";
import { useTheme, lighten } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/styles'
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { useParams, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Htmleditor from "../UIToolsInstructor/htmlEditor";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import { forum_question, topic, users } from "./forum_databse";

const useStyles = makeStyles((theme) => ({
  body_root: {
    backgroundColor: theme.palette.background.paper,
    width: "96%",
    position: "relative",
    minHeight: "90vh",
    marginLeft: "2%",

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
    height: "auto",
  },
  root: {
    width: 500,
    minWidth: 275,
    marginLeft: 250,
    marginTop: 50,
    textAlign: "center",
    alignContent: "center",
    backgroundColor: "#92e0a7",
  },
  form_root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Forum_Ask(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [Forum_question, setForum_question] = React.useState(forum_question);
  const [pseudo_Forum_question, setPseudoForum_question] =
    React.useState(forum_question);
  const [Topic, setTopic] = React.useState(topic);
  const [Users, setUser] = React.useState(users);
  const [htmltext, sethtmlText] = React.useState("");
  const [value, setValue] = React.useState("");

  const [link, setLink] = React.useState("");
  const [upvote, setUpvote] = React.useState(0);
  const [downvote, setDownvote] = React.useState(0);
  
  const [user_id, setUserid] = React.useState(3);
  const [topic_name, setTopicName] = React.useState("");
  const [name, setName] = React.useState("");
  const [forum_text, setforum_text] = React.useState("");
  const [figures, setFigures] = React.useState("");
  const [posted, setPosted] = React.useState(new Date());

  

  const get_Topic = async () => {
    try {
      const response = await fetch("http://localhost:5000/get_topic");
      const jsonData = await response.json();
      setTopic(jsonData);
      console.log(jsonData);
    } catch (error) {}
  };

  useEffect(() => {
    get_Topic();
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value);
  };

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDialogue = () => {
    setOpen(false);
  };

  const questionParams = () => {
    console.log(value);
    console.log(htmltext);
    console.log(Topic[selectedIndex].topic_name);
    
    setOpen(true);
  }

  const postQuestion = (e) => {
    console.log("e",e);
    sethtmlText(e);
  }



  const onSubmitForm3 = async (e) => {
    setTopicName(Topic[selectedIndex].topic_name);
    setforum_text(htmltext);
    setName(value);
    e.preventDefault();
 
    if (forum_text !== "" && topic_name != "" && name != "") {
      try {
        const body = {
          user_id,
          topic_name,
          forum_text,
          upvote,
          downvote,
          posted,
          name,
        };

        const response = await fetch("http://localhost:5000/postforums", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        console.log(JSON.stringify(body));
        console.log(response);
      } catch (error) {}

      setOpen(true);
    }
    
  };

  return (
    <div className={classes.body_root}>
      <Card className={classes.card_root} variant="outlined">
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              <b>ASK ANY RELATIVE QUESTION</b>
            </Typography>
            <Typography variant="body2" component="p">
              <br />
              You are encouraged to avoid duplication.
              <br />
              Happy Mathematics!
            </Typography>
          </CardContent>
        </Card>
        <Grid container spacing={3} marginRight="200">
          <Grid item xs={3}>
            <Typography variant="h5" style={{ marginLeft: 20, marginTop: 20 }}>
              Choose Your Topic:
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <List component="nav" aria-label="Device settings">
              <ListItem
                button
                variant="contained"
                color="primary"
                aria-haspopup="true"
                aria-controls="lock-menu"
                onClick={handleClickListItem}
              >
                <ListItemText style={{ backgroundColor: "#92e0a7" }}>
                  <Typography variant="h5">
                    {Topic[selectedIndex].topic_name}
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {Topic.map((topic, index) => (
                <MenuItem
                  key={topic.topic_id}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {topic.topic_name}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        </Grid>
        <Box component="div" display="inline" p={4} m={1}>
          <Typography variant="h5" style={{ marginLeft: 20, marginTop: 20 }}>
            Title of your question:
          </Typography>
        </Box>
        <Box component="div" display="inline" p={1} m={4}>
          <form
            className={classes.form_root}
            noValidate
            autoComplete="off"
            style={{ marginLeft: 20 }}
          >
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={value}
              onChange={handleChange}
              style={{ background: "white" }}
            />
          </form>
        </Box>
        <Box component="div" display="inline" p={4} m={1}>
          <Typography variant="h5" style={{ marginLeft: 20, marginTop: 20 }}>
            Description:
          </Typography>
        </Box>
        <Box
          borderRadius={7}
          style={{
            height: 400,
            backgroundColor: "white",
            width: 950,
            marginLeft: 20,
            marginBottom: 30,
          }}
        >
          <Htmleditor setHTML={postQuestion} />
        </Box>
        <Box display="inline">
          <Button
            color="primary"
            variant="contained"
            style={{ marginBottom: 10, marginLeft: 20, width: "auto" }}
            onClick={onSubmitForm3}
          >
            Post Your Question
          </Button>
        </Box>
        
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseDialogue}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Your Question is posted in Forum!
          </DialogTitle>
          <br />
          <DialogActions>
            <Link to={`/forum`}>
              <Button
                onClick={handleCloseDialogue}
                color="primary"
                variant="contained"
              >
                Thanks!
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </Card>
    </div>
  );
}
