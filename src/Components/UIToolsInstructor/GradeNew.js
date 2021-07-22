import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import Typography from '@material-ui/core/Typography';
import Textfield from "../UIToolsInstructor/textField";

import Image from 'react-bootstrap/Image'

import ans1 from "../../Resources/ImagesInstructor/ans1.jpg";
import ans2 from "../../Resources/ImagesInstructor/ans2.png";
import ans3 from "../../Resources/ImagesInstructor/ans3.jpg";


class gradeNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        // unchecked: ["Answer Paper 1","Answer Paper 2","Answer Paper 3","Answer Paper 4","Answer Paper 5"],
        // answer_title: ["Answer No 1","Answer No 2","Answer No 3","Answer No 4","Answer No 5"],
        unchecked: [],
        answer_title: [],
        rubriks_1: [{title: "Formula is correct.",
                     marks: 1},
                     {title: "figure is correct",
                     marks: 2.5},
                     {title: "Answer is correct.",
                     marks: 1},
                     {title: "Calculation is shown.",
                     marks: 5.5}],
        grading_one: false,
        // answer_papers: [
        //     {
        //     ans_image: ans1,
        //     rubriks: [{title: "Formula is correct.",
        //             marks: 1},
        //             {title: "figure is correct",
        //             marks: 2.5},
        //             {title: "Answer is correct.",
        //             marks: 1},
        //             {title: "Calculation is shown.",
        //             marks: 5.5}],
        //     total_marks: ''
        //     },
        //     {
        //         ans_image: ans2,
        //         rubriks: [{title: "Formula is correct.",
        //                 marks: 3},
        //                 {title: "Answer is correct.",
        //                 marks: 3},
        //                 {title: "Calculation is shown.",
        //                 marks: 4}],
        //         total_marks: ''
        //     },
        //     {
        //         ans_image: ans3,
        //         rubriks: [{title: "Formula is correct.",
        //                 marks: 2},
        //                 {title: "Calculation is shown.",
        //                 marks: 5.5},
        //                 {title: "Answer is correct.",
        //                 marks: 1}],
        //         total_marks: ''
        //     }
        // ],
        answer_papers: [],
        question_paper: null,
        current_ans: 0,
        show_ques: false
        } 
        // this.updatedList = this.updatedList.bind(this);
        this.gradeNow = this.gradeNow.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.prevQuestion = this.prevQuestion.bind(this);
        this.saveGrades = this.saveGrades.bind(this);
        this.discardGrades = this.discardGrades.bind(this);

        this.setUnchecked =this.setUnchecked.bind(this);

        this.showQues = this.showQues.bind(this);
        this.hideQues = this.hideQues.bind(this);
        this.handleRubrik = this.handleRubrik.bind(this);
    }

    // const list = props.menuitems;
    
    // updatedList = this.state.unchecked.map((listItems)=>{
    //     return <li>{listItems}</li>;
    // });

    setUnchecked = (e) => {
        for(var i=0; i<e.length; i++) {
            this.state.answer_papers.push(e[i]);
            // this.setState([...this.state.unchecked, { answer_id: "" }]);

            const list = [...this.state.unchecked];
            list.push({ answer_id: "" });
            list[list.length-1]["answer_id"] = e[i].answer_id;

            this.setState({unchecked: list});
        }
        // this.setState({ unchecked: res.data })
        // this.state.unchecked = res.data
        console.log("answer_papers array --> ", this.state.answer_papers);
        console.log("unchecked array --> ", this.state.unchecked);




        this.state.unchecked.map((listItems)=>{
            console.log("item --> ", listItems)
        }
        )
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/answerPapers`)
        .then(res => {
            console.log(res);
            console.log("answer_papers array --> ", res.data.length);
            this.setUnchecked(res.data)
        });

        this.setState({question_paper: null})
        // .then(res => {
        //     this.setState({answer_papers: []});
        //     this.state.answer_papers = [];
        // })

    }

    handleRubrik = () => {
        console.log("I am handle rubrik")
    }

    gradeNow = (question_id) => {
        this.setState({grading_one: true});
        this.state.grading_one = true;

        console.log("grade now clicked!");
        console.log("question_id --> ", question_id);
        // load the question paper of the current answer
        // const question_id = this.state.answer_papers[this.state.current_ans].question_id;
        // = ques_id;
        // this.state.answer_papers[this.state.current_ans].question_id;
        axios.get(`http://localhost:5000/loadQues/`+ question_id)
            .then(res => {
                console.log("Loaded question for an answer");
                console.log(res.data);
                
                this.setState({question_paper: res.data})
            })
            .catch((error) => {
                console.log(error);
                this.setState({question_paper: null})
            });
    }

    nextQuestion = () => {
        const new_current_ans = (this.state.current_ans+1);
        this.setState({current_ans: new_current_ans});
        this.state.current_ans = new_current_ans;

        // load the question paper of the current answer
        const question_id = this.state.answer_papers[this.state.current_ans].question_id;
        axios.get(`http://localhost:5000/loadQues/`+ question_id)
            .then(res => {
                console.log("Loaded question for an answer");
                console.log(res.data);
                
                this.setState({question_paper: res.data})
                this.state.question_paper = res.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    prevQuestion = () => {
        const new_current_ans = (this.state.current_ans-1);
        this.setState({current_ans: new_current_ans});
        this.state.current_ans = new_current_ans;

        // load the question paper of the current answer
        const question_id = this.state.answer_papers[this.state.current_ans].question_id;
        axios.get(`http://localhost:5000/loadQues/`+ question_id)
            .then(res => {
                console.log("Loaded question for an answer");
                console.log(res.data);
                
                this.setState({question_paper: res.data})
                this.state.question_paper = res.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    showQues = () => {
        this.setState({show_ques: true});
        this.state.show_ques = true;
    }

    hideQues = () => {
        this.setState({show_ques: false});
        this.state.show_ques = false;
    }

    saveGrades = () => {
        this.setState({grading_one: false});
        this.setState({current_ans: 0});
        this.state.grading_one = false;

        // save grading
    }

    discardGrades = () => {
        this.setState({grading_one: false});
        this.setState({current_ans: 0});
        this.state.grading_one = false;
        // don't save any changes
    }
        
    render() {
        return (
            <div>
                {!this.state.grading_one?
                    <div>
    
                    <ul>{  this.state.answer_papers != null &&
                    this.state.answer_papers.map((listItems)=>{
                        return (
                            <div>
                                    {
                                        listItems.answer_status == 0 && 
                                        <div>
                                            <li>Answer Paper ID: {listItems.answer_id}</li>

                                            <Button variant="primary" size="sm" style={{ marginTop: 10, maxWidth: '8em', maxHeight: '3em' }}
                                                onClick={ () => {
                                                    this.gradeNow(listItems.question_id)
                                                }}
                                                >
                                                Grade Now
                                            </Button>
                                        </div>
                                    }
                                    
                            </div>
                        );
                    })
                    }</ul>
                    </div>

                    :

                    <div>
                        {/* border="warning" */}
                        <Card style={{ minWidth: '60%',  marginLeft: '20%'}}>
                            <Card.Header>
                                
                                {!this.state.show_ques &&
                                    <Button variant="primary" size="sm" style={{ marginTop: 10, maxWidth: '8em', maxHeight: '3em' }}
                                        onClick={this.showQues}
                                    >
                                        Show Question
                                    </Button>
                                }
                                
                                {this.state.show_ques &&
                                    <Button variant="primary" size="sm" style={{ marginTop: 10, maxWidth: '8em', maxHeight: '3em' }}
                                        onClick={this.hideQues}
                                    >
                                        Hide Question
                                    </Button>
                                }
                                
                            
                            </Card.Header>
                            <Card.Body>
                            {/* <Card.Text>  */}
                                {
                                    this.state.show_ques &&
                                    <div>
                                        <Typography>
                                            Exam Title: {this.state.question_paper.exam_title}
                                        </Typography>
                                        <Typography>
                                            Exam Type: {this.state.question_paper.exam_type}
                                        </Typography>
                                        <Typography>
                                            Difficulty Level: {this.state.question_paper.exam_level}
                                        </Typography>
                                        <br></br>
                                        <Typography>
                                            Question Text: <br></br>{this.state.question_paper.ques_text}
                                        </Typography>
                                        <Typography>
                                            Question Figure: <br></br>{this.state.question_paper.figure_ques}
                                        </Typography>
                                        <br></br>
                                        <Typography>
                                            Answer Text: <br></br>{this.state.question_paper.ans_text}
                                        </Typography>
                                        <Typography>
                                            Answer Figure: <br></br>{this.state.question_paper.figure_ans}
                                        </Typography>
                                        
                                    </div>
                                }

                            </Card.Body>
                            <h4>Student's submitted answer is below.</h4>
                            {/* <Image src={this.state.answer_papers[this.state.current_ans].ans_image} fluid /> */}
                            <Card.Img variant="bottom" style={{width: '80%', height: '80%', marginLeft: '10%', marginBottom: '1%'}}
                            src={'http://localhost:5000/' + this.state.answer_papers[this.state.current_ans].answer} />
                        </Card>
                        <br />



                        {(this.state.question_paper != null) &&

                            <ul>{  
                                this.state.question_paper.rubrik.map((listItems)=>{
                                    return (
                                        <div>
                                            <br /><br />
                                            <li>
                                                <p>
                                                    Breakpoint: {listItems.breakpoint}
                                                    <br />
                                                    Marks: {listItems.marks}
                                                </p>
                                            </li>

                                            <label >
                                            Enter Marks: 
                                                <input type="text" name="marks" style={{ marginLeft: "3%", maxWidth: "15%"}} 
                                                onChange={() => 
                                                {this.handleRubrik()}}
                                                />
                                            </label>
                                            {/* <Textfield label = "Enter Marks" setText={this.handleRubrik} type='text'/> */}
                                        </div>
                                    );
                                })
                            }
                            </ul>
                                                
                    }




                        {/* {this.state.current_ans > 0 ? 
                            <Button variant="primary" size="sm" style={{ marginTop: 10, maxWidth: '8em', maxHeight: '3em' }}
                                onClick={this.prevQuestion}
                                >
                                Prev Answer
                            </Button>
                        :
                            <div></div>
                        }

                        {this.state.current_ans < (this.state.answer_papers.length-1) ? 
                            <Button variant="primary" size="sm" style={{ marginTop: 10, marginLeft: 10, maxWidth: '8em', maxHeight: '3em' }}
                                onClick={this.nextQuestion}
                                >
                                Next Answer
                            </Button>
                        :
                            <div></div>
                        } */}

                        {/* <br /><br /> */}

                        <Button variant="primary" size="sm" style={{ marginTop: 25, maxWidth: '10em', maxHeight: '3em' }}
                            onClick={this.saveGrades}
                            >
                            Save Grades
                        </Button>

                        <Button variant="primary" size="sm" style={{ marginTop: 25, maxWidth: '10em', maxHeight: '3em', marginLeft: '2em' }}
                            onClick={this.discardGrades}
                            >
                            Discard Changes
                        </Button>
                    </div>
                }
  
            </div>
        );
    }
}

export default gradeNew;