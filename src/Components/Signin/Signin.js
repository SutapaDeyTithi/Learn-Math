import React from 'react';

import { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import './Signin.css'
class first extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: false,
            instructor: false,
            moderator: false
          };
        this.handleChangeStudent = this.handleChangeStudent.bind(this);
        this.handleChangeInstructor = this.handleChangeInstructor.bind(this);
        this.handleChangeModerator = this.handleChangeModerator.bind(this);
        //   this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleLangChange = () => {
        // this.props.passToParent(1);
        this.props.onRouteChange("signedin");             
    }

    handleChangeStudent(event) {
        const role = !this.state.student;
        this.setState({student: !this.state.student});
        if(role) {
            this.props.setRole("student")
            console.log("student")
        }
    }
    handleChangeInstructor(event) {
        const role = !this.state.instructor;
        this.setState({instructor: !this.state.instructor});
        if(role) {
            this.props.setRole("instructor")
            console.log("instructor")
        }
    }
    handleChangeModerator(event) {
        const role = !this.state.moderator;
        this.setState({moderator: !this.state.moderator});
        if(role) {
            this.props.setRole("moderator")
            console.log("moderator")
        }
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
                        <input type="checkbox" id="box1" name="box1" value="student" className="checkb"
                            defaultChecked={this.state.student}
                            onChange={this.handleChangeStudent}
                        />
                        Student 
                        <input type="checkbox" id="box2" name="box2" value="instructor" className="checkb"
                            defaultChecked={this.state.instructor}
                            onChange={this.handleChangeInstructor}
                        />
                        Instructor
                        <input type="checkbox" id="box3" name="box3" value="moderator" className="checkb"
                            defaultChecked={this.state.moderator}
                            onChange={this.handleChangeModerator}
                        /> 
                        Moderator
                        </p> 
                        
                        <Link to="/authHome" className="btn btn-primary " onClick={this.handleLangChange}>Submit</Link>
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