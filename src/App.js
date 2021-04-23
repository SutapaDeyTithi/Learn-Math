import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import topic from "./Components/topic";



function App() {
    return (
        <BrowserRouter>
            <div>
                 <NavigationBar />
                <Switch>
                     <Route path="/"  exact component = {Home} /> 
                     {/* <Route path="/"  exact component = {Home} />  */}
                     <Route path="/getStarted" component ={topic} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
