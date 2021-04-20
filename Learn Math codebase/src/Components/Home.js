import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";
//importing resources
import welcome from "../Resources/Images/homepage1.jpg";


class Home extends Component {
    render() {
        return (
            <>
                <main>
                    <section id="home">
                        <div className="container-fluid">
                            <img
                                className="welcome-img mx-left"
                                src={welcome}
                            />
                        </div>
                    </section>
                </main>
            </>
        );
    }
}

export default Home;

