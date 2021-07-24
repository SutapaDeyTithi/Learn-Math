import React from 'react';
import {Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './ExamCorner1_1.css';
import axios from "axios";

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

            question: null,
            numeric: true
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleNext = this.handleClose.bind(this);
        
        this.handleRubrikChange = this.handleRubrikChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        
        this.setEmpty = this.setEmpty.bind(this);
        this.clearEmpty = this.clearEmpty.bind(this);
        this.setNumeric = this.setNumeric.bind(this);
    }

    componentDidMount() {
        this.state.open = true;
        this.setState({open: true});

        this.setState({question: this.props.ques});
        this.state.question = this.props.ques;
        console.log("revising ---> ", this.props.ques.rubrik)
    }

    setEmpty = () => {
        this.setState({empty: true});
        this.state.empty = true;
    }

    clearEmpty = () => {
        this.setState({empty: false});
        this.state.empty = false;
    }

    setNumeric = (value) => {
        this.setState({numeric: value});
        this.state.numeric = value;
    }

    handleClickOpen = () => {
        this.state.open = true;
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({
            open: true,
            examTile: '',
            difficulty_level: 'Difficulty Level',
            exam_type: 'Exam Type',
            empty: false,
            inputList: [],

            question: null,
            numeric: true
        })
        // this.props.popup(false);
        // this.componentDidMount();
        this.state.question = null;
        this.props.closeRevise();
    }

    handleNext = () => {
        // console.log("text field: ", this.state.examTile);
        // console.log("open: ", this.state.open);
        // this.props.setNav("New Exam/Create Outline");
        this.setState({open: false});
      }
    

      // handle input change
   handleRubrikChange = (e, index, type, quesNo) => {
    this.clearEmpty();
    this.setNumeric(true);
  
    console.log("rubrik list --> ", e);
    if(type == "breakpoint") {
        this.state.question.rubrik[index].breakpoint = e;
    }
    else if(type == "marks") {
        this.state.question.rubrik[index].marks = e;
    }
    
    this.setState({question: this.state.question});
  };

  handleInputChange = (e, type) => {
    this.clearEmpty();

    console.log("modified text --> ", e);
    console.log("type --> ", type);
    if(type == "question") {
        this.state.question.ques_text = e;
    }
    
    if(type == "answer") {
        this.state.question.ans_text = e;
    }
    
    this.setState({question: this.state.question});
  }

  handleAddClick_rubrik = () => {
    this.state.question.rubrik.push({ breakpoint: "", marks: "", index: ""});
    this.setState({question: this.state.question});
  };

  handleRemoveClick_rubrik = index => {
    this.state.question.rubrik.splice(index, 1);
    this.setState({question: this.state.question});
  };

  submitQuesPaper = () => {
    console.log("submitting revised ques --> ");
    var isEmpty = false;
  
    if(this.state.question.ques_text == "" || this.state.question.ans_text == "") {
        this.setEmpty();
        isEmpty = true;
    }
    const re = /^[0-9\b]+$/;
    if(!isEmpty) {
        for(var i = 0; i<this.state.question.rubrik.length; i++) {
            if(this.state.question.rubrik[i].breakpoint == "" || this.state.question.rubrik[i].marks == "") {
                this.setEmpty();
                isEmpty = true;
                break;
            }
            else {
                if(re.test(this.state.question.rubrik[i].marks) == false) {
                    this.setNumeric(false);
                    isEmpty = true;
                    break;
                }
            }
        }
    }


    if(!isEmpty) {
        axios.post(`http://localhost:5000/uploadRevisedQues`, this.state.question)
        .then(res => {
            console.log(res);
            console.log(res.data);

            
            // Question = this.state.exam_paper;
            // console.log("Question cleared? ", Question);
            this.handleClose();
        })
        .then(res => {
            this.setState({question: null});
            this.state.question = null;
        })
    }


  }
        

    render() {
        return (
            <div style={{ marginTop: '10%', alignContent: 'center'}}>
                {this.state.open == true ?
                // <div>
                    <div  className="btn-box" style={{ marginTop: 10 }}>
                        <h4 className="card-title">Revise Content</h4>

                        {
                        this.state.question != null && 
                        //  className="btn-box" style={{ marginTop: 10 }}
                            <div  className="box" style={{ marginTop: 10, marginLeft: "30%" }}>

                                <br></br>
                                <Textfield label="Enter Question Text" 
                                value={this.state.question.ques_text}
                                setWrittenQues={this.handleInputChange} 
                                type='WrittenQues_revised' fieldType='question'/>
                                <ImageUp />
                                <br/>
                                
                                <Textfield label="Enter Answer Text"  
                                value={this.state.question.ans_text}
                                setWrittenQues={this.handleInputChange} 
                                type='WrittenQues_revised' fieldType='answer'/>
                                <ImageUp />
                                {/* https://www.geeksforgeeks.org/file-uploading-in-react-js/ */}


                                <h4 style={{ marginTop: '15%' }}> 
                                    Rubrik Settings
                                </h4>

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
                                                      onClick={() => this.handleRemoveClick_rubrik(x.index)}
                                                    >
                                                        Remove
                                                    </Button>
                                                }



                                                {this.state.question.rubrik.length - 1 === i &&
                                                    <Button variant="primary" size="sm" 
                                                        onClick={this.handleAddClick_rubrik} 
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

                        <br></br><br></br>

                {
                    this.state.empty == true &&
                    <div>
                        <h7 style={{color: 'red', marginTop: 20}}> Empty field. Cannot save. </h7>
                        <br/>
                    </div>
                }

                {
                    this.state.numeric == false &&
                    <div>
                        <h7 style={{color: 'red', marginTop: 20}}> Marks must be numeric. Cannot save. </h7>
                        <br/>
                    </div>
                }

                <Button variant="primary" size="lg" style={{ marginTop: 15, maxWidth: '7em', maxHeight: '5em', marginLeft: '10%' }}
                    onClick={this.submitQuesPaper}
                    >
                    Submit
                </Button>

        

                <Button variant="primary" size="lg" style={{ marginTop: 15, maxWidth: '7em', maxHeight: '5em', marginLeft: '3em' }}
                    onClick={this.handleClose}
                    >
                    Discard
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