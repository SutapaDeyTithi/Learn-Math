import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Topic from "./Components/Topic";
import Sub from "./Components/Sub";
import Cat from "./Components/Category";
import Practise from "./Components/Practise";
import NavigationBar2 from "./Components/Navigation2";
import First_page from "./Components/Signin";
import Register from "./Components/Register";
//import Signin from "./Components/Signin";
import Tutorial from "./Components/Tutorial";
import Tutorial_sub from "./Components/Tutorial_sub"
import Video from "./Components/Video"
import Profile from "./Components/Profile";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: 0, language: '',
            isAuthenticated: false,
            text: 0
        };

        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
    }
    
    handleLanguage = (langValue) => {
        this.setState({ isToggleOn: langValue });
    }
    


    render() {
        
        return (


            <BrowserRouter>

                <div>
                    
                    {
                        this.state.isToggleOn > 0
                            ? <NavigationBar />
                            : (

                                <NavigationBar2 />


                            )

                    }
                    {/* <h1 style={{marginTop:100}}>{this.state.isToggleOn}</h1> */}
                    <Switch>
                        {/* render={(props) => <Home passToParent={this.childCallback} {...props} /> } */}
                        <Route exact path="/" render={(props) => <Home passToParent={this.handleLanguage} {...props} /> } />
                        <Route exact path="/first" render={(props) => <First_page passToParent={this.handleLanguage} {...props} /> } />



                        <Route exact path="/register" render={(props) => <Register passToParent={this.handleLanguage} {...props} /> }/>
                        <Route path="/practice" component={Topic}/>
                        <Route path="/subtopic" component={Sub} />
                        <Route path="/category" component={Cat} />
                        <Route path="/practise" component={Practise} />
                        <Route path="/tutorial" component={Tutorial} />
                        <Route path="/tutorial_sub" component={Tutorial_sub} />
                        <Route path="/video" component={Video} />
                        <Route path="/profile" component={Profile}/>


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