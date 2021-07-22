import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";

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
        current_ans: 0
        } 
        // this.updatedList = this.updatedList.bind(this);
        this.gradeNow = this.gradeNow.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.prevQuestion = this.prevQuestion.bind(this);
        this.saveGrades = this.saveGrades.bind(this);

        this.setUnchecked =this.setUnchecked.bind(this);
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
        // .then(res => {
        //     this.setState({answer_papers: []});
        //     this.state.answer_papers = [];
        // })

    }

    gradeNow = () => {
        this.setState({grading_one: true});
        this.state.grading_one = true;
    }

    nextQuestion = () => {
        this.setState({current_ans: (this.state.current_ans+1)});
    }

    prevQuestion = () => {
        this.setState({current_ans: (this.state.current_ans-1)});
    }

    saveGrades = () => {
        this.setState({grading_one: false});
        this.setState({current_ans: 0});
        this.state.grading_one = false;
    }
        
    render() {
        return (
            <div>
                {!this.state.grading_one?
                    <div>
    
                    <ul>{  
                    this.state.unchecked.map((listItems)=>{
                        return (
                            <div>
                                    <li>Answer Paper ID: {listItems.answer_id}</li>

                                    <Button variant="primary" size="sm" style={{ marginTop: 10, maxWidth: '8em', maxHeight: '3em' }}
                                        onClick={this.gradeNow}
                                        >
                                        Grade Now
                                    </Button>
                            </div>
                        );
                    })
                    }</ul>
                    </div>

                    :

                    <div>

                        <Card border="warning" style={{ minWidth: '60%',  marginLeft: '20%'}}>
                            <Card.Header>{this.state.answer_papers[this.state.current_ans].question_id}</Card.Header>
                            {/* <Card.Body>
                            <Card.Text> */}

                            {/* </Card.Body> */}
                            {/* <Image src={this.state.answer_papers[this.state.current_ans].ans_image} fluid /> */}
                            <Card.Img variant="bottom" src={'http://localhost:5000/'+this.state.answer_papers[this.state.current_ans].answer} />
                        </Card>
                        <br />



                        {this.state.answer_papers[this.state.current_ans].rubrik != null &&

                            <ul>{  
                                this.state.answer_papers[this.state.current_ans].rubrik.map((listItems)=>{
                                    return (
                                        <div>
                                            <br /><br />
                                            <li>
                                                <p>
                                                    Breakpoint: {listItems.title}
                                                    <br />
                                                    Marks: {listItems.marks}
                                                </p>
                                            </li>

                                            <label >
                                            Enter Marks: 
                                                <input type="text" name="marks" style={{ marginLeft: "3%", maxWidth: "15%"}} />
                                            </label>
                                        </div>
                                    );
                                })
                            }
                            </ul>
                                                
                    }

                        <br /><br />



                        {this.state.current_ans > 0 ? 
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
                        }

                        <br /><br />

                        <Button variant="primary" size="sm" style={{ marginTop: 10, maxWidth: '8em', maxHeight: '3em' }}
                            onClick={this.saveGrades}
                            >
                            Save Grades
                        </Button>
                    </div>
                }
  
            </div>
        );
    }
}

export default gradeNew;