import React from 'react';

import { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import './Signin.css'
class first extends Component {
    constructor(props) {
        super(props);
        
        
      }
      handleLangChange = () => {
       
        this.props.passToParent(1);            
    }
 
    
    render() {

        return (
            <div id="first">
                {/* <h1>{this.props.text}</h1> */}
                <div className="card signin_card border-dark" >
                    <div className="card-body">
                        <h3 className="card-title">Sign In</h3>
                        <input id="Email" name="Email" type="text" placeholder="Email address" className="email"/> 
                        <input id="password" name="password" type="password" placeholder="Password" className="password" /> 
                        <br></br>
                        
                        <p style={{marginTop:15}}>Login as 
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Student" className="checkb"/>Student 
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Instructor" className="checkb"/>Instructor
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Moderator" className="checkb"/> Moderator
                        </p> 
                        
                        <Link to="/practice" className="btn btn-primary " onClick={this.handleLangChange}>Submit</Link>
                        <br></br> 
                        <p style={{marginTop:10}}>Don't have an account??   <Link to="/register">Register</Link></p>
                        
                    {/* <input type="submit" id="submit" className="submit" onClick={this.handleLangChange}/>  */}
                                        
                    </div>
                </div>

                
                
                
            </div>
        )
    }
}
export default first;