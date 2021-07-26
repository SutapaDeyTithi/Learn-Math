import Button from "@material-ui/core/Button";
import React, { Component, useEffect, useState } from "react";
import { useStyles } from "./management_util";

export default function Manage_data() {
  const [work, setWork] = useState("I am a cat");
  const [pseudo, setPseduo] = useState("SHI-nee");
  const [user_id, setUserid] = React.useState(3);
  const [topic_name, setTopicName] = React.useState("Elomelo");
  const [name, setName] = React.useState("BBBB")
  const [forum_text, setforum_text] = React.useState("AAAA");
  const [figures, setFigures] = React.useState("");
  const [posted, setPosted] = React.useState(new Date());

  const [htmltext, sethtmlText] = React.useState("AAAA");
  const [value, setValue] = React.useState("BBBB");
  const [uid, setUid] = React.useState(3);
  const [selectedTopic, setSelectedTopic] = React.useState("Statistics");
  const [figure, setFigure] = React.useState("");
  const [link, setLink] = React.useState("");
  const [upvote, setUpvote] = React.useState(0);
  const [downvote, setDownvote] = React.useState(0);
  const [post, setPost] = React.useState(new Date());

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { work,pseudo };
      const response = await fetch("http://localhost:5000/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(JSON.stringify(body));
      console.log(response);
    } catch (error) {}
  };

  const onSubmitForm3 = async (e) => {
    e.preventDefault();
    try {
      const body = {
        user_id,
        topic_name,
        forum_text,
        upvote,
        downvote,
        posted,
        name
      };

      const response = await fetch("http://localhost:5000/postforums", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(JSON.stringify(body));
      console.log(response);
    } catch (error) {}
  };

  const onSubmitForm2 = async e => {
    e.preventDefault();
    //(3, Topic[selectedIndex].topic_name, htmltext, null, null, 0, 0, new Date(), value);
    try {
      
      const body = {
        uid,
        selectedTopic,
        htmltext,
        figure,
        link,
        upvote,
        downvote,
        post,
        value
      };
      console.log(JSON.stringify(body));
      const response = await fetch("http://localhost:5000/post_forum_ques", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(body);
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getTODOS = async () => {
    try {
      const response = await fetch("http://localhost:5000/todo");
      const jsonData = await response.json();

      console.log(jsonData);
    } catch (error) {}
  };

  useEffect(() => {
    getTODOS();
  });

  const classes = useStyles();
  console.log("IN");
  return (
    <div className={classes.root}>
      <h1>Hello World</h1>
      <Button onClick={onSubmitForm}>GO</Button>
      <Button onClick={onSubmitForm3}>GO2</Button>
    </div>
  );
}


/*
const body = {
        user_id,
        topic_name,
        forum_text,
        figures,
        link,
        upvote,
        downvote,
        posted,
        name
      };
*/