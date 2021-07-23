import React, { Component } from "react";
import "./practise.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Calc from "./Calculator.js"
import Question1 from './Question1';
import Options from "./Options"
import Explain1 from "./Explain1";
import Practise from "../../Resources/Images/practise.png";
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

    componentDidMount() {
        fetch("http://localhost:5000/mcq")
            .then(res => res.json())
            .then((result) => {
                //console.log(result);
                this.setState({
                    question: result,
                    // mcq_options: result.options
                });
            }
            )
        //console.log(mcq_options)
        // .then(res => res.json())
        // .then(json => this.setState({ question: json,
        //  mcq_options:json.options}));
        //     .then(response => response.json())
        // .then(data => this.setState({ mcq_options: data.options }))
        // .then(data => this.setState({ question: data }));
        const name_arry = this.props.location.state.name.split('//', 3);

        this.setState({ subtopic_name: name_arry[1] })
        this.setState({ topic_name: name_arry[0] })
        this.setState({ category_name: name_arry[2] })
        // this.setState({mcq_options:question.options})



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
                        <div className="col-md-2 borderright" style={{ textAlign: "center",marginTop:70 }}>
                            {/* <h3 style={{ marginTop: 70 }}>{this.props.location.state.name}</h3> */}
                            <img src={Practise} style={{width:100}}/>
                        </div>
                        <div className="col-md-6 borderright" style={{ textAlign: "center" }}>
                            <div className="middle">
                                {
                                    !this.state.explanation
                                        ? (<div><Question1 question_no={1} question={this.state.question} />
                                            {this.state.question.map(filteredName => (
                                                <img src={`../img/${filteredName.figures}.jpg`} style={{width:350,height:300}}/>
                                                

                                            ))
                                            }
                                            
                                        </div>)
                                        : (<Explain1 />)
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
                                                this.state.op_name === "40"
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
                                            <Options question={this.state.question} parentCallback={this.handleCallback} />
                                            <button className="submit" onClick={this.show_three_buttons}>Submit</button>
                                        </div>)
                            }
                            {
                                this.state.answer
                                    ? (<h5 className="ans">The correct answer is 40</h5>)
                                    : (<h6></h6>)
                            }
                            {
                                this.state.show_buttons
                                    ? (<Link to="/next" className="btn btn-primary next-prob">
                                        Continue
                                    </Link>
                                    )
                                    : (<h1></h1>)
                            }
                            {
                                this.state.index
                                    ?
                                    (
                                        <Calc />
                                    )
                                    : (<h1></h1>)
                            }

                        </div>
                    </div>
                </section>

            </div>

        )
    }
}
export default Cat;