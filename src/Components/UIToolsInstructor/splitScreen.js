import SplitPane from "react-split-pane";
import React, { Component } from "react";
import "./splitPane.css";
import Typography from '@material-ui/core/Typography';
import Dropdown from "./dropdownComponent";

class splitPane extends Component {
    render(){

      return (
        
        <div class="container">
        <div class="left">
        <Typography paragraph>
          <h3>
              Title of the Exam
          </h3>
        </Typography>
        </div>
        <div class="right">
            Create questions and subquestions.
            <Dropdown attribute="Question Type"/>
        </div>
    </div>
      );
    }
}


export default splitPane;
