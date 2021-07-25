import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Navigation from "./Components/Navigation/NavigationBar";
import Footer from "./Components/Footer/Footer2";



// STUDENT
import Topic from "./Components/Student/Topic";
import Sub from "./Components/Student/Sub";
import Cat from "./Components/Student/Category";
import Drag_Drop from "./Components/Student/drag_drop";
// ei sign in register ektu upore tulchilam, eksathe rakhar jonno, eta shorale css noshto hoye jay :3
// don't touch here
import Signin from "./Components/Signin/Signin";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";

import Practise from "./Components/Student/Practise";
import Tutorial from "./Components/Student/Tutorial";
import Tutorial_sub from "./Components/Student/Tutorial_sub"
import Video from "./Components/Student/Video"
import Profile from "./Components/Student/Profile";
import Next from "./Components/Student/next_q";
import Ready from "./Components/Student/pretest_consent";
import Test from "./Components/Student/test"
import Problem from "./Components/Student/Problem_of_the_week"
import POTW_Questions from "./Components/Student/problem_of_the_week_test"

// INSTRUCTOR
import PracticeProblems from './Components/Instructor/PracticeProblems';
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
          user_id: '',
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
          this.setState({role: ''});
          this.state.role = '';
          this.state.isSignedIn = false;
        } else if (route === 'signedin') {
          this.setState({isSignedIn: true})
          this.state.isSignedIn = true;
        }
        this.setState({route: route});
      }

      setRole = (role) => {
          this.setState({role: role});
      }

      setUserID = (id) => {
        this.setState({user_id: id});
        this.state.user_id = id;
        console.log("setting user id --> ", this.state.user_id);
      }
    
      render() {
          return (
            <BrowserRouter>
                <div>
                    <Route 
                      // exact path="" 
                      render={(props) => ( 
                          <Navigation
                            isSignedIn={this.state.isSignedIn} 
                            role={this.state.role}
                            onRouteChange={this.onRouteChange}
                            setUserID={this.setUserID}
                            {...props}
                          />
                        )}
                      />
                      
                      <Switch>
                          <div>
                            {this.state.isSignedIn ?
                            <div></div>
                            :
                            <div>
                              <Route exact path="/" component={Home} />
                            </div>
                              // <Route exact path="/" render={(props) => <Home isSignedIn={this.state.isSignedIn} {...props} /> }/>
                              
                            }
    
                            <Route exact path="/signin" render={(props) => <Signin onRouteChange={this.onRouteChange} setRole={this.setRole} setUserID={this.setUserID} {...props} /> } />
                            <Route exact path="/register" render={(props) => <Register onRouteChange={this.onRouteChange} setRole={this.setRole} setUserID={this.setUserID} {...props} /> }/>
                         
                            {this.state.role == "student" ?
                                <div>
                                    {/* STUDENT */}
                                    {/* /practice --> /authHome 
                                        for generalising all the roles :'(
                                    */}
                                    {this.state.isSignedIn ?
                                      <div>
                                        <div>
                                        <Route path="/authHome" component={Topic}/>
                                        <Route path="/subtopic" component={Sub} />
                                        <Route path="/category" component={Cat} />
                                        <Route path="/practise" component={Practise} />
                                        <Route path="/tutorial" component={Tutorial} />
                                        <Route path="/tutorial_sub" component={Tutorial_sub} />
                                        <Route path="/video" component={Video} />
                                        <Route path="/profile" component={Profile}/>
                                        <Route path="/next" component={Next}/>
                                        <Route path="/drag" component={Drag_Drop}/>
                                        <Route path="/test_consent_page" component={Ready}/>
                                        <Route path="/test" component={Test}/>
                                        <Route path="/problem_of_the_week" component={Problem}/>
                                        <Route path="/problem_of_the_week_begin" component={POTW_Questions}/>
                                      </div>
                                      </div>
                                    :
                                      <div></div>
                                    }
                                </div>
                                :
                                <div>
                                    {this.state.role == "instructor" ?
                                        <div>
                                            {/* INSTRUCTOR */}
                                            {this.state.isSignedIn ?
                                              <div>
                                                  <Route path="/authHome" render={(props) => <InstructorHome user_id={this.state.user_id} {...props} />} />
                                                  <Route path="/createTutorial" render={(props) => <CreateTutorial user_id={this.state.user_id} {...props} />} />
                                                  <Route path="/createPracticeProblems" render={(props) => <PracticeProblems user_id={this.state.user_id} {...props} />} />
                                                  {/* <Route path="/examCorner" component = {ExamCorner2} /> */}
                                                  <Route path="/examCorner" render={(props) => <ExamCorner2 user_id={this.state.user_id} {...props} />} />
                                              </div>
                                            :
                                            <div>
                                              
                                            </div>
                                          }
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
    
                    {/* <Footer /> */}
                </div>
            </BrowserRouter>
        );
      }
    }

export default App;

//npm run nodemon
//npm run start

// jhamela hoile, CSE408 -> Learn Math Final Codebase -> CSE408-master theke add korbo :| 