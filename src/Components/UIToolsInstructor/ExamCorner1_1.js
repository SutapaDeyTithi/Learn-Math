import React from 'react';
import {Link } from "react-router-dom";
import './ExamCorner1_1.css'

class popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            examTile: '',
            difficulty_level: 'select',
            exam_type: 'Regular Exam'
        }
        this.handleTextvalue = this.handleTextvalue.bind(this);
        this.handleDifficulty_level = this.handleDifficulty_level.bind(this);
        this.handleExam_type = this.handleExam_type.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleNext = this.handleClose.bind(this);
        
    }

    handleClickOpen = () => {
        this.state.open = true;
    }

    handleClose = () => {
        this.state.open = false;
    }

    handleNext = () => {
        console.log("text field: ", this.state.examTile);
        console.log("open: ", this.state.open);
      }
    
    handleTextvalue = (event) => {
        const { value } = event.target;
        // this.setState({examTile: value});
        this.state.examTile = value;
        console.log("exam title: ", this.state.examTile);
    }
    
    handleDifficulty_level = (event) => {
        const { value } = event.target;
        // this.setState({difficulty_level: value});
        this.state.difficulty_level = value;
        console.log("difficulty level: ", this.state.difficulty_level);
    }

    handleExam_type = (event) => {
        const { value } = event.target;
        // this.setState({exam_type: value});
        this.state.exam_type = event.target.value;;
        console.log("Exam type: ", this.state.exam_type);
    }
        

    render() {
        return (
            <div id="first">
                <div className="card signin_card border-dark" >
                    <div className="card-body">
                        <h3 className="card-title">Exam Settings</h3>
                        
                        <input id="title" name="title" type="text" placeholder="Exam title" className="title" onChange={this.handleTextvalue}/> 
                        <br></br><br></br>

                        <p>Exam Type</p>
                        <select id="exam_type" onChange={this.handleExam_type}>
                            <option value="Regular Exam">Regular Exam</option>
                            <option value="Problem of the Week">Problem of the Week</option>
                        </select>
                        <br></br><br></br>

                        <p>Difficulty Level</p>
                        <select id="diff_level" onChange={this.handleDifficulty_level} >
                            <option value="Level 1">Level 1</option>
                            <option value="Level 2">Level 2</option>
                            <option value="Level 3">Level 3</option>
                        </select>
                        <br></br><br></br>
                       
                        <Link to="/createExam" className="btn btn-primary " onClick={this.handleNext}>Next</Link>
                        <br></br> 
                        {/* <p style={{marginTop:10}}>Don't have an account??   <Link to="/register">Register</Link></p> */}
                        
                    {/* <input type="submit" id="submit" className="submit" onClick={this.handleLangChange}/>  */}
                                        
                    </div>
                </div>                             
            </div>
        );
    }
}

export default popup;