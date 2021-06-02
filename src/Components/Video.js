import React, { Component } from "react";
import { render } from "react-dom";
import ReactPlayer from "react-player";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import "./video.css";
const array_name=[];
class video extends Component {
    constructor() {
        super();
        this.setState = {
            subtopic_name: "",
            topic_name: "",
            
        };
        
        
    }
    
    start() {
        
        
        // this.setState({mcq_options:question.options})



    }
    


    render() {
        return (
            <div className="video">
                
                <div className="row">
                    
                    <div className="col-md-2 borderright2">
                        
                        <h5><PlayCircleOutlineIcon />  Algebra   <ChevronRightIcon/></h5>
                        
                        <h5 style={{marginLeft:20}}>Algebric Expression</h5>
                    </div>
                    <div className="col-md-5 video_content">
                        <ReactPlayer width='1000px' height='400px' controls url='https://www.youtube.com/watch?v=X7LMvlboXW4' />
                        <div className="description">
                        <h4>About</h4>
                        <hr className="line"></hr>
                        <h5>What you will learn from this lesson</h5>
                        <p>You will learn the basic concepts of algebric expression.</p>
                        <br></br>
                        <h5>What is algebric expression?</h5>
                        <p>
                        An algebraic expression in mathematics is an expression which is made up of variables and constants, along with algebraic operations (addition, subtraction, etc.). Expressions are made up of terms. They are also termed algebraic equations.
                        To know more <a href={"https://en.wikipedia.org/wiki/Algebraic_expression"}>click here</a>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default video;
