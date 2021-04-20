import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import NavigationBar from "./Components/NavigationBar";


function App() {
    return (
        <BrowserRouter>
            <div>
                <NavigationBar />
                <Switch>

                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
