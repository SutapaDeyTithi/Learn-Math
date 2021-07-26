import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.css";
import TaskList from "./TaskList";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
export const TASKS = [
    {
        id: 1,
        name: "1",
        done: false
    },
    {
        id: 2,
        name: "2",
        done: false
    },
    {
        id: 3,
        name: "3",
        done: false
    },
    {
        id: 4,
        name: "4",
        done: true
    },
    {
        id: 5,
        name: "5",
        done: false
    },
    {
        id: 6,
        name: "6",
        done: true
    }
];
class dr_dr extends Component {

    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        this.state = {
            state_chg: 1,
            show_ans:0
        }


    };
    state_change = e => {
        this.setState({ state_chg: 0 });



    };
    ans_show = e=>{
        this.setState({show_ans:1})
    }









    render() {
        return (
            <div className="row">
                <div className="col-md-2 borderright" style={{ textAlign: "center" }}>
                    <h3 style={{ marginTop: 70 }}>Matching</h3>
                </div>
                <div className="col-md-6 borderright" style={{ textAlign: "center" }}>
                    <TaskList tasks={TASKS} />
                </div>
                <div className="col-md-3 third " style={{ textAlign: "center", marginTop: 100 }}>
                    
                    {
                        this.state.state_chg 
                        ?(
                            <div>
                            <h5>Correctly place right numbers in right box</h5>
                            <button className="submit" onClick={this.state_change}>
                                Submit
                            </button>
                            </div>
                        )
                        :(<h1></h1>)
                    }

                    {
                        !this.state.state_chg 
                        ?(
                        <div>
                            {
                                this.state.show_ans ===1
                                ?(<h5>The numbers that can be divided by 2 are called even number and others are called odd number.
                                    <br></br>
                                    So in this sense 2,4,6 should go in even group and 1,3,5 should go in odd group.
                                </h5>)
                                :(<button style={{width:150,height:50,backgroundColor:"#49675B",color:'white',borderRadius:5}} onClick={this.ans_show}>Show answer</button>)
                            }
                            
                            <br></br>
                            {/* <h4>Hello</h4> */}
                            <Link to="/test_consent_page" className="btn btn-primary next-prob">
                            Continue
                            </Link>
                        </div>
                        )
                        :(<h1></h1>)
                    }

                </div>
            </div>
        )
    }
}

export default dr_dr;
