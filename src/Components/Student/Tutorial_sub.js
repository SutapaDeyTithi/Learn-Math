import React, { Component } from "react";
import "./sub.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import subtopic_img from "../../Resources/Images/content 1.png";

class Sub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            subtopic_array: []

        };
    }



    componentDidMount() {
        fetch("http://localhost:5000/topic")
            .then(res => res.json())
            .then(json => this.setState({ subtopic_array: json }));

    }

    render() {

        return (
            <div>
                {/* <h1 className="sub">{this.props.location.state.name} </h1>
                <h2 className="sub">{this.props.location.state.age}</h2> */}

                <section id="subtopic">
                    <h3 className="subtopics">Related Subtopics <img src={subtopic_img} /></h3>
                    <div className="box">
                        <div className="row">
                            {this.state.subtopic_array.filter(el => el.topicname == this.props.location.state.name).map(filteredName => (

                                <div className="card my-card" >

                                    <img src={`../img/${filteredName.subtopic_name}.jpg`} className="all_img"></img>
                                    <div className="card-body">
                                        <p className="card_text" >
                                            <Link className="link"
                                                to={{
                                                    pathname: "/video" ,
                                                    state: {
                                                        name: filteredName.topicname + "//" + filteredName.subtopic_name
                                                    }
                                                }}>{filteredName.subtopic_name}</Link>


                                        </p>
                                    </div>
                                </div>

                            ))
                            }
                        </div>
                    </div>

                </section>

            </div>

        )
    }
}
export default Sub;