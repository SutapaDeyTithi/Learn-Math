import React, { Component, useState } from "react";

import './topic.css';
import algebra from "../Resources/Images/al.PNG";
import popular from "../Resources/Images/popular.png";
import number from "../Resources/Images/number 1.png";
import geo from "../Resources/Images/geou 1.png";
import logic from "../Resources/Images/logic 1.png";
import graph from "../Resources/Images/Cycle_graph_C5 1.png";
import clock from "../Resources/Images/clock.PNG";
import Practise from './Practise';



import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class topic extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.topic = " "
        this.clicked_topic = -1
        this.clicked_subtopic = -1
        this.subtopic = " "
        this.category_name = " "
        this.clicked_link = 0
        this.search_topic_item = null
        this.state = {
            count: 0,
            data: [],
            category: [],
            topic_array: []

        };
        


    }
    componentDidMount() {
        
        fetch("http://localhost:5000/")
            .then(res => res.json())
            .then(json => this.setState({ topic_array: json }));
        

    }
    handleChange = e => {
        this.setState({ topic: e.target.value });

        this.setState({ clicked_topic: 1 });
        fetch("http://localhost:5000/topic")
            .then(res => res.json())
            .then(json => this.setState({ data: json }));


    };
    handleChange_sub = e => {
        this.setState({ subtopic: e.target.value });

        this.setState({ clicked_subtopic: this.clicked_subtopic + 1 });
        fetch("http://localhost:5000/subtopic")
            .then(res => res.json())
            .then(json => this.setState({ category: json }));


    };
    handleChange_category = e => {
        this.setState({ category_name: e.target.value });

        // this.setState({clicked_subtopic:this.clicked_subtopic+1});
        // fetch("http://localhost:5000/subtopic")
        //   .then(res => res.json())
        //   .then(json => this.setState({ category: json }));

    };
    //   componentDidMount() {

    //   }

    hello = e => {
        console.log('hello')
        this.setState({ clicked_link: this.clicked_link + 1 })
    };


    search_topic = e => this.setState({ search_topic_item: e.target.value })
    

    render() {



        return (

            <section id="topic">
                <h1>{this.props.status}</h1>
                <div className="row">

                    <div className="col-md-9 left">
                        <div className="popular">
                            <h3>Popular <img className="logop" src={popular} /></h3>


                        </div>
                        <div className="row">
                            <div className="card" >

                                <img className="algeb" src={algebra} />
                                <div className="card-body">
                                    <p className="card-text">
                                        <Link className="link"
                                            to={{
                                                pathname: "/tutorial_sub",
                                                state: { name: "Algebra" }
                                            }}
                                        >Algebra</Link>
                                        {/* <Sub name="sudipa"/> */}
                                    </p>
                                </div>
                            </div>
                            <div className="card " >

                                <img className="number" src={number} />
                                <div className="card-body">

                                    <p className="card-text">
                                        <Link className="link"
                                            to={{
                                                pathname: "/tutorial_sub",
                                                state: {
                                                    name: "Number Theory"
                                                }
                                            }}>Number Theory
                                        </Link>
                                    </p>

                                </div>
                            </div>
                            <div className="card" >

                                <img className=" geo" src={geo} />
                                <div className="card-body">
                                    <p className="card-text">
                                        <Link className="link"
                                            to={{
                                                pathname: "/tutorial_sub",
                                                state: {
                                                    name: "Geometry"
                                                }
                                            }}>Geometry</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="card" >

                                <img className="logic" src={logic} />
                                <div className="card-body">
                                    <p className="card-text">
                                        <Link className="link"
                                            to={{
                                                pathname: "/tutorial_sub",
                                                state: {
                                                    name: "BrainTeaser"
                                                }
                                            }}>BrainTeaser</Link>
                                    </p>
                                </div>
                            </div>


                        </div>


                        <div>
                            {this.state.count == 0
                                ? (<div class="col-md-8 text-center ">
                                    <button className="see_more2" onClick={() => this.setState({ count: this.state.count + 1 })}>Show More</button>
                                </div>)
                                : (
                                    <div className="row">

                                        <div className="card" >

                                            <img className="graph" src={graph} />
                                            <div className="card-body">
                                                <p className="card-text">
                                                    <Link className="link"
                                                        to={{
                                                            pathname: "/tutorial_sub",
                                                            state: {
                                                                name: "Graph"
                                                            }
                                                        }}>Graph</Link>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="card" >

                                            <img className="clock" src={clock} />
                                            <div className="card-body">
                                                <p className="card-text">
                                                    <Link className="link"
                                                        to={{
                                                            pathname: "/tutorial_sub",
                                                            state: {
                                                                name: "TIME"
                                                            }
                                                        }}>Time</Link>
                                                </p>
                                            </div>
                                        </div>











                                    </div>




                                )
                            }
                        </div>
                    </div>






                    <div className="col-md-3 right">


                        <input

                            // id="weight"
                            onChange={this.search_topic}
                            value={this.state.search_topic_item}
                            placeholder="Search Topic"
                            className="search"
                        />

                        <div className="simple">Topic
                        </div>
                        <div className="simplee">
                            {/* { */}
                                {/* !this.state.search_topic_item && */}
                                <div className="radio-buttons">
                                    {this.state.topic_array.map(filteredName => (
                                        <li className="none">
                                            <input type="radio" className="check" name="platform" value={filteredName.topicname}
                                                onChange={this.handleChange} />
                                            {filteredName.topicname}
                                        </li>

                                    ))
                                    }
                                </div>
                           










                        </div>





                        {/* <div>
                        <ul>
                        {this.state.data.map(el => {
                            <li>{el.topicname}</li>
                            // { el.topicname===this.state.option
                                
                            //  ?(<li>{el.subtopic_name}</li>)
                            // :(<h1></h1>)
                            // }
                            {this.state.option===el.topicName ? 
                                (<li>{el.subtopic_name}</li>) 
                                : (<h1>hejsan</h1>) 
                            }
                            
                            
                            
      })}
                            
                        </ul>
                        </div> */}
                        <div>
                            {this.state.clicked_topic >= 0
                                ? (

                                    <div>

                                        <div className="simple">Subtopic</div>
                                        <div className="simplee radio-buttons">
                                            {this.state.data.filter(el => el.topicname == this.state.topic).map(filteredName => (
                                                <li className="none">
                                                    <input type="radio" className="check" name="platform" value={filteredName.subtopic_name}
                                                        onChange={this.handleChange_sub} />
                                                    {filteredName.subtopic_name}
                                                </li>

                                            ))
                                            }
                                        </div>



                                    </div>
                                )
                                : (<h3></h3>)
                            }
                            {
                                console.log(this.state.category)
                            }

                        </div>
                        {/* <h1>{this.state.subtopic}</h1> */}
                           {/* <h1>{this.state.category_name}</h1>
                        <h1>{this.state.topic}</h1>
                        <h1>{this.state.subtopic}</h1> */}
                        <div>
                            {
                                this.state.topic >= " " && this.state.subtopic >= " " 
                                    ? (<div className="submit_button">
                                        <Link className="submit_button_link"
                                            to={{
                                                pathname: "/video",
                                                state: {
                                                    name: this.state.topic + "//" + this.state.subtopic 
                                                }
                                            }}>Submit</Link>
                                    </div>)
                                    : <h2></h2>
                            }
                        </div>

                    </div>


                </div>















            </section>


        );
    }
}



export default topic;
