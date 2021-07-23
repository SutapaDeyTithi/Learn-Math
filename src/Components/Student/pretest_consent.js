import React, { Component } from "react";


import test from "../../Resources/Images/test 1.png";
import yes from "../../Resources/Images/image 81.png"
import no from "../../Resources/Images/image 82.png"

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
const array_name = [];
class ready extends Component {

    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);

        this.topic = " "
        this.clicked_topic = -1
        this.clicked_subtopic = -1




    }





    render() {
        return (
            <div style={{marginTop:100,textAlign:"center"}}>
                <img src={test} style={{marginBottom:40}}/>
                <h4 style={{marginBottom:30}}>Ready to take a test</h4>
                <Link to="/test">
                <img src={yes} style={{width:60,marginRight:40}}/>
                </Link>
                
                <Link to="/authHome">
                <img src={no} style={{width:60}}/>
                </Link>
               
            </div >
        )
    }
}

export default ready;
