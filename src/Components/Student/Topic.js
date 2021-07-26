import React, { Component, useState } from "react";

import './topic.css';
import algebra from "../../Resources/Images/al.PNG";
import popular from "../../Resources/Images/popular.png";
import number from "../../Resources/Images/number 1.png";
import geo from "../../Resources/Images/geou 1.png";
import logic from "../../Resources/Images/logic 1.png";
import graph from "../../Resources/Images/Cycle_graph_C5 1.png";
import clock from "../../Resources/Images/clock.PNG";




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
        this.search_topic_item = " "
        this.state = {
            count: 0,user_id: '',
            data: [],
            category: [],
            topic_array: []

        };



    }
    componentDidMount() {
        this.setState({user_id: this.props.user_id});
        this.state.user_id = this.props.user_id;
        console.log("user id --> ", this.props.user_id);
        fetch("http://localhost:5000/topic")
            //console.log(res);
            .then(res => res.json())
              
            .then(json => 
                this.setState({ topic_array: json }));
            
    }
    handleChange = e => {
        this.setState({ topic: e.target.value  });

        this.setState({ clicked_topic: 1 });
        fetch("http://localhost:5000/subtopic")
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    };
    handleChange_sub = e => {
        this.setState({ subtopic: e.target.value });

        this.setState({ clicked_subtopic: this.clicked_subtopic + 1 });
        fetch("http://localhost:5000/category")
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
                                                pathname: "/subtopic",
                                                state: { name: "1" }
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
                                                pathname: "/subtopic",
                                                state: {
                                                    name: "4"
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
                                                pathname: "/subtopic",
                                                state: {
                                                    name: "2"
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
                                                pathname: "/subtopic",
                                                state: {
                                                    name: "3"
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
                                                            pathname: "/subtopic",
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
                                                            pathname: "/subtopic",
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
                            {
                                this.state.search_topic_item >= " "
                                    ? (<div className="radio-buttons">
                                    {this.state.topic_array.filter(item => item.topic_name.toLowerCase().includes(this.state.search_topic_item.toLowerCase())).map(filteredName => (
                                        <li className="none">
                                            <input type="radio" className="check" name="platform" value={filteredName.topic_name}
                                                onChange={this.handleChange} />
                                            {filteredName.topic_name}
                                        </li>

                                    ))
                                    }
                                </div>)
                                    : (<div className="radio-buttons">
                                        {this.state.topic_array.map(filteredName => (
                                            <li className="none">
                                                <input type="radio" className="check" name="platform" value={filteredName.topic_id}
                                                    onChange={this.handleChange} />
                                                {filteredName.topic_name}
                                            </li>

                                        ))
                                        }
                                    </div>)
                            }




                            







                        </div>



                        {/* <h1>{this.state.topic}</h1> */}

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
                                            {this.state.data.filter(el => el.topic_id == this.state.topic).map(filteredName => (
                                                <li className="none">
                                                    <input type="radio" className="check" name="platform" value={filteredName.subtopic_id}
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
                        <div>
                            {this.state.clicked_subtopic >= 0
                                ? (

                                    <div>
                                        {/* subtopic_id, category_name */}
                                        <div className="simple">Category</div>
                                        <div className="simplee radio-buttons">
                                            {this.state.category.filter(el => el.subtopic_id == this.state.subtopic).map(filteredName => (
                                                <li className="none">
                                                    <input type="radio" className="check" name="platform" value={filteredName.category_id}
                                                        onChange={this.handleChange_category} />
                                                    {filteredName.category_name}
                                                </li>

                                            ))
                                            }
                                        </div>



                                    </div>
                                )
                                : (<h3></h3>)
                            }


                        </div>
                        {/* <h1>{this.state.category_name}</h1>
                        <h1>{this.state.topic}</h1>
                        <h1>{this.state.subtopic}</h1> */}
                        <div>
                            {
                                this.state.topic >= " " && this.state.subtopic >= " " && this.state.category_name >= " "
                                    ? (<div className="submit_button">
                                        <Link className="submit_button_link"
                                            to={{
                                                pathname: "/practise",
                                                state: {
                                                    name: this.state.topic + "//" + this.state.subtopic + "//" + this.state.category_name
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
