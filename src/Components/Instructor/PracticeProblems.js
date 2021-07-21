import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Radio, RadioGroup} from 'react-radio-group';
import axios from "axios";

import Textfield from "../UIToolsInstructor/textField";
import Imageup from "../UIToolsInstructor/imageUploadGeeks";


class PracticeProblem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            create_new_ques: false,
            topic: "Topic",
            subtopic: "Subtopic",
            category: "Category",
            Ques_type: "Question Type",
            ques_text: '',
            ques_text2: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            correct_option: '',
            is_true: '0',
            explanation: '',
            difficulty_level: "Difficulty Level",

            category_array: [],
            topic_array: [],
            subtopic_array: [],

            ques_figure: null,
            ans_figure: null,
            exp_figure: null
        }
        this.createNewQues = this.createNewQues.bind(this);
        this.saveQues = this.saveQues.bind(this);

        this.handleTopic = this.handleTopic.bind(this);
        this.handleSubtopic = this.handleSubtopic.bind(this);
        this.handleCategory = this.handleCategory.bind(this);

        this.handleQuesType = this.handleQuesType.bind(this);
        this.handleQuesText = this.handleQuesText.bind(this);
        this.handleQuesText2 = this.handleQuesText2.bind(this);
        this.handleMCQOptions_correct = this.handleMCQOptions_correct.bind(this);

        this.setoption1 = this.setoption1.bind(this);
        this.setoption2 = this.setoption2.bind(this);
        this.setoption3 = this.setoption3.bind(this);
        this.setoption4 = this.setoption4.bind(this);

        this.handleTrueFalse = this.handleTrueFalse.bind(this);

        this.handleExplanation = this.handleExplanation.bind(this);
        this.handleDifficulty = this.handleDifficulty.bind(this);

        this.handleQues_figure = this.handleQues_figure.bind(this);
        this.handleAns_figure = this.handleAns_figure.bind(this);
        this.handleExp_figure = this.handleExp_figure.bind(this);

    }

    componentDidMount() {
        fetch("http://localhost:5000/topic")
            .then(res => res.json())
            .then(json => this.setState({ topic_array: json }));
        console.log("topic array --> ", this.state.topic_array);
    }

    /// image add
    handleQues_figure = (image) => {
        this.setState({ques_figure: image});
        this.state.ques_figure = image;
        console.log("Ques Figure --> ", this.state.ques_figure);

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        axios.post(`http://localhost:5000/uploadImage2`, image, config)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    handleAns_figure = (image) => {
        this.setState({ans_figure: image});
        this.state.ans_figure = image;
        console.log("Ans Figure --> ", this.state.ans_figure);
    }

    handleExp_figure = (image) => {
        this.setState({exp_figure: image});
        this.state.exp_figure = image;
        console.log("Explanation Figure --> ", this.state.exp_figure);
    }

    

    createNewQues = () => {
        if(this.state.topic != 'Topic'
            && this.state.subtopic != 'Subtopic'
            && this.state.category != 'Category'
            && this.state.difficulty_level != 'Difficulty Level'
            && this.state.Ques_type != 'Question Type') {
            this.setState({create_new_ques: true});
            this.state.create_new_ques = true;
        }


        // APATOTO, FOR EASE
        // this.setState({create_new_ques: true});
        //     this.state.create_new_ques = true;
    }

    saveQues = () => {
        console.log("Saving Question..");
        var Question = null;
        if(this.state.Ques_type == 'MCQ' && this.state.ques_text != '') {
            var ques = {
                ques_type: this.state.Ques_type,
                ques_text: this.state.ques_text,
                option1: this.state.option1, 
                option2: this.state.option2,
                option3: this.state.option3,
                option4: this.state.option4,
                ans_text: this.state.correct_option,
                explanation: this.state.explanation,
                topic: this.state.topic,
                subtopic: this.state.subtopic,
                category: this.state.category,
                difficulty_level: this.state.difficulty_level,
                // ques_figure: this.state.ques_figure
            }
            Question = ques; 
        }
        else if(this.state.Ques_type == 'Matching' && this.state.ques_text != '' && this.state.ques_text2 != '') {
            var ques = {
                ques_type: this.state.Ques_type,
                ques_text1: this.state.ques_text,
                ques_text2: this.state.ques_text2,
                explanation: this.state.explanation,
                topic: this.state.topic,
                subtopic: this.state.subtopic,
                category: this.state.category,
                difficulty_level: this.state.difficulty_level,
                // ques_figure: this.state.ques_figure
            }
            Question = ques;
        }
        else if(this.state.Ques_type == 'True/False' && this.state.ques_text != '') {
            var ques = {
                ques_type: this.state.Ques_type,
                ques_text: this.state.ques_text,
                is_true: this.state.is_true,
                explanation: this.state.explanation,
                topic: this.state.topic,
                subtopic: this.state.subtopic,
                category: this.state.category,
                difficulty_level: this.state.difficulty_level,
                // ques_figure: this.state.ques_figure
            }
            Question = ques;
        }
        console.log(Question);
        if(ques != null) {
            axios.post(`http://localhost:5000/uploadQues`, { Question })
            .then(res => {
                console.log(res);
                console.log(res.data);
                Question = [];
                console.log("Question cleared? ", Question);
            })
        }

        


        this.setState({create_new_ques: false});
        this.state.create_new_ques = false;
        this.setState({topic: "Topic"});
        this.state.topic = "Topic";
        this.setState({subtopic: "Subtopic"});
        this.state.subtopic = "Subtopic";
        this.setState({category: "Category"});
        this.state.category = "Category";
        this.setState({difficulty_level: "Difficulty Level"});
        this.state.difficulty_level = "Difficulty Level";
        this.setState({Ques_type: "Question Type"});
        this.state.Ques_type = "Question Type";
    }

    handleTopic = (e) => {
        this.setState({topic: e});
        this.state.topic = e;
        console.log("topic --> ", this.state.topic);
        const topicName = this.state.topic;

        if(topicName != 'Topic' && topicName != "") {
            axios.get(`http://localhost:5000/subtopics_instructor`,  { params: { topic_name: topicName } })
            .then(res => {
                console.log(res.data);
                this.setState({subtopic_array: res.data});
                this.state.subtopic_array = res.data;
                if(res.data == 0) {
                    this.setState({subtopic: "Subtopic"});
                    this.state.subtopic = "Subtopic";
                }
            })
        }
    }

    handleSubtopic = (e) => {
        this.setState({subtopic: e});
        this.state.subtopic = e;
        console.log("subtopic --> ", this.state.subtopic);

        const subtopicName = this.state.subtopic;
        if(subtopicName != 'Subtopic' && subtopicName != "") {
            axios.get(`http://localhost:5000/category_instructor`,  { params: { subtopic_name: subtopicName } })
            .then(res => {
                console.log(res.data);
                this.setState({category_array: res.data});
                this.state.category_array = res.data;
                if(res.data == 0) {
                    this.setState({category: "Category"});
                    this.state.category = "Category";
                }
            })
        }
    }

    handleCategory = (e) => {
        this.setState({category: e});
        this.state.category = e;
        console.log("category --> ", this.state.category);
    }

    handleQuesType = (e) => {
        this.setState({Ques_type: e});
        this.state.Ques_type = e;
        console.log("ques type --> ", this.state.Ques_type);
    }

    handleDifficulty = (e) => {
        this.setState({difficulty_level: e});
        this.state.difficulty_level = e;
        console.log("difficulty level --> ", this.state.difficulty_level);
    }

    handleQuesText = (e) => {
        this.setState({ques_text: e});
        this.state.ques_text = e;
        console.log("Question text --> ", this.state.ques_text);
    }

    handleQuesText2 = (e) => {
        this.setState({ques_text2: e});
        this.state.ques_text2 = e;
        console.log("Question text 2 --> ", this.state.ques_text2);
    }

    handleMCQOptions_correct = (e) => {
      //  console.log("corrent ans: e --> ", e);
        this.setState({correct_option: e});
        this.state.correct_option = e;
        console.log("correct ans --> ", this.state.correct_option);
    }

    setoption1 = (e) => {
        this.setState({option1: e});
        this.state.option1 = e;
        console.log("option1 --> ", this.state.option1);
    }

    setoption2 = (e) => {
        this.setState({option2: e});
        this.state.option2 = e;
        console.log("option2 --> ", this.state.option2);
    }

    setoption3 = (e) => {
        this.setState({option3: e});
        this.state.option3 = e;
        console.log("option3 --> ", this.state.option3);
    }

    setoption4 = (e) => {
        this.setState({option4: e});
        this.state.option4 = e;
        console.log("option4 --> ", this.state.option4);
    }

    handleTrueFalse = (e) => {
        this.setState({is_true: e});
        this.state.is_true = e;
        console.log("True Or False --> ", this.state.is_true);
    }

    handleExplanation = (e) => {
        this.setState({explanation: e});
        this.state.explanation = e;
        console.log("Explanation --> ", this.state.explanation);
    }

    render() {
        // console.log("Creating short practice questions!")
        // console.log("button create new ques: ", this.state.create_new_ques);
        

        return (
            <div>
                {this.state.create_new_ques==false?
                <div>

                    <DropdownButton
                        menuAlign="right"
                        title={this.state.topic}
                        id="dropdown-menu-align-right"
                        style={{ marginLeft: '38%', marginTop: '10%', maxHeight: '3em'}}
                        onSelect={this.handleTopic}
                        >
                        
                        {this.state.topic_array.map((topics) => (
                            <Dropdown.Item eventKey={topics.topic_name}>{topics.topic_name}</Dropdown.Item>
                        ))}

                    </DropdownButton>

                    <DropdownButton
                        menuAlign="right"
                        title={this.state.subtopic}
                        id="dropdown-menu-align-right"
                        style={{ marginLeft: '38%', marginTop: '2%', maxHeight: '3em'}}
                        onSelect={this.handleSubtopic}
                        >
                        
                        {this.state.subtopic_array.map((subtopic_name) => (
                            <Dropdown.Item eventKey={subtopic_name}>{subtopic_name}</Dropdown.Item>
                        ))}

                    </DropdownButton>

                    <DropdownButton
                        menuAlign="right"
                        title={this.state.category}
                        id="dropdown-menu-align-right"
                        style={{ marginLeft: '38%', marginTop: '2%', maxHeight: '3em'}}
                        onSelect={this.handleCategory}
                        >
                        
                        {this.state.category_array.map((category_name) => (
                            <Dropdown.Item eventKey={category_name}>{category_name}</Dropdown.Item>
                        ))}

                    </DropdownButton>

                    <DropdownButton
                        menuAlign="right"
                        title={this.state.Ques_type}
                        id="dropdown-menu-align-right"
                        style={{ marginLeft: '38%', marginTop: '2%', maxHeight: '3em'}}
                        onSelect={this.handleQuesType}
                        >
                        <Dropdown.Item eventKey="MCQ">MCQ</Dropdown.Item>
                        <Dropdown.Item eventKey="Matching">Matching</Dropdown.Item>
                        <Dropdown.Item eventKey="True/False">True/False</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton
                        menuAlign="right"
                        title={this.state.difficulty_level}
                        id="dropdown-menu-align-right"
                        style={{ marginLeft: '38%', marginTop: '2%', maxHeight: '3em'}}
                        onSelect={this.handleDifficulty}
                        >
                        <Dropdown.Item eventKey="1">1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">2</Dropdown.Item>
                        <Dropdown.Item eventKey="3">3</Dropdown.Item>
                        <Dropdown.Item eventKey="4">4</Dropdown.Item>
                        <Dropdown.Item eventKey="5">5</Dropdown.Item>
                        
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

                            <Textfield label = "Enter Question" setText = {this.handleQuesText} Ques_type='MCQ'/>
                            <Imageup setFigure={this.handleQues_figure}/>

                            <br></br><br></br>

                            <Textfield label = "Enter Option 1" setoption1={this.setoption1} Ques_type='MCQ'/>
                            <Textfield label = "Enter Option 2" setoption2={this.setoption2} Ques_type='MCQ'/>
                            <Textfield label = "Enter Option 3" setoption3={this.setoption3} Ques_type='MCQ'/>
                            <Textfield label = "Enter Option 4" setoption4={this.setoption4} Ques_type='MCQ'/>

                            

                            <label style={{ marginTop: "3%", marginLeft: "3%", maxWidth: "100%", minWidth: "100%"}}>
                                Choose the Correct Answer. 
                            </label>

                            <RadioGroup name="mcq_options" onChange={(e) => this.handleMCQOptions_correct(e)}
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
                            <Textfield label = "Enter Explanation" setText = {this.handleExplanation} type='text'/>
                            <Imageup setFigure={this.handleExp_figure}/>
                        </div>
                    :
                        <div>
                             {this.state.Ques_type == 'True/False'?
                                <div  style={{ marginLeft: '30%', marginTop: '8%' }}>
                                    <Textfield label = "Enter Statement" setText={this.handleQuesText} type='text'/>
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
                                    <Textfield label = "Enter Explanation" setText = {this.handleExplanation} type='text'/>
                                    <Imageup />

                                </div>
                             :
                                <div>

                                    {this.state.Ques_type == 'Matching'?
                                        <div  style={{ marginLeft: '30%', marginTop: '8%' }}>
                                            <Textfield label = "Enter Statement 1" setText={this.handleQuesText} type='text'/>
                                            <br></br>
                                            <Textfield label = "Enter Statement 2" setText={this.handleQuesText2} type='text'/>  
                                            <Imageup />    

                                            <br></br><br></br>
                                            <Textfield label = "Enter Explanation" setText = {this.handleExplanation} type='text'/>
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
