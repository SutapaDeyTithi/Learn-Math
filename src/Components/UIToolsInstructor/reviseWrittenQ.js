import React from 'react';
import {Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './ExamCorner1_1.css'

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ImageUp from "./imageUploadGeeks";
import Textfield from "./textField";
// import 'react-dropdown/style.css';

class popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            examTile: '',
            difficulty_level: 'Difficulty Level',
            exam_type: 'Exam Type',
            empty: false,
            inputList: [],

            question: null
        }
        this.handleTextvalue = this.handleTextvalue.bind(this);
        this.handleDifficulty_level = this.handleDifficulty_level.bind(this);
        this.handleExam_type = this.handleExam_type.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleNext = this.handleClose.bind(this);
        
        this.handleRubrikChange = this.handleRubrikChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.state.open = true;
        this.setState({open: true});

        this.setState({question: this.props.ques});
        this.state.question = this.props.ques;
        console.log("revising ---> ", this.props.ques.rubrik)
    }

    handleClickOpen = () => {
        this.state.open = true;
        this.setState({open: true});
    }

    handleClose = () => {
        if(this.state.examTile == "" || (this.state.exam_type == "" || this.state.exam_type == "Exam Type") 
        || (this.state.difficulty_level == "" || this.state.difficulty_level == "Difficulty Level"))
        {
            this.setState({empty: true});
            this.state.empty = true;
        }
        else {
            this.setState({empty: false});
            this.state.empty = false;

            this.state.open = false;
            this.setState({open: false});
            this.props.popup(false);
        }
        
    }

    handleNext = () => {
        // console.log("text field: ", this.state.examTile);
        // console.log("open: ", this.state.open);
        // this.props.setNav("New Exam/Create Outline");
        this.setState({open: false});
      }
    
    handleTextvalue = (event) => {
        const { value } = event.target;
        this.setState({examTile: value});
        this.state.examTile = value;
        // console.log("exam title: ", this.state.examTile);

        // this.props.setTitle(value);

        this.setState({empty: false});
        this.state.empty = false;
    }
    
    handleDifficulty_level = (e) => {
        // const { value } = event.target;
        this.setState({difficulty_level: e});
        this.state.difficulty_level = e;
        // console.log("difficulty level: ", this.state.difficulty_level);

        // this.props.setLevel(e);

        this.setState({empty: false});
        this.state.empty = false;
    }

    handleExam_type = (e) => {
        this.setState({exam_type: e});
        this.state.exam_type = e;;
        // console.log("Exam type: ", this.state.exam_type);

        // this.props.setType(e);

        this.setState({empty: false});
        this.state.empty = false;
    }

      // handle input change
   handleRubrikChange = (e, index, type, quesNo) => {
  
    console.log("rubrik list --> ", e);
  };

  handleInputChange = (e) => {
    console.log("modified --> ", e);
  }
        

    render() {
        return (
            <div style={{ marginTop: '10%', alignContent: 'center'}}>
                {this.state.open == true ?
                // <div>
                    <div  className="btn-box" style={{ marginTop: 10 }}>
                        <h3 className="card-title">Revise Content</h3>
                        
                        <br></br>
                        <input  name="title" type="text" placeholder="Exam title" 
                            onChange={this.handleTextvalue}
                            style={{ minWidth: '50%', minHeight: '15%', alignItems: 'center'}}
                        /> 
                        <br></br><br></br>


                        <DropdownButton
                            // menuAlign="left"
                            title={this.state.exam_type}
                            id="dropdown-menu"
                            style={{ minWidth: '100vh', 
                            // marginLeft: '-27vh'
                        }}
                            onSelect={this.handleExam_type}
                            >
                            <Dropdown.Item eventKey="Regular Exam">Regular Exam</Dropdown.Item>
                            <Dropdown.Item eventKey="Problem of the Week">Problem of the Week</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton
                            // menuAlign="left"
                            title={this.state.difficulty_level}
                            id="dropdown-menu"
                            style={{ minWidth: '100vh', 
                            // marginLeft: '-27vh'
                        }}
                            onSelect={this.handleDifficulty_level}
                            >
                            <Dropdown.Item eventKey="Level 1">Level 1</Dropdown.Item>
                            <Dropdown.Item eventKey="Level 2">Level 2</Dropdown.Item>
                            <Dropdown.Item eventKey="Level 3">Level 3</Dropdown.Item>
                            <Dropdown.Item eventKey="Level 4">Level 4</Dropdown.Item>
                            <Dropdown.Item eventKey="Level 5">Level 5</Dropdown.Item>
                        </DropdownButton>

                        {
                        this.state.question != null && 
                        //  className="btn-box" style={{ marginTop: 10 }}
                            <div  className="box" style={{ marginTop: 10, marginLeft: "30%" }}>

                                <br></br>
                                <Textfield label="Enter Question Text" 
                                value={this.state.question.ques_text}
                                setWrittenQues={handleInputChange} 
                                type='WrittenQues_revised' fieldType='question'/>
                                <ImageUp />
                                <br/>
                                
                                <Textfield label="Enter Answer Text"  
                                value={this.state.question.ans_text}
                                setWrittenQues={handleInputChange} 
                                type='WrittenQues_revised' fieldType='answer'/>
                                <ImageUp />
                                {/* https://www.geeksforgeeks.org/file-uploading-in-react-js/ */}


                            {/* <div> */}

                                        {this.state.question.rubrik.map((x, i) => {
                                            return (
                                            <form>

                                                <label >
                                                {/* {console.log("rubrik x -> ", x)} */}
                                                <Textfield label="Enter Rubrik Breakpoint" 
                                                value={x.breakpoint}
                                                rubrikNo={i} 
                                                setRubrik={this.handleRubrikChange} 
                                                type='rubrik' fieldType='breakpoint' quesNo={0}
                                                />
                                                </label>

                                                <label >
                                                <Textfield label="Enter Marks" 
                                                value={x.marks}
                                                rubrikNo={i} setRubrik={this.handleRubrikChange} type='rubrik' fieldType='marks' quesNo={0}
                                                />
                                                </label>


                                                {this.state.question.rubrik.length !== 1 &&
                                                    <Button variant="primary" size="sm" 
                                                    style={{ 
                                                    marginTop: 10, maxWidth: '5em', maxHeight: '3em', 
                                                    marginLeft: "50%" 
                                                    }}
                                                    //   onClick={() => handleRemoveClick_rubrik(x.index)}
                                                    >
                                                        Remove
                                                    </Button>
                                                }



                                                {this.state.question.rubrik.length - 1 === i &&
                                                    <Button variant="primary" size="sm" 
                                                        // onClick={handleAddClick_rubrik} 
                                                        style={{ 
                                                        marginTop: 10, maxWidth: '5em', maxHeight: '3em', 
                                                        marginLeft: "50%" }}>
                                                        Add
                                                    </Button>
                                                }
                                            
                                            </form>
                                        );
                                        })}

            	            </div>
                        }

                {
                    this.state.empty == true &&
                    <div>
                        <h7 style={{color: 'red', marginTop: 20}}> Empty field. Cannot save. </h7>
                        <br/>
                    </div>
                }

                <Button variant="primary" size="sm" style={{ marginTop: 15, maxWidth: '5em', maxHeight: '3em' }}
                    onClick={this.handleClose}
                    >
                    Save
                </Button>

            </div>                             
                
                :

                <div></div>
            }
            
        </div>

        );
    }
}

export default popup;