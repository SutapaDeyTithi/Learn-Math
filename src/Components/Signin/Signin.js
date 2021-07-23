import React from 'react';

import { Component } from 'react';
import { Link } from "react-router-dom";

import './Signin.css'
class first extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: false,
            instructor: false,
            moderator: false,

            role: "",
            email:"",
            pass:""
          };
        this.handleChangeStudent = this.handleChangeStudent.bind(this);
        this.handleChangeInstructor = this.handleChangeInstructor.bind(this);
        this.handleChangeModerator = this.handleChangeModerator.bind(this);
        //   this.handleSubmit = this.handleSubmit.bind(this);

        this.handleChange_role = this.handleChange_role.bind(this);
        this.handleChange_email = this.handleChange_email.bind(this);
        this.handleChange_pass = this.handleChange_pass.bind(this);
    }

    handleChange_role = () => {
        console.log("setting role..");
        if(this.state.student == true) {
            //this.setState({ role: 'student' });
            this.state.role = 'student';
            console.log("if 1: ", this.state.role);
        }
        else if(this.state.instructor == true) {
            this.state.role = 'instructor';
            console.log("if 2: ", this.state.role);
        }
        else if(this.state.moderator == true) {
            this.state.role = 'moderator';
            console.log("if 3: ", this.state.role);
        }
        console.log(this.state.role);
    }
    
    handleSubmit = () => {
        // if(this.state.student)
        //     this.setState({ role: "student" });
        // else if(this.state.instructor)
        //     this.setState({ role: "instructor" });
        // else if(this.state.moderator)
        //     this.setState({ role: "moderator" });
        this.handleChange_role();

        // must delete this line later
        // auto sign up
        this.props.onRouteChange("signedin");

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                //   id: this.state.id,
                //   item: this.state.item,
                //   itemType: this.state.itemType
                email:this.state.email,
                pass:this.state.pass,
                roletype:this.state.role
            })
          })   
          .then((response) => response.json())
          .then((data) => {
              console.log('This is your data:\n', data);
              if(data === "loggedin")
                this.props.onRouteChange("signedin"); 
              else
              {
                  
              }

          });
        //this.props.onRouteChange("signedin");             
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

    handleChange_email(e) {
        //console.log("Fruit Selected!!");
        this.setState({ email: e.target.value });
    }
    handleChange_pass(e) {
        //console.log("Fruit Selected!!");
        this.setState({ pass: e.target.value });
    }
    
    
    render() {
        return (
            <div id="first">
                {/* <h1>{this.props.text}</h1> */}
                <div className="card signin_card border-dark" >
                    <div className="card-body">
                        <h3 className="card-title">Sign In</h3>
                        <input id="Email" name="Email" type="text" placeholder="Email address" className="email" onChange={this.handleChange_email}/> 
                        <input id="password" name="password" type="password" placeholder="Password" className="password" onChange={this.handleChange_pass}/> 
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
                        {/* authHome */}
                        <Link to="/authHome" className="btn btn-primary " onClick={this.handleSubmit}>Submit</Link>
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