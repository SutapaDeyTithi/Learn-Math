import React, { Component } from "react";
import "./cat.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


class Cat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            subtopic_array: [],
            category: [],
            subtopic_name: "",
            topic_name: ""

        };
    }



    componentDidMount() {
        fetch("http://localhost:5000/subtopic")
            .then(res => res.json())
            .then(json => this.setState({ category: json }));
        const name_arry = this.props.location.state.name.split('//', 2);

        this.setState({ subtopic_name: name_arry[1] })
        this.setState({ topic_name: name_arry[0] })


    }

    render() {
        return (
            <div>

                <section id="category">
                <h1>{this.props.location.state.name}</h1>
                    

                </section>

            </div>

        )
    }
}
export default Cat;