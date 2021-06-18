import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Navigation from "./Components/Navigation/NavigationBar";
import Footer from "./Components/Footer/Footer2";
import Home from "./Components/Home/Home";

// STUDENT
import Topic from "./Components/Student/Topic";
import Sub from "./Components/Student/Sub";
import Cat from "./Components/Student/Category";
import Practise from "./Components/Student/Practise";
import NavigationBar2 from "./Components/Navigation/Navigation2";
import Signin from "./Components/Signin/Signin";
import Register from "./Components/Register/Register";
//import Signin from "./Components/Signin";
import Tutorial from "./Components/Student/Tutorial";
import Tutorial_sub from "./Components/Student/Tutorial_sub"
import Video from "./Components/Student/Video"
import Profile from "./Components/Student/Profile";
import Next from "./Components/Student/next_q";

// INSTRUCTOR
import CreateTutorial from './Components/Instructor/CreateTutorial';
import ExamCorner from './Components/Instructor/ExamCorner1';
import ExamCorner2 from './Components/Instructor/ExamCorner2';
import InstructorHome from './Components/Instructor/HomeInstructor';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          input: '',
          imageUrl: '',
          box: {},
          route: '',
          isSignedIn: false,
          role: '',
          user: {
            id: '',
            name: '',
            email: '',
            entries: 0,
            joined: ''
          }
        }
      }


      onRouteChange = (route) => {
        if (route === 'signout') {
          this.setState({isSignedIn: false})
          this.setState({role: ''})
        } else if (route === 'signedin') {
          this.setState({isSignedIn: true})
        }
        this.setState({route: route});
      }

      setRole = (role) => {
          this.setState({role: role});
      }
    
      render() {
          return (
            <BrowserRouter>
                <div>
                    <Route 
                      path="" 
                      render={(props) => ( 
                          <Navigation
                            isSignedIn={this.state.isSignedIn} 
                            role={this.state.role}
                            onRouteChange={this.onRouteChange} {...props}
                          />
                        )}
                      />
                      
                      <Switch>
                          <div>
                            {this.state.isSignedIn ?
                            <div></div>
                            :
                            <div></div>
                              // <Route exact path="/" render={(props) => <Home isSignedIn={this.state.isSignedIn} {...props} /> }/>
                            }
    
                            <Route exact path="/signin" render={(props) => <Signin onRouteChange={this.onRouteChange} setRole={this.setRole} {...props} /> } />
                            <Route exact path="/register" render={(props) => <Register onRouteChange={this.onRouteChange} setRole={this.setRole} {...props} /> }/>
                         
                            {this.state.role == "student" ?
                                <div>
                                    {/* STUDENT */}
                                    {/* /practice --> /authHome 
                                        for generalising all the roles :'(
                                    */}
                                    <Route path="/authHome" component={Topic}/>
                                    <Route path="/subtopic" component={Sub} />
                                    <Route path="/category" component={Cat} />
                                    <Route path="/practise" component={Practise} />
                                    <Route path="/tutorial" component={Tutorial} />
                                    <Route path="/tutorial_sub" component={Tutorial_sub} />
                                    <Route path="/video" component={Video} />
                                    <Route path="/profile" component={Profile}/>
                                    <Route path="/next" component={Next}/>
                                </div>
                                :
                                <div>
                                    {this.state.role == "instructor" ?
                                        <div>
                                            {/* INSTRUCTOR */}
                                            <div>
                                                <Route path="/authHome" component = {InstructorHome}/>
                                                <Route path="/createTutorial" component = {CreateTutorial} />
                                                <Route path="/examCorner" component = {ExamCorner} />
                                                <Route path="/createExam" component = {ExamCorner2} />
                                            </div>

                                        </div>
                                        :
                                        <div>
                                            {/* MODERATOR */}

                                        </div>
                                    }
                                </div>
                            }
                          </div>
                    </Switch>
    
                    <Footer />
                </div>
            </BrowserRouter>
        );
      }
    }

export default App;

//npm run nodemon
//npm run start

// jhamela hoile, CSE408 -> Learn Math Final Codebase -> CSE408-master theke add korbo :| 