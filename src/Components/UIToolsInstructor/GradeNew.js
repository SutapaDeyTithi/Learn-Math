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
        user_id: '',
        unchecked: [],
        grading_one: false,
       
        answer_papers: [],
        question_paper: null,
        answer_paper: null,
        current_ans: 0,
        show_ques: false,
        nonnumber: false
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
        this.setState({user_id: this.props.user_id});
        this.state.user_id = this.props.user_id;
        console.log("user id --> ", this.state.user_id);

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

    handleRubrik = (marks, index) => {
        console.log("I am handle rubrik")
        this.setState({nonnumber: false});
        this.state.nonnumber = false;

        if(this.state.answer_paper != null) {
            if(this.state.answer_paper.rubrik != null) {
                for(var i=0; i<this.state.answer_paper.rubrik.length; i++) {
                    if(this.state.answer_paper.rubrik[i].index == index) {
                        this.state.answer_paper.rubrik[i].marks = marks;
                        console.log("rubrik index ", index, "-->", marks)
                        break;
                    }
                }
            }
        }
    }

    gradeNow = (item) => {
        this.setState({grading_one: true});
        this.state.grading_one = true;
        const question_id = item.question_id;


        this.setState({answer_paper: item});
        this.state.answer_paper = item;

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
                this.state.answer_paper.rubrik = res.data.rubrik.map(a => {return {...a}});
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
        // save grading
        if(this.state.answer_paper != null)
        {
            console.log("graded ans --> ", this.state.answer_paper);
            const re = /^[0-9\b]+$/;

            for(var i=0; i<this.state.answer_paper.rubrik.length; i++) {
                const marks = this.state.answer_paper.rubrik[i].marks;
                if(re.test(marks) == false || marks == '') {
                    this.setState({nonnumber: true});
                    this.state.nonnumber = true;
                    break;
                }
            }

            if(this.state.nonnumber == false) {
                axios.post(`http://localhost:5000/gradeAns/`+ this.state.user_id, this.state.answer_paper)
                .then(res => {
                    console.log("answer graded");
                    console.log(res.data);

                    this.setState({grading_one: false});
                    this.setState({current_ans: 0});
                    this.state.grading_one = false;

                    this.setState({
                        unchecked: [],
                        grading_one: false,
                       
                        answer_papers: [],
                        question_paper: null,
                        answer_paper: null,
                        current_ans: 0,
                        show_ques: false,
                        nonnumber: false
                        } );

                    this.componentDidMount();
                })
                .catch((error) => {
                    console.log(error);
                });
                }
        }
       
    }

    discardGrades = () => {
        this.setState({grading_one: false});
        this.setState({current_ans: 0});
        this.state.grading_one = false;

        this.setState({nonnumber: false});
        this.state.nonnumber = false;
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
                                                    this.gradeNow(listItems)
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

                    {(this.state.answer_papers == null || this.state.answer_papers.length == 0) &&
                        <h4 style={{ marginTop: '10%'}}>
                            You have no answers to grade.
                        </h4>
                    }
                    </div>

                    :

                    <div>
                        {/* border="warning" */}
                        <Card style={{ minWidth: '60%',  marginLeft: '20%'}}>
                            <Card.Header>
                                
                                {!this.state.show_ques &&
                                    <Button variant="primary" size="sm" style={{ marginTop: 10, maxWidth: '8em', maxHeight: '3em' }}
                                        onClick={() => 
                                            {this.showQues()}
                                        }
                                    >
                                        Show Question
                                    </Button>
                                }
                                
                                {this.state.show_ques &&
                                    <Button variant="primary" size="sm" style={{ marginTop: 10, maxWidth: '8em', maxHeight: '3em' }}
                                        onClick={() => {this.hideQues()}}
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
                                        {
                                            (this.state.question_paper.figure_ques != null) &&

                                            <div>
                                            <Typography>
                                                Question Figure: 
                                            </Typography>
                                            <img variant="bottom" style={{width: '80%', height: '80%', marginLeft: '10%', marginBottom: '1%'}}
                                            src={'http://localhost:5000/' + this.state.question_paper.figure_ques} />
                                            </div>
                                        }

                                        
                                  
                                        <br></br>
                                        <Typography>
                                            Answer Text: <br></br>{this.state.question_paper.ans_text}
                                        </Typography>

                                        {
                                            (this.state.question_paper.figure_ans != null) &&

                                            <div>
                                                <Typography>
                                                    Answer Figure: 
                                                </Typography>

                                                <img variant="bottom" style={{width: '80%', height: '80%', marginLeft: '10%', marginBottom: '1%'}}
                                                    src={'http://localhost:5000/' + this.state.question_paper.figure_ans} />
                                             </div>
                                        }
                                        
                                        
                                        
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

                                            {/* <label >
                                            Enter Marks: 
                                                <input type="text" name="marks" style={{ marginLeft: "3%", maxWidth: "15%"}} 
                                                onChange={() => 
                                                {this.handleRubrik(liteItems.index)}}
                                                />
                                            </label> */}
                                            <div style={{maxWidth: '5vh', marginLeft: "60vh"}}>
                                                <Textfield label = "Enter Marks" setText={this.handleRubrik} type='rubrik_ans' index={listItems.index}/>
                                            </div>
                                            
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

                        {this.state.nonnumber &&
                            <h6 style={{color: 'red'}}> Marks cannot be empty/non-number. Cannot save. </h6>
                        }

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