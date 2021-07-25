import React, { Component } from "react";
import { render } from "react-dom";
import ReactPlayer from "react-player";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import "./video.css";
const array_name = [];
class video extends Component {

    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);

        this.topic = " "
        this.clicked_topic = -1
        this.clicked_subtopic = -1
        this.subtopic = " "
        this.category_name = " "
        this.clicked_link = 0
        this.search_topic_item = " "
        this.state = {
            count: 0,
            data: [],
            category: [],
            topic_array: []

        };



    }
    componentDidMount() {

        fetch("http://localhost:5000/tutorial")
            //console.log(res);
            .then(res => res.json())
              
            .then(json => this.setState({ topic_array: json }));
            
    }




    render() {
        return (
            <div className="video">

                <div className="row">

                    <div className="col-md-2 borderright2">
                    {this.state.topic_array.map(filteredName => (
                        <h5><PlayCircleOutlineIcon /> {filteredName.tutorial_name} </h5>

                        // {/* <h5 style={{ marginLeft: 20 }}>Algebric Expression</h5> */}
                        ))
                    }
                    </div>
                    <div className="col-md-5 video_content">

                        {this.state.topic_array.map(filteredName => (
                            // <li className="none">
                            //     <input type="radio" className="check" name="platform" value={filteredName.topic_id}
                            //         onChange={this.handleChange} />
                            //     {filteredName.topic_name}
                            // </li>
                            <div>
                            <ReactPlayer width='1000px' height='400px' controls url={filteredName.video} />
                            <br></br>
                            <br></br>
                            <br></br>
                            <h4>About</h4>
                            <hr className="line"></hr>
                            <h5>What you will learn from this lesson</h5>
                            <p>You will learn the basic concepts of {filteredName.tutorial_name}</p>
                            <br></br>
                            <h5>What is {filteredName.tutorial_name}?</h5>
                            <p>To know more <a href={filteredName.link}>Click here</a></p>
                            </div>
                        ))
                        }
                        {/* <ReactPlayer width='1000px' height='400px' controls url={this.state.tutorial_array.link} />
                        <div className="description">
                            <h4>About</h4>
                            <hr className="line"></hr>
                            <h5>What you will learn from this lesson</h5>
                            <p>You will learn the basic concepts of algebric expression.</p>
                            <br></br>
                            <h5>What is algebric expression?</h5>
                            <p>
                                An algebraic expression in mathematics is an expression which is made up of variables and constants, along with algebraic operations (addition, subtraction, etc.). Expressions are made up of terms. They are also termed algebraic equations.
                                To know more <a href={"https://en.wikipedia.org/wiki/Algebraic_expression"}>click here</a>
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default video;
