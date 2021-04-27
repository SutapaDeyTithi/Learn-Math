import React,{Component} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import topic from "./Components/topic";
import subtopic from './Components/subtopic';


class App extends Component {

    render(){
    return (
        
        
        <BrowserRouter>
            <div>
                  <NavigationBar />
                <Switch>
                     <Route path="/"  exact component = {Home} /> 
                     <Route path="/"  exact component = {Home} /> 
                     <Route path="/getStarted" component ={topic} />
                     <Route path="/subtopic" component={subtopic}/>
                     
                </Switch> 
                
                {/* <Footer /> */}
           </div>
        </BrowserRouter>
    );
    }
}

export default App;
