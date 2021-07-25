import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import quiz from "../../Resources/Images/exam.png"
import Calc from "./Calculator.js"
import Alert from '@material-ui/lab/Alert';

class problem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            question: [],
            image: null,
            image2: null,
            image3: null,
            upload_done: 0,
            index: 0,
            end: 0,ques_id :0

        };
        this.onImageChange = this.onImageChange.bind(this);
        


    }
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };
   
    
    upload = event => {
        this.setState({
            upload_done: 1
        })
        fetch('http://localhost:5000/uploadAnsPOTW', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                email: '1605014_ugrad.cse.buet.ac.bd',
                image1: this.state.image,
                contest_name: 'All about circles!',
                question_id :1

            })
        })
            .then((response) => response.json())

    }
    end_quiz = e => {
        this.setState({
            end_quiz: 1
        })
    }
    componentDidMount() {
        fetch("http://localhost:5000/POTWQuestion")
            //console.log(res);
            .then(res => res.json())

            .then(json =>
                this.setState({ question: json }));


    }

    split_string = e => {
        console.log(e);
    }
    showcalc = e => {
        this.setState({ index: 1 })
    }
    hidecalc = e => {
        this.setState({ index: 0 })
    }


    render() {



        return (

            <div style={{ overflowX: 'hidden' }}>
                {
                    !this.state.end_quiz
                        ? (
                            <div className="row">
                                <div className="col-md-2 borderright" style={{ textAlign: "center", marginTop: 70 }}>
                                    <img src={quiz} />
                                </div>
                                <div className="col-md-6 borderright" style={{ textAlign: "center", marginTop: 70 }}>

                                    {this.state.question.map(filteredName => (
                                        <div>
                                            <h5>Question 1</h5>
                                            <hr></hr>
                                            <h5>{filteredName.q_text}</h5>

                                            <img src={`../img/${filteredName.q_figures}`} style={{ width: 200, height: 200 }} />
                                        </div>


                                    ))
                                    }
                                    {
                                        !this.state.index
                                            ? (<button className="show-calc" onClick={this.showcalc}>Show Calculator</button>)
                                            : (<button className="show-calc" onClick={this.hidecalc}>Hide Calculator</button>)
                                    }

                                </div>
                                <div className="col-md-4 third " style={{ textAlign: "center" }}>
                                    <h5>Write your answer for individual questions in seperate pages and upload images </h5>
                                    <label>Answer</label><input type="file" name="myImage" onChange={this.onImageChange} style={{ marginLeft: 25, marginBottom: 15, marginTop: 30 }} />
                                    
                                    <button className="submit" onClick={this.upload} style={{ marginLeft: -50 }}>Upload</button>
                                    {
                                        this.state.index
                                            ?
                                            (
                                                <Calc />
                                            )
                                            : (<h1></h1>)
                                    }
                                    {
                                        this.state.upload_done===1 && this.state.image !=null ?(
                                            <div>
                                            <button className="submit"onClick={this.end_quiz} style={{marginLeft:-50}}>End Test</button>
                                            <Alert severity="success" style={{marginTop:50}}>You have successfully uploaded answers</Alert>
                                            </div>)
                                        :(<h1></h1>)
                                    }
                                </div>
                            </div>
                        )
                        : (<h4></h4>)
                }

            </div>


        );
    }
}
export default problem;