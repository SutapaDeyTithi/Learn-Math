import React, { Component } from "react";
import "./sub.css";

import subtopic_img from "../Resources/Images/content 1.png";
import gcd from "../Resources/Images/image 70.png";
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
                    <div className="row" >
                        {this.state.subtopic_array.filter(el => el.topicname == this.props.location.state.name).map(filteredName => (
                            // <li >

                            //     {filteredName.subtopic_name}
                            // </li>
                            
                                <div className="card my_card" >

                                    <img src={gcd} className="all_img"/>
                                    <div className="card-body">
                                        <p className="card_text" >
                                            {filteredName.subtopic_name}
                                        </p>
                                    </div>
                                </div>

                        ))
                        }
                            </div>


                </section>

            </div>

        )
    }
}
export default Sub;