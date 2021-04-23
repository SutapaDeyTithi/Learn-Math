import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";


function App() {
    return (
        <BrowserRouter>
            <div>
                <NavigationBar />
                <Switch>
                    <Route path="/" component = {Home} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
