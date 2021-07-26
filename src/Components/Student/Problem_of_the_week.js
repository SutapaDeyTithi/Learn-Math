import React from 'react';
import Table from './challenge_table';
import Past_table from './past_challenge_table';
import Table_Rating from "./table_rating";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
class problem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            data: [],
            category: [],
            topic_array: []

        };



    }
    componentDidMount() {



    }





    render() {



        return (

            <div style={{ marginTop: 70 }} style={{ overflowX: "hidden" }}>
                <h5 style={{ backgroundColor: "#49675B", color: 'white', width: 560, marginLeft: 50, marginTop: 100, textAlign: 'center', height: 30, marginBottom: 0 }}>Upcoming Challenges</h5>
                <div className="row" style={{ marginLeft: 0 }}>
                    <div className="col-md-3" style={{ marginLeft: -14 }}>
                        <Table />
                    </div>
                    <div className="col-md-3" style={{ marginLeft: 600, marginTop: -50 }}>
                        <div className="card" style={{ width: 300, height: 220 }}>
                            <h5 className="card-title" style={{ textAlign: 'center', backgroundColor: "#49675B", color: 'white', height: 40 }}>Pay attention</h5>
                            <div className="card-body">


                                <h5 className="card-text">Problem of the week</h5>
                                <p className="card-text">All about circles</p>
                                <hr></hr>
                                <Link to="/problem_of_the_week_begin">
                                    < button className="submit" style={{ marginLeft: 60 }}>Start </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 style={{ backgroundColor: "#49675B", color: 'white', width: 593, marginLeft: 50, marginTop: 50, textAlign: 'center', height: 30, marginBottom: 0 }}>Past Challenges</h5>
                <div className="row" style={{ marginLeft: 0 }}>
                    <div className="col-md-3" style={{ marginLeft: -14 }}>
                        <Past_table />
                    </div>
                    <div className="col-md-3" style={{ marginLeft: 600 }}>
                        <h5 style={{ backgroundColor: "#49675B", color: 'white', width: 310, textAlign: 'center', height: 30, marginBottom: 0, marginTop: -30 }}>Top Rated</h5>

                        <Table_Rating />
                    </div>

                </div>

            </div>


        );
    }
}
export default problem;