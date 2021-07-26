import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import user from "../../Resources/Images/user2 1.png";
import user2 from "../../Resources/Images/user 1 1.png";
class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div style={{marginTop:70,marginLeft:40}}>
                <hr></hr>
                <img src={user}/> Iron Man  29/7/21
                
                <p style={{marginTop:20,marginLeft:50}}>How to do factorizations using algebric exression?</p>
                <br></br>

                
                <img src={user2} style={{marginLeft:40}}/> Hulk  29/7/21
                
                <p style={{marginTop:20,marginLeft:80}}>First we need to take the power of same elements and add their powers</p>
                <br></br>
            </div>
        );
    }
}
export default Profile;