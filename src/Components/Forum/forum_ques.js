import React, { Component,useEffect } from "react";
import { useTheme, lighten } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/styles'
import Avatar from "@material-ui/core/Avatar";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { useParams, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { forum_question, topic, users, forum_answer } from "./forum_databse";
import { Divider, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import Htmleditor from "../UIToolsInstructor/htmlEditor";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

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
    width: 950,
    minWidth: 275,
    marginLeft: 23,
    marginTop: 10,
    backgroundColor: "#92e0a7",
  },
  editor: {
    bgcolor: "background.paper",
    borderColor: "text.primary",
    m: 1,
    border: 1,
    style: { width: "100%", height: "50vh", borderColor: "#D3D3D3" },
  },
}));



export default function Forum_question() {
  console.log("run")
  const classes = useStyles();
  const [Forum_question, setForum_question] = React.useState(forum_question);
  //const [Forum_question, setForum_question] = React.useState([]);
  const [Users, setUser] = React.useState(users);
  const [Forum_answer, setForum_answer] = React.useState(forum_answer);
  const [up, setUp] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const [replyText, setReplyText] = React.useState()
  const [htmltext, sethtmlText] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const getforum_question = async () => {
    console.log("a")
    try {
      const response = await fetch("http://localhost:5000/get_forum");
      const jsonData = await response.json();
      console.log(jsonData);
      setForum_question(jsonData);
    } catch (error) {}
  };

  useEffect(() => {
    //get_User();
    //getforum_question();
  }, []);

  const GetQues = () => {
    let { quesID } = useParams();
    const row = Forum_question.find(
      (r) => r.forum_ques_id === parseInt(quesID)
    );
    console.log(row);
    return row;
  };

  
  const handleCloseDialogue = () => {
    setOpen(false);
  };

  const postQuestion = (e) => {
    console.log("e", e);
    sethtmlText(e);
  };

  const GetAns = () => {
    let { quesID } = useParams();
    const row = Forum_answer.filter(
      (r) => r.forum_ques_id === parseInt(quesID)
    );

    return row;
  };

  const [ques, setQues] = React.useState(GetQues);
  const [ans, setAns] = React.useState(GetAns);

  const [upAns, setUpAns] = React.useState(
    Array(ans.length)
      .fill("")
      .map((_, i) => ({
        key: ans[i].forum_ans_id,
        up_value: false,
      }))
  );

  const [downAns, setDownAns] = React.useState(
    Array(ans.length)
      .fill("")
      .map((_, i) => ({
        key: ans[i].forum_ans_id,
        down_value: false,
      }))
  );
  

  const handleClickOpen = () => {

    if (htmltext != "")
    {
        const a = {
          forum_ans_id: 8,
          user_id: 3,
          forum_ques_id: ques.forum_ques_id,
          forum_ans_text: htmltext,
          figures: null,
          link: null,
          upvote: 0,
          downvote: 0,
          posted: new Date(),
        };

        const b = {
          key: 8,
          up_value: false,
        };

        const c = {
          key: 8,
          down_value: false,
        };

        const f_a = [...ans, a];
        const u_a = [...upAns, b];
        const d_a = [...downAns, c];

        console.log(f_a);
        setAns(f_a);
        setUpAns(u_a);
        setDownAns(d_a);

        setOpen(true);
      }
  

};


  

  const getName = (d) => {
    const id = d.user_id;
    const n = Users.find((user) => user.user_id === id);
    return n.user_name;
  };

  const sortDate = () => {
    const new_forum_ans = [...ans];
    new_forum_ans.sort((a, b) => a.posted - b.posted);
    setAns(new_forum_ans);
    console.log(new_forum_ans);
  };

  const sortUpvote = () => {
    const new_forum_ans = [...ans];
    new_forum_ans.sort((a, b) => a.upvote - b.upvote);
    setAns(new_forum_ans);
    console.log(new_forum_ans);
  };

  const sortDownvote = () => {
    const new_forum_ans = [...ans];
    new_forum_ans.sort((a, b) => a.downvote - b.downvote);
    setAns(new_forum_ans);
    console.log(new_forum_ans);
  };

  const getDate = (d) => {
    var hour = d.posted.getHours();
    var minutes = d.posted.getMinutes();
    if ((hour >= 0) & (hour <= 9)) hour = "0" + hour;
    if ((minutes >= 0) & (minutes <= 9)) minutes = "0" + minutes;
    var date = d.posted.toJSON().slice(0, 10);
    var nDate =
      date.slice(8, 10) +
      "/" +
      date.slice(5, 7) +
      "/" +
      date.slice(0, 4) +
      " " +
      hour +
      ":" +
      minutes;
    return nDate;
  };


  const increaseUpvoteQues = () => {
    const new_forum_ques = ques;
    new_forum_ques.upvote = new_forum_ques.upvote + 1;
    console.log(new_forum_ques.upvote)
    setQues(new_forum_ques);
    setUp(true);
    if (down === true) decreaseDownvoteQues();
  };

  const decreaseUpvoteQues = () => {
    const new_forum_ques = ques;
    new_forum_ques.upvote = new_forum_ques.upvote - 1;
    console.log(new_forum_ques.upvote);
    setQues(new_forum_ques);
    setUp(false);
  };

  const increaseDownvoteQues = () => {
    const new_forum_ques = ques;
    new_forum_ques.downvote = new_forum_ques.downvote + 1;
    console.log(new_forum_ques.downvote);
    setQues(new_forum_ques);
    setDown(true);
    if (up === true) decreaseUpvoteQues();
  };

  const decreaseDownvoteQues = () => {
    const new_forum_ques = ques;
    new_forum_ques.downvote = new_forum_ques.downvote - 1;
    console.log(new_forum_ques.downvote);
    setQues(new_forum_ques);
    setDown(false);
  };

  const getUpvoteQues = () => {
    if (up === false) {
      return (
        <React.Fragment>
          <ThumbUpAltOutlinedIcon onClick={increaseUpvoteQues} />{" "}
        </React.Fragment>
      );
    }

    else if (up === true) {
       return (
         <React.Fragment>
           <ThumbUpAltIcon onClick={decreaseUpvoteQues} />{" "}
         </React.Fragment>
       );
    }
  }

  const getDownvoteQues = () => {
    if (down === false) {
      return (
        <React.Fragment>
          <ThumbDownAltOutlinedIcon onClick={increaseDownvoteQues} />{" "}
        </React.Fragment>
      );
    } else if (down === true) {
      return (
        <React.Fragment>
          <ThumbDownAltIcon onClick={decreaseDownvoteQues} />{" "}
        </React.Fragment>
      );
    }
  };

  const increaseUpvoteAns = (i) => {
    
    const new_forum_ans = [...ans];
    console.log(new_forum_ans[i].upvote);
    new_forum_ans[i].upvote = new_forum_ans[i].upvote + 1;
    //console.log(new_forum_ans[i].upvote);
    setAns(new_forum_ans);

    const new_Up = [...upAns];
    new_Up[i].up_value = true;
    setUpAns(new_Up);

    if (downAns[i].down_value === true) decreaseDownvoteAns(i);
  };

  const decreaseUpvoteAns = (i) => {
    const new_forum_ans = [...ans];
    new_forum_ans[i].upvote = new_forum_ans[i].upvote - 1;
    console.log(new_forum_ans.upvote);
    setAns(new_forum_ans);

    const new_Up = [...upAns];
    new_Up[i].up_value = false;
    setUpAns(new_Up);
  };

  const increaseDownvoteAns = (i) => {
    const new_forum_ans = [...ans];
    console.log(new_forum_ans[i].downvote);
    new_forum_ans[i].downvote = new_forum_ans[i].downvote + 1;
    //console.log(new_forum_ans[i].downvote);
    setAns(new_forum_ans);

    const new_down = [...downAns];
    new_down[i].down_value = true;
    setDownAns(new_down);

    if (upAns[i].up_value === true) decreaseUpvoteAns(i);
  };

  const decreaseDownvoteAns = (i) => {
    const new_forum_ans = [...ans];
    new_forum_ans[i].downvote = new_forum_ans[i].downvote - 1;
    console.log(new_forum_ans.downvote);
    setAns(new_forum_ans);

    const new_down = [...downAns];
    new_down[i].down_value = false;
    setDownAns(new_down);
  };

  const getUpvoteAns = (i) => {
    if (upAns[i].up_value === false) {
      return (
        <React.Fragment>
          <ThumbUpAltOutlinedIcon onClick={()=>{increaseUpvoteAns(i)}} />{" "}
        </React.Fragment>
      );
    } else if (upAns[i].up_value === true) {
      console.log("a")
      return (
        <React.Fragment>
          <ThumbUpAltIcon
            onClick={() => {
              decreaseUpvoteAns(i);
            }}
          />{" "}
        </React.Fragment>
      );
    }
  };

  const getDownvoteAns = (i) => {
    if (downAns[i].down_value === false) {
      return (
        <React.Fragment>
          <ThumbDownAltOutlinedIcon
            onClick={() => {
              increaseDownvoteAns(i);
            }}
          />{" "}
        </React.Fragment>
      );
    } else if (downAns[i].down_value === true) {
      console.log("a");
      return (
        <React.Fragment>
          <ThumbDownAltIcon
            onClick={() => {
              decreaseDownvoteAns(i);
            }}
          />{" "}
        </React.Fragment>
      );
    }
  };

  const postReply = (e) => {
    console.log(e)
    
  }

  const uname = getName(ques);

  return (
    <div className={classes.body_root}>
      <Card className={classes.card_root} variant="outlined">
        <Card className={classes.root} variant="outlined">
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                style={{
                  backgroundColor: "#99ff66",
                  marginTop: -5,
                }}
              >
                {uname.charAt(0)}
              </Avatar>
            }
            title={uname}
            subheader={getDate(ques)}
          />
          <CardContent>
            <Typography variant="h5">{ques.name}</Typography>
            <br />
            <Divider />
            <Typography variant="h6">{ques.forum_text}</Typography>
            <img src={ques.figures} />
            <Divider marginTop="100" />[{ques.topic_name}]
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {getUpvoteQues()}
            {ques.upvote} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {getDownvoteQues()}
            {ques.downvote}
          </CardContent>
        </Card>
      </Card>
      <Card
        className={classes.root}
        style={{ marginLeft: 71, width: 1000 }}
        variant="outlined"
      >
        <CardContent>
          <Grid container spacing={5} marginRight="200">
            <Grid item xs={5}>
              <Typography variant="h4">{ans.length} Answers</Typography>
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
                <Button size="large" onClick={sortDate}>
                  Newest
                </Button>
                <Button size="large" onClick={sortUpvote}>
                  Upvote
                </Button>
                <Button size="large" onClick={sortDownvote}>
                  Downvote
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {ans.map((a, index) => {
        const ans_name = getName(a);
        return (
          <Card
            className={classes.root}
            style={{ marginLeft: 90 }}
            variant="outlined"
          >
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  style={{
                    backgroundColor: "#99ff66",
                    marginTop: -5,
                  }}
                >
                  {ans_name.charAt(0)}
                </Avatar>
              }
              title={ans_name}
              subheader={getDate(a)}
            />
            <CardContent>
              <Typography variant="h6">{a.forum_ans_text}</Typography>
              <img src={a.figures} />
              <Divider marginTop="100" />
              {getUpvoteAns(index)}
              {a.upvote} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {getDownvoteAns(index)} {a.downvote}
            </CardContent>
          </Card>
        );
      })}
      <Card
        className={classes.root}
        style={{ marginLeft: 71, width: 1000, height: "auto" }}
        variant="outlined"
      >
        <CardContent>
          <Typography variant="h4">Your Answer</Typography>
        </CardContent>
        <Card className={classes.root} style={{ backgroundColor: "white" }}>
          <Box borderRadius={3} style={{ height: 300 }}>
            <Htmleditor setHTML={postQuestion} />
          </Box>
        </Card>
        <br />
        <Button
          color="primary"
          variant="contained"
          style={{ marginBottom: 10, marginLeft: 12, width: "auto" }}
          onClick={handleClickOpen}
        >
          Post Your Answer
        </Button>
        <Dialog
          open={open}
          keepMounted
          onClose={handleCloseDialogue}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Your Answer is posted in the Thread!
          </DialogTitle>
          <br />
          <DialogActions>
            <Link to={`/forum/${ques.forum_ques_id}`}>
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

      <br />
    </div>
  );
}
