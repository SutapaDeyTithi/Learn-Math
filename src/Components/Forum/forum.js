import React, { Component, useEffect } from "react";
import {
  
  useTheme,
  lighten,
  withStyles,
} from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/styles'
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import TextField from "@material-ui/core/TextField";
import { Divider } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Pagination from "@material-ui/lab/Pagination";
//Import the pagination component
// import Pagination from 'materialui-pagination';
import Menu from "@material-ui/core/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { users } from "./forum_databse";

import { useParams, Link } from "react-router-dom";

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
  root: {
    width: 500,
    minWidth: 275,
    marginLeft: 250,
    marginTop: 50,
    alignContent: "center",
    backgroundColor: "#92e0a7",
  },
  forum_root: {
    width: 950,
    minWidth: 275,
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: "#92e0a7",
  },
  card_root: {
    minWidth: 275,
    width: 1000,
    marginLeft: 70,
    marginTop: 20,
    backgroundColor: "#74a390",
    height: 410,
  },
  card_root2: {
    minWidth: 275,
    width: 1000,
    marginLeft: 70,
    marginTop: 20,
    backgroundColor: "#74a390",
    height: "auto",
  },
  paper: {
    padding: theme.spacing(2),

    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));




export default function Forum() {

  const [Forum_question, setForum_question] = React.useState([]);
  const [pseudo_Forum_question, setPseudoForum_question] =
    React.useState([]);
  const [Topic, setTopic] = React.useState([]);
  const [pseudo_User, setPseudoUser] = React.useState([]);
  const [Forum_answer, setForum_answer] = React.useState([]);
  //const [Users, setUser] = React.useState([]);

  const get_User = async () => {
    try {
      const response = await fetch("http://localhost:5000/get_User");
      const jsonData = await response.json();
      setUser(jsonData);
      console.log(jsonData);
    } catch (error) {}
  };

  const getforum_question = async () => {
    try {
      const response = await fetch("http://localhost:5000/get_forum");
      const jsonData = await response.json();
      console.log(jsonData);
      setForum_question(jsonData);
      setPseudoForum_question(jsonData);
      
    } catch (error) {}
  };

  const get_Topic = async () => {
    try {
      const response = await fetch("http://localhost:5000/get_topic");
      const jsonData = await response.json();
      setTopic(jsonData);
      console.log(jsonData)
    } catch (error) {}
  };

  const get_forum_ans = async () => {
    try {
      const response = await fetch("http://localhost:5000/get_forum_ans");
      const jsonData = await response.json();
      console.log(jsonData);
      setForum_answer(jsonData);
    } catch (error) {}
  };


  useEffect(() => {
    //get_User();
    getforum_question();
    
    get_Topic();
    //get_User();
    get_forum_ans();
  },[]);


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [perpage, setPerPage] = React.useState(3);
  //const [Forum_question, setForum_question] = React.useState(forum_question);
  //const [Forum_answer, setForum_answer] = React.useState(forum_answer);
  
  //const [Topic, setTopic] = React.useState(topic);
  const [Users, setUser] = React.useState(users);
  const [showing, setShowing] = React.useState("All Questions");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMore2 = (i) => {
    if (i === 0) {
      const new_forum_ques = [...Forum_question];
      new_forum_ques.sort((a, b) => a.upvote - b.upvote);
      setForum_question(new_forum_ques);
      console.log(new_forum_ques);
      setShowing("Sort by Upvote");
    } else if (i === 1) {
      const new_forum_ques = [...Forum_question];
      new_forum_ques.sort((a, b) => a.downvote - b.downvote);
      setForum_question(new_forum_ques);
      console.log(new_forum_ques);
      setShowing("Sort by Downvote");
    } else if (i === 2) {
      var new_forum_ques = [];
      for (var i = 0; i < Forum_question.length; i++)
      {
        for (var j = 0; j < Forum_answer.length; j++)
        {
          if (Forum_question[i].forum_ques_id === Forum_answer[j].forum_ques_id)
          {
            break;
          }
        }
        if (j === Forum_answer.length)
        {
          new_forum_ques.push(Forum_question[i]);
        }
      }
      
      setForum_question(new_forum_ques);
      console.log("unanswered",new_forum_ques);
      setShowing("Sort by Unanswered");
    }
    setAnchorEl(null);
  };
  

  const handleChange = (event, value) => {
    setPage(value);
  };
  const anchorRef = React.useRef(null);

  const anchorRefMore = React.useRef(null);

  const handleToggle = () => {
    console.log("topic");
    setOpen((prevOpen) => !prevOpen);
  };


  const handleClose = (event,id) => {
    
    if (id != -1)
    {
      const n = Topic.find((topic) => topic.topic_id === id);
      var new_forum_ques = Forum_question.filter(
        (fq) => fq.topic_name === n.topic_name
      );
      setForum_question(new_forum_ques);
      setShowing("Sort by Topic");
      console.log(new_forum_ques);
      setPage(1);

    }
  
    
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    console.log("topic");

    setOpen(false);
  };


  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }


  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  const dropdown = () => {
    console.log("D",open);
    return (
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={(event) => handleClose(event,-1)}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {Topic.map((topic, index) => {
                    return (
                      <MenuItem
                        value={topic.topic_id}
                        onClick={(event) => handleClose(event, topic.topic_id)}
                      >
                        {topic.topic_name}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    );
  };


  const sortDate = () => {
    const new_forum_ques = [...Forum_question]
    new_forum_ques.sort((a, b) => new Date(a.posted) - new Date(b.posted));
    setForum_question(new_forum_ques)
    console.log(new_forum_ques);
    setShowing("Sorted by Date")
  }

  const showAll = () =>
  {
      const p = [...pseudo_Forum_question];
    setForum_question(p);
    setShowing("All Questions");
  }

  const getName = (ques) => {
    console.log("ques",ques)
    const id = ques.user_id;
    const n = Users.find((user) => user.user_id === id);
    return n.user_name;
  };
  
  const getDate = (d) => {

    console.log(d)
    var hour = d.slice(11, 13);
    var minutes = d.slice(14, 16);
    //if (hour >= 0 & hour <= 9) hour = "0" + hour;
    //if ((minutes >= 0) & (minutes <= 9)) minutes = "0" + minutes;
    //var date = d.toJSON().slice(0, 10);
    var date = d.slice(0, 10);
    var nDate = date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4)+" "+hour+":"+minutes;
    return nDate;
  }

  const getReplyCount = (q) => {
    var count = 0;
    for (var j = 0; j < Forum_answer.length; j++) {
      if (q.forum_ques_id === Forum_answer[j].forum_ques_id) {
        count += 1;
      }
    }
    return count;
  }


  return (
    <div className={classes.body_root}>
      <Card className={classes.card_root} variant="outlined">
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              <b>BLOW AWAY YOUR CONFUSIONS</b>
              <WbIncandescentIcon />
            </Typography>
            <Typography variant="body2" component="p">
              <br />
              Ask relative questions, answer them, help the community grow!
              <br />
              Happy Mathematics!
            </Typography>
          </CardContent>
        </Card>
        <Typography variant="h5" style={{ marginRight: 800, marginTop: 20 }}>
          Total {Forum_question.length} Questions
        </Typography>
        <br />
        <Grid container spacing={3} marginRight="200">
          <Grid item xs={2}>
            <ButtonGroup
              marginTop="200"
              size="large"
              color="primary"
              aria-label="large outlined primary button group"
              variant="contained"
              size="large"
              fullWidth="true"
            >
              <Button onClick={showAll}>Show all</Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs>
            <ButtonGroup
              marginTop="200"
              size="large"
              color="primary"
              aria-label="large outlined primary button group"
              variant="contained"
              fullWidth="true"
            >
              <Button
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                size="large"
              >
                Topic
              </Button>
              {console.log("1")}
              {dropdown()}
              <Button size="large" onClick={sortDate}>
                Newest
              </Button>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                More
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => {
                  handleCloseMore2(-1);
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleCloseMore2(0);
                  }}
                >
                  Upvote
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseMore2(1);
                  }}
                >
                  Downvote
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseMore2(2);
                  }}
                >
                  Unanswered
                </MenuItem>
              </Menu>
            </ButtonGroup>
          </Grid>
          <Grid item xs>
            <Link to={`/forum/ask/question`}>
              <ButtonGroup
                marginTop="200"
                size="large"
                color="primary"
                aria-label="large outlined primary button group"
                variant="contained"
                size="large"
                fullWidth="true"
              >
                <Button>Ask a Question</Button>
              </ButtonGroup>
            </Link>
          </Grid>
        </Grid>
        <Typography variant="h5" style={{ marginTop: 30, marginRight: 625 }}>
          Currently Showing: {showing}
        </Typography>
        <Divider />
      </Card>
      <Card className={classes.card_root2} variant="outlined" display="block">
        {Forum_question.map((ques, index) => {
          const uname = getName(ques);
          const start = (page - 1) * perpage;
          const end = start + (perpage - 1);
          console.log(page, start, end);
          if ((index >= start) & (index <= end)) {
            return (
              <Card className={classes.forum_root} variant="outlined">
                <CardContent>
                  <Avatar
                    aria-label="recipe"
                    style={{
                      backgroundColor: "#99ff66",
                      marginTop: -5,
                    }}
                  >
                    {uname.charAt(0)}
                  </Avatar>
                  <Link to={`/forum/${ques.forum_ques_id}`}>
                    <Typography variant="h5" marginBottom="2">
                      {ques.name}
                      <WbIncandescentIcon />
                    </Typography>
                  </Link>
                  <Grid container spacing={3}>
                    <Grid item xs={2}>
                      <Typography variant="h6">
                        Topic: {ques.topic_name}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h6">Asked By: {uname}</Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h6">
                        Upvote: {ques.upvote}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h6">
                        Downvote: {ques.downvote}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h6">
                        Replies: {getReplyCount(ques)}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h6">
                        Posted: {getDate(ques.posted)}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            );
          }
        })}
        <Typography>Page: {page}</Typography>
        <Pagination
          count={Math.ceil(Forum_question.length / perpage)}
          page={page}
          onChange={handleChange}
        />
      </Card>
    </div>
  );
}
