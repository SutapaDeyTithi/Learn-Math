import React, { Component } from "react";
import "./practise.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Calc from "./Calculator.js"
import Question1 from './Question1';
import Options from "./Options"
import Explain1 from "./Explain1";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import boy from "../../Resources/Images/boy.jpg";
import idea from "../../Resources/Images/idea.jpg"

class Cat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            subtopic_array: [],
            question: [],
            subtopic_name: "",
            topic_name: "",
            category_name: "",
            index: 0,
            mcq_answer_submit: "",
            question_no: 1,
            show_buttons: 0,
            explanation: 0,
            answer: 0,
            op_name: ""



        };

    }
    handleChange = e => {
        this.setState({ mcq_answer_submit: e.target.value });



    };
    componentDidMount() {
        fetch("http://localhost:5000/true")
            .then(res => res.json())
            .then((result) => {
                //console.log(result);
                this.setState({
                    question: result,
                    // mcq_options: result.options
                });
                console.log(this.state.question);
            }
            )
        //console.log(mcq_options)
        // .then(res => res.json())
        // .then(json => this.setState({ question: json,
        //  mcq_options:json.options}));
        //     .then(response => response.json())
        // .then(data => this.setState({ mcq_options: data.options }))
        // .then(data => this.setState({ question: data }));
        // const name_arry = this.props.location.state.name.split('//', 3);

        // this.setState({ subtopic_name: name_arry[1] })
        // this.setState({ topic_name: name_arry[0] })
        // this.setState({ category_name: name_arry[2] })
        // this.setState({mcq_options:question.options})



    }
    show_three_buttons = e => {
        this.setState({ show_buttons: this.state.show_buttons + 1 })
    }
    // next =e =>{
    //     this.setState({question_no:this.state.question_no+1})
    // }
    show_explanations = e => {
        this.setState({ explanation: this.state.explanation + 1 })
    }
    hide_explanations = e => {
        this.setState({ explanation: 0 })
    }

    show_answer = e => {
        this.setState({ answer: this.state.answer + 1 })
    }
    hide_answer = e => {
        this.setState({ answer: 0 })
    }
    handleCallback = (childData) => {
        this.setState({ op_name: childData })
    }


    showcalc = e => {
        this.setState({ index: 1 })
    }
    hidecalc = e => {
        this.setState({ index: 0 })
    }
    option_value(value) {
        this.setState({ op: value });
    }

    render() {
        return (
            <div>

                <section id="practise">
                    {/* <h1>{this.props.location.state.name}</h1> */}
                    <div className="row">
                        <div className="col-md-2 borderright" style={{ textAlign: "center" }}>
                            <h3 style={{ marginTop: 70 }}>Simplify</h3>
                        </div>
                        <div className="col-md-6 borderright" style={{ textAlign: "center" }}>
                            <div className="middle">
                                {
                                    !this.state.explanation
                                        ? (
                                            <div>
                                                {/* <h3 >Question 2</h3> */}
                                                {/* <p style={{ paddingTop: 20 }}> */}
                                                <Question1 question_no={2} question={this.state.question} />
                                                {/* <div style={{ marginTop: 50 }}>
                                                    <h1> {this.state.question.ques_text}</h1>
                                                </div> */}
                                                    {/* </p> */}
                                                <img src={boy} style={{ width: 300 }}></img>
                                            </div>)
                                        : (<div>
                                            <img src={idea} className="idea" />
                                            <p>Given expression is 16x<sup>2</sup> - 40xy + 25y<sup>2</sup></p>

                                            <p> We can write = (4x)<sup>2</sup> - 2*4x*5y + (5y) <sup>2</sup>
                                                <br></br>
                                        Which becomes (4x - 5y) <sup>2</sup>
                                                <br></br>
                                        If we put the values of x and y ,we get <br></br>
                                        ( 4*7 - 5*6 )<sup>2</sup> = 4 <br></br>
                                        For this we can say that the given statement is False.
                                          </p>
                                        </div>)
                                }


                                {
                                    !this.state.index
                                        ? (<button className="show-calc" onClick={this.showcalc}>Show Calculator</button>)
                                        : (<button className="show-calc" onClick={this.hidecalc}>Hide Calculator</button>)
                                }

                            </div>

                        </div>
                        <div className="col-md-3 third " style={{ textAlign: "center" }}>



                            {
                                this.state.show_buttons
                                    ? (
                                        <div style={{ marginTop: 60 }}>
                                            {
                                                this.state.op_name === "false"
                                                    ? (<div className="correct">Correct Answer</div>)
                                                    : (<div className="wrong">Wrong Answer</div>)
                                            }

                                            {
                                                !this.state.answer
                                                    ? (<button className="submit2" onClick={this.show_answer}>Show Answer</button>)
                                                    : (<button className="submit2" onClick={this.hide_answer}>Hide Answer</button>)
                                            }

                                            {
                                                !this.state.explanation
                                                    ? (<button className="submit3" onClick={this.show_explanations}>Show Explanation</button>)
                                                    : (<button className="submit3" onClick={this.hide_explanations}>Hide Explanation</button>)
                                            }

                                            <br></br>
                                            <button className="submit2">Join Discussion</button>
                                        </div>
                                    )
                                    : (
                                        <div>
                                            <h3 >Options</h3>
                                            <li style={{ listStyleType: "none",marginTop:30 }}>

                                                <input type="radio" style={{ marginRight: 10 }} name="platform" value="true"
                                                    onChange={()=>{this.setState({op_name:"true"})}} />
                                                True
                                            </li>
                                            <li style={{ listStyleType: "none"}}>

                                                <input type="radio" style={{ marginRight: 10,marginLeft:4 }} name="platform" value="false"
                                                    onChange={()=>{this.setState({op_name:"false"})}} />
                                                False
                                            </li>
                                            <button className="submit" onClick={this.show_three_buttons}>Submit</button>
                                        </div>)
                            }
                            {
                                this.state.answer
                                    ? (<h5 className="ans">The given statement is false.</h5>)
                                    : (<h6></h6>)
                            }
                           
                            
                            {
                                this.state.index
                                    ?
                                    (
                                        <Calc />
                                    )
                                    : (<h1></h1>)
                            }
                            {
                                
                                (<Link to="/drag" className="btn btn-primary next-prob"> 
                                Continue
                                </Link>
                                )
                               
                            }

                        </div>
                    </div>
                </section>

            </div>

        )
    }
}
export default Cat;