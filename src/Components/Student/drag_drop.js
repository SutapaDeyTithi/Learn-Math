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
        }


    };
    state_change = e => {
        this.setState({ state_chg: 0 });



    };










    render() {
        return (
            <div className="row">
                <div className="col-md-2 borderright" style={{ textAlign: "center" }}>
                    <h3 style={{ marginTop: 70 }}>Simplify</h3>
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
                        !this.state.state_chg &&
                        (<Link to="/test_consent_page" className="btn btn-primary next-prob">
                            Continue
                        </Link>
                        )
                    }

                </div>
            </div>
        )
    }
}

export default dr_dr;
