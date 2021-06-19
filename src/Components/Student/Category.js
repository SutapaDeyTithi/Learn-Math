import React, { Component } from "react";
import "./cat.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import category_pic from "../../Resources/Images/content 2.png";
import gcd from "../../Resources/Images/image 70.png";
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
        fetch("http://localhost:5000/category")
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
                    { }
                    <h3 >Category      <img className="cat_pic" src={category_pic} /></h3>
                    <div className="box">
                        {/* <h1>{this.props.location.state.name}</h1> */}
                        <div className="row">

                            {this.state.category.filter(el => el.sub_name == this.state.subtopic_name).map(filteredName => (


                                <div className="card my-card" >
                                    <img src={`../img/${filteredName.cate_name}.jpg`} className="cat_img_all"></img>
                                    {/* <img src={gcd} className="all_img"/> */}
                                    <div className="card-body">
                                        <p className="card_text" >
                                            {/* {filteredName.cate_name} */}

                                            <Link className="link"
                                                to={{
                                                    pathname: "/practise",
                                                    state: {
                                                        name: this.props.location.state.name+ "//" + filteredName.cate_name
                                                    }
                                                }}>{filteredName.cate_name}</Link>
                                        </p>
                                    </div>
                                </div>

                            ))
                            }
                        </div>
                    </div>

                </section>

            </div>

        )
    }
}
export default Cat;