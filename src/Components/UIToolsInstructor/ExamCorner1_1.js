import React from 'react';
import {Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './ExamCorner1_1.css'

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            examTile: '',
            difficulty_level: 'Difficulty Level',
            exam_type: 'Exam Type'
        }
        this.handleTextvalue = this.handleTextvalue.bind(this);
        this.handleDifficulty_level = this.handleDifficulty_level.bind(this);
        this.handleExam_type = this.handleExam_type.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleNext = this.handleClose.bind(this);
        
    }

    componentDidMount() {
        this.state.open = true;
        this.setState({open: true});
    }

    handleClickOpen = () => {
        this.state.open = true;
        this.setState({open: true});
    }

    handleClose = () => {
        this.state.open = false;
        this.setState({open: false});
    }

    handleNext = () => {
        console.log("text field: ", this.state.examTile);
        console.log("open: ", this.state.open);
        this.props.setNav("New Exam/Create Outline");
        this.setState({open: false});
      }
    
    handleTextvalue = (event) => {
        const { value } = event.target;
        // this.setState({examTile: value});
        this.state.examTile = value;
        console.log("exam title: ", this.state.examTile);
    }
    
    handleDifficulty_level = (e) => {
        // const { value } = event.target;
        this.setState({difficulty_level: e});
        this.state.difficulty_level = e;
        console.log("difficulty level: ", this.state.difficulty_level);
    }

    handleExam_type = (e) => {
        this.setState({exam_type: e});
        this.state.exam_type = e;;
        console.log("Exam type: ", this.state.exam_type);
    }
        

    render() {
        return (
            <div id="first2">
                {this.state.open == true?

                <div className="card signin_card2 border-dark" >
                    <div className="card-body">
                        <h3 className="card-title">Exam Settings</h3>
                        
                        <br></br>
                        <input id="title2" name="title" type="text" placeholder="Exam title" className="title" 
                            onChange={this.handleTextvalue}
                            style={{ minWidth: '80%', minHeight: '15%', alignItems: 'center'}}
                        /> 
                        <br></br><br></br>

                        {/* <p>Exam Type</p>
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
                        </select> */}

                        <DropdownButton
                            menuAlign="right"
                            title={this.state.exam_type}
                            id="dropdown-menu-align-left"
                            style={{ minWidth: '100vh', marginLeft: '-27vh'}}
                            onSelect={this.handleExam_type}
                            >
                            <Dropdown.Item eventKey="Regular Exam">Regular Exam</Dropdown.Item>
                            <Dropdown.Item eventKey="Problem of the Week">Problem of the Week</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton
                            menuAlign="right"
                            title={this.state.difficulty_level}
                            id="dropdown-menu-align-left"
                            style={{ minWidth: '100vh', marginLeft: '-27vh'}}
                            onSelect={this.handleDifficulty_level}
                            >
                            <Dropdown.Item eventKey="Level 1">Level 1</Dropdown.Item>
                            <Dropdown.Item eventKey="Level 2">Level 2</Dropdown.Item>
                            <Dropdown.Item eventKey="Level 3">Level 3</Dropdown.Item>
                            <Dropdown.Item eventKey="Level 4">Level 4</Dropdown.Item>
                            <Dropdown.Item eventKey="Level 5">Level 5</Dropdown.Item>
                        </DropdownButton>



                        <br></br>
                       
                        {/* <Link to="/createExam" className="btn btn-primary " onClick={this.handleNext}>Next</Link> */}
                        <Button variant="primary" size="sm" style={{ marginTop: 10, maxWidth: '5em', maxHeight: '3em' }}
                            onClick={this.handleClose}
                            >
                            Save
                        </Button>
                        <br></br> 

                    </div>
                </div>    
                
                :

                <div></div>
            }
            </div>
        );
    }
}

export default popup;