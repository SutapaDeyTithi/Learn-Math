// import React, { Component } from "react";

// class DisplayImage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       image: null
//     };

//     this.onImageChange = this.onImageChange.bind(this);
//   }

//   onImageChange = event => {
//     if (event.target.files && event.target.files[0]) {
//       let img = event.target.files[0];
//       this.setState({
//         image: URL.createObjectURL(img)
//       });
//     }
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <div>
//             {/* <img src={this.state.image} /> */}
//             <h1>Select Image</h1>
//             <input type="file" name="myImage" onChange={this.onImageChange} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default DisplayImage;
import React, { useState, useEffect } from 'react';
import { Text, TextInput, View } from 'react-native';
import MathJax from 'react-mathjax';
import './test.css';
import Timer from "./timer";
import Rank from "../../Resources/Images/image 92.png";
import level from "../../Resources/Images/image 93.png";
import Table_Rating from "./table_rating";
import Exam from "../../Resources/Images/exam.png";
import Calc from "./Calculator.js"
import axios from 'axios';
import Score from "./showscore";
import Options from "./show_options";
import props from 'prop-types';
export default function Test(props) {
    // let inputf = '';
    const [questions_array, setQuestion_array] = useState([]);
    const [data, setData] = useState([]);
    const [user,setuser]=useState(0);
    //setuser(props.user_id);
    useEffect(async () => {
        // const result = await fetch(
        //     "http://localhost:5000/POTWQuestion"
        // );
        // const temp=await result.json();
        // setData(temp.hits);
        // console.log(data);
        // const requestOptions = {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ title: 'React PUT Request Example' })
        // };
        // fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
        //     .then(response => response.json())
        //     .then(data => this.setState({ postId: data.id }));
    });
    const questions = [
        {
            questionText: '2a * 3b^2 * 4c * 6a^2 * 5b^3',
            questtionHeader: "What is the result of the equation?",
            answerOptions: [
                { answerText: '720a^2b^7c', isCorrect: false },
                { answerText: '720a^2b^5c', isCorrect: false },
                { answerText: '720a^3b^5c', isCorrect: true },
                { answerText: '720a^2b^3c', isCorrect: false },
            ],
        },
        {
            questionText: '4x^2 + 7z -3y , 8x^2 + 5y -3z , y+2z',
            questtionHeader: "Please sum up the elements",
            answerOptions: [
                { answerText: '12x^2+2y-z', isCorrect: false },
                { answerText: '12x^2+3y+6z', isCorrect: true },
                { answerText: '12x^2+5y+7z', isCorrect: false },
                { answerText: '10x^2+3y+6z', isCorrect: false },
            ],
        },
        {
            questionText: ' (x + 1/x =3) , then (2+x^2+1/x^2)^2=81',
            questtionHeader: "Justify whether the given statement is true or false",
            answerOptions: [
                { answerText: 'True', isCorrect: true },
                { answerText: 'False', isCorrect: false },

            ],
        },
        {
            questionText: '-45x^6y^9 / -5x^2 ',
            questtionHeader: "What is the result of the division?",
            answerOptions: [
                // { answerText: '9x^4y^9', isCorrect: true },

            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [index, setIndex] = useState(0);
    const [value, onChangeText] = React.useState("")
    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    const showcalc = e => {
        setIndex(1);
        console.log("hello");
    }
    const hidecalc = e => {
        setIndex(0);
    }
    const onChangeVal = e => {
        // setInputf(e);
        // onChangeText(e);
        if (e === "5x^4y^9") {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    // const chg_ans4 = (e) => {
    //     setAns4(e.target.value);
    //     const nextQuestion = currentQuestion + 1;
    //     if (nextQuestion < questions.length) {
    //         setCurrentQuestion(nextQuestion);
    //     } else {
    //         setShowScore(true);
    //     }
    // };
    return (
        <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>

            {
                showScore ? (
                    <div > 
                        
                        {
                            
                            <Score ans={score} ques={questions.length} uid={props.user_id}/>
                                
                        }

                    </div>)


                    : (
                        <div className="row">

                            <div className="col-md-2 borderright" style={{ textAlign: "center" }}>
                                <h3 style={{ marginTop: 70 }}></h3>
                                <img src={Exam} />
                                

                                {/* <h1 style={{ marginTop: 70 }}>Input:{inputf}</h1> */}
                            </div>
                            <div className="col-md-6 borderright" style={{ textAlign: "center" }}>
                                {showScore ? (
                                    <div className='score-section' style={{ marginTop: 70 }}>

                                        You scored {score} out of {questions.length}
                                    </div>
                                ) : (
                                    <MathJax.Provider>
                                        <div className='question-section' style={{ marginTop: 70 }}>
                                            <div className='question-count'>
                                                {/* <span>Question {currentQuestion + 1}</span>/{questions.length} */}
                                                <h5>{questions[currentQuestion].questtionHeader}</h5>
                                            </div>
                                            <div className='question-text'><MathJax.Node formula={questions[currentQuestion].questionText} /></div>
                                        </div>

                                    </MathJax.Provider>
                                )}
                                {
                                    !index
                                        ? (<button className="show-calc" onClick={() => showcalc(1)}>Show Calculator</button>)
                                        : (<button className="show-calc" onClick={() => hidecalc(1)}>Hide Calculator</button>)
                                }
                            </div>
                            <div className="col-md-3 third " style={{ textAlign: "center" }}>

                                {
                                    showScore ? (
                                        <h1></h1>
                                    )
                                        : (
                                            <div>
                                                <Timer />
                                                <h6>Please select / write the correct answer</h6>
                                                <MathJax.Provider>

                                                    {
                                                        currentQuestion === 3
                                                            ? (
                                                                <div>
                                                                    <TextInput style={{ borderWidth: 2, borderColor: 'black', height: 30, marginBottom: 30 }}
                                                                        onChangeText={text => onChangeText(text)}
                                                                        value={value}></TextInput>
                                                                    <br></br>
                                                                    <button onClick={() => onChangeVal(value)} style={{ height: 30, borderRadius: 5 }}>Submit</button>
                                                                </div>
                                                            )
                                                            :(
                                                                <div>
                                                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                                                    <div>
                                                                    
                                                                    <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} style={{width:15,height:15,borderRadius:20,marginRight:10}}>
                                                                    </button><MathJax.Node inline formula={answerOption.answerText} />
                                                                    <br></br>
                                                                    </div>
                                                                   
                                                                ))}
                                                                </div>
                                                            )
                                                            // : (<div className="radio-buttons">


                                                            //     {questions[currentQuestion].answerOptions.map((answerOption) => (
                                                            //         // <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                                            //         <li className="none">

                                                            //             <input type="radio" className="check" name="platform" value={answerOption}
                                                            //                 onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} />
                                                            //             <MathJax.Node inline formula={answerOption.answerText} />

                                                            //         </li>
                                                            //     ))}
                                                            // </div>
                                                           // )
                                                    }

                                                
                                                </MathJax.Provider>
                                                {
                                                    index
                                                        ?
                                                        (
                                                            <Calc />
                                                        )
                                                        : (<h1></h1>)
                                                }
                                            </div>
                                        )
                                }


                            </div>

                        </div>
                    )
            }
        </div>
    );
}
