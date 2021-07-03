import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Radio, RadioGroup} from 'react-radio-group'

import Textfield from "../UIToolsInstructor/textField";
import Imageup from "../UIToolsInstructor/imageUploadGeeks";

class PracticeProblem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            create_new_ques: false,
            Ques_type: "Question Type",
            ques_text: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            correct_option: '',
            is_true: '0',
        }
        this.createNewQues = this.createNewQues.bind(this);
        this.saveQues = this.saveQues.bind(this);
        this.handleQuesType = this.handleQuesType.bind(this);
        this.handleMCQOptions = this.handleMCQOptions.bind(this);
        this.handleTrueFalse = this.handleTrueFalse.bind(this);
    }

    createNewQues = () => {
        this.setState({create_new_ques: true});
        this.state.create_new_ques = true;
    }

    saveQues = () => {
        this.setState({create_new_ques: false});
        this.state.create_new_ques = false;
    }

    handleQuesType = (e) => {
        console.log("ques: e --> ", e);
        this.setState({Ques_type: e});
        this.state.Ques_type = e;
        console.log("ques type --> ", this.state.Ques_type);
    }

    handleMCQOptions = (e) => {
      //  console.log("corrent ans: e --> ", e);
        this.setState({correct_option: e});
        this.state.correct_option = e;
        console.log("correct_option--> ", this.state.correct_option);
    }

    handleTrueFalse = (e) => {
        this.setState({is_true: e});
        this.state.is_true = e;
        console.log("True Or False --> ", this.state.is_true);
    }


    render() {
        console.log("Creating short practice questions!")
        console.log("button create new ques: ", this.state.create_new_ques);
        return (
            <div>
                {this.state.create_new_ques==false?
                <div>
                    <DropdownButton
                        menuAlign="right"
                        title={this.state.Ques_type}
                        id="dropdown-menu-align-right"
                        style={{ marginLeft: '38%', marginTop: '10%', maxHeight: '3em'}}
                        onSelect={this.handleQuesType}
                        >
                        <Dropdown.Item eventKey="MCQ">MCQ</Dropdown.Item>
                        <Dropdown.Item eventKey="Matching">Matching</Dropdown.Item>
                        <Dropdown.Item eventKey="True/False">True/False</Dropdown.Item>
                    </DropdownButton>

                    <Button variant="primary" size="sm" style={{ marginLeft: '39%', marginTop: '2%', maxWidth: '5em', maxHeight: '3em'}}
                        onClick={this.createNewQues}
                        >
                        Next
                    </Button>
                </div>
                :
                <div>
                    {this.state.Ques_type == 'MCQ'?
                        <div style={{ marginLeft: '30%', marginTop: '8%' }}>

                            <Textfield label = "Enter Question"/>
                            <Imageup />

                            <br></br><br></br>

                            <Textfield label = "Enter Option 1"/>
                            <Textfield label = "Enter Option 2"/>
                            <Textfield label = "Enter Option 3"/>
                            <Textfield label = "Enter Option 4"/>

                            

                            <label style={{ marginTop: "3%", marginLeft: "3%", maxWidth: "100%", minWidth: "100%"}}>
                                Choose the Correct Answer. 
                            </label>

                            <RadioGroup name="mcq_options" onChange={(e) => this.handleMCQOptions(e)}
                                    style={{ marginLeft: "3%"}}>

                                    <div className="radio-button-background">
                                        <Radio value={this.state.option1} className="radio-button" />
                                            {this.state.option1}
                                    </div>
                                    <div className="radio-button-background">
                                        <Radio value={this.state.option2} className="radio-button" />
                                            {this.state.option2}
                                    </div>
                                    <div className="radio-button-background">
                                        <Radio value={this.state.option3} className="radio-button" />
                                            {this.state.option3}
                                    </div>
                                    <div className="radio-button-background">
                                        <Radio value={this.state.option4} className="radio-button" />
                                            {this.state.option4}
                                    </div>

                            </RadioGroup>

                            <br></br><br></br>
                            <Textfield label = "Enter Explanation"/>
                            <Imageup />
                        </div>
                    :
                        <div>
                             {this.state.Ques_type == 'True/False'?
                                <div  style={{ marginLeft: '30%', marginTop: '8%' }}>
                                    <Textfield label = "Enter Statement"/>
                                    <Imageup />

                                    <br></br><br></br>

                                    <p>Choose True/False.</p>

                                    <RadioGroup name="tf_options" onChange={(e) => this.handleTrueFalse(e)}
                                        style={{ marginLeft: "3%"}}>

                                        <div className="radio-button-background">
                                            <Radio value="1" className="radio-button" />
                                                    True
                                        </div>
                                        <div className="radio-button-background">
                                            <Radio value="0" className="radio-button" />
                                                    False
                                        </div>
                                    </RadioGroup>

                                    <br></br><br></br>
                                    <Textfield label = "Enter Explanation"/>
                                    <Imageup />

                                </div>
                             :
                                <div>

                                    {this.state.Ques_type == 'Matching'?
                                        <div  style={{ marginLeft: '30%', marginTop: '8%' }}>
                                            <Textfield label = "Enter Statement 1"/>
                                            <br></br>
                                            <Textfield label = "Enter Statement 2"/>  
                                            <Imageup />    

                                            <br></br><br></br>
                                            <Textfield label = "Enter Explanation"/>
                                            <Imageup />                              
                                        </div>
                                    :
                                        <div>
                                            
                                        </div>
                                    }

                                </div>
                            }
                        </div>
                    }
                    <Button variant="primary" size="sm" style={{ marginLeft: '39%', marginTop: '2%', maxWidth: '12em', maxHeight: '3em'}}
                        onClick={this.saveQues}
                        >
                        Save Question
                    </Button>
                </div>
                }
            </div>
    );
    }
}

export default PracticeProblem;
